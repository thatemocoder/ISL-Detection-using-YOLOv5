from flask import Flask, render_template, request, jsonify
import base64
import cv2
import numpy as np
import torch


app = Flask(__name__)


# Load YOLOv5 model
model = torch.hub.load('ultralytics/yolov5', 'custom', path='C:/Users/ujanp/OneDrive/Desktop/Project/yolov5/last.pt')  # Update with your model path

# Route to serve the index.html
@app.route('/')
def index():
    return render_template('index.html')

# Route to process frames
@app.route('/process_frame', methods=['POST'])
def process_frame():
    data = request.json['frame']
    
    # Decode the base64 image
    image_data = base64.b64decode(data.split(",")[1])
    np_image = np.frombuffer(image_data, np.uint8)
    img = cv2.imdecode(np_image, cv2.IMREAD_COLOR)

    # Run YOLOv5 model
    results = model(img)

    # Extract and return results
    detections = results.pandas().xyxy[0]  # bounding box with labels and confidence
    detected_signs = [f"{row['name']} ({row['confidence']:.2f})" for _, row in detections.iterrows()]

    return jsonify({"result": ", ".join(detected_signs)})

if __name__ == '__main__':
    app.run(debug=True)
