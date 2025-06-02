# 🤟 ISL Detection using YOLOv5

This project focuses on detecting Indian Sign Language (ISL) gestures using the YOLOv5 object detection framework. Developed as a group project for the partial fulfillment of our BTech degree under the mentorship of **Dr. Gopichand G**, the objective was to create a real-time system capable of recognizing and classifying ISL gestures to aid in communication for the hearing and speech impaired.

---

### 📚 Project Overview

The primary goal is to implement a robust and efficient model that can accurately detect and classify various ISL gestures in real-time. By leveraging the capabilities of YOLOv5, the system aims to process live video feeds and identify hand gestures corresponding to ISL alphabets or words, facilitating seamless communication.

---

### 🗂️ Repository Structure

- **`ISL_Detection_Yolov5.ipynb`** – Jupyter Notebook detailing the training and evaluation process of the YOLOv5 model on the ISL dataset.
- **`app.py`** – Python script to run the real-time detection application using the trained model.
- **`static/`** – Directory containing static files such as images or CSS used in the web interface.
- **`templates/`** – HTML templates for rendering the web application's frontend.
- **`yolov5/`** – Directory containing the YOLOv5 model architecture and related scripts.

---

### 🛠️ Technologies Used

- **Programming Language**: Python
- **Libraries and Frameworks**:
  - PyTorch
  - OpenCV
  - Flask
  - YOLOv5
- **Tools**:
  - Jupyter Notebook

---

### 📦 Installation

To set up and run the project locally:

```bash
# Clone the repository
git clone https://github.com/thatemocoder/ISL-Detection-using-YOLOv5.git
cd ISL-Detection-using-YOLOv5

# (Optional) Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

---

### 🚀 Running the Project
1. Train the Model
Open the Jupyter Notebook:

```bash
jupyter notebook ISL_Detection_Yolov5.ipynb
Follow the steps to preprocess the data, train the YOLOv5 model, and evaluate its performance.
```

2. Run Real-Time Detection
Execute the Flask application:

```bash
python app.py
```
Open your browser and navigate to http://127.0.0.1:5000 to access the web interface. Use your webcam to perform ISL gestures, and the system will detect and classify them in real-time.

---

### 🎓 Acknowledgments
We extend our sincere gratitude to Dr. Gopichand G for his invaluable guidance and support throughout the development of this project. This work was undertaken as a group project for the partial fulfillment of our BTech degree.
