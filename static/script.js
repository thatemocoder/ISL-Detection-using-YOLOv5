const video = document.getElementById('webcam');
const outputText = document.getElementById('outputText');
const webcamList = document.getElementById('webcamList');
const fileInput = document.getElementById('fileInput');
const toggleBtn = document.getElementById('toggleBtn');
const webcamSection = document.getElementById('webcamSection');
const fileSection = document.getElementById('fileSection');
let currentStream;
let isFileUpload = false;

// Function to start webcam stream
function startWebcam(deviceId) {
    const constraints = {
        video: { deviceId: deviceId ? { exact: deviceId } : undefined }
    };

    navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
        if (currentStream) {
            currentStream.getTracks().forEach(track => track.stop());
        }
        currentStream = stream;
        video.srcObject = stream;
    })
    .catch(error => {
        console.error('Error accessing webcam:', error);
    });
}

// Populate webcam list
navigator.mediaDevices.getUserMedia({ video: true }).then(() => {
    return navigator.mediaDevices.enumerateDevices();
}).then(devices => {
    devices.forEach(device => {
        if (device.kind === 'videoinput') {
            const option = document.createElement('option');
            option.value = device.deviceId;
            option.text = device.label || `Camera ${webcamList.length + 1}`;
            webcamList.appendChild(option);
        }
    });
}).catch(error => {
    console.error('Error accessing devices:', error);
});

webcamList.addEventListener('change', function() {
    startWebcam(this.value);
});

startWebcam();

// Capture frame and send to backend
function captureAndSendFrame() {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert to base64 format
    const frameData = canvas.toDataURL("image/jpeg");

    // Send to backend for YOLOv5 processing
    fetch('/process_frame', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ frame: frameData })
    })
    .then(response => response.json())
    .then(data => {
        // Update outputText with the detected text
        outputText.value = data.result; // Assuming 'result' contains YOLOv5 output
    })
    .catch(error => {
        console.error('Error processing frame:', error);
    });
}

// Send frames periodically (e.g., every 500 ms)
setInterval(captureAndSendFrame, 500);