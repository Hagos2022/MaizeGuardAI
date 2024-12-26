from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.exceptions import HTTPException
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import numpy as np
import tensorflow as tf
import os
import uvicorn

app = FastAPI()

# Enable CORS for frontend-backend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace "*" with frontend's origin for better security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained MaizeGuard model
MODEL_PATH = "C:/Users/MIER_MIDS/Downloads/Maize/backend/maize_fudma_model.h5"

try:
    model = tf.keras.models.load_model(MODEL_PATH)
    print("Model loaded successfully!")
except Exception as e:
    raise HTTPException(status_code=500, detail=f"Failed to load model: {str(e)}")

# Class labels
CLASS_NAMES = [
    "Cercospora Leaf Spot / Gray Leaf Spot",
    "Common Rust",
    "Healthy and Fresh",
    "Northern Leaf Blight",
    "Healthy"
]

# Function to preprocess the uploaded image
def preprocess_image(image_path: str, target_size=(224, 224)):  # Updated target size
    try:
        image = Image.open(image_path).convert('RGB')  # Ensure RGB format
        image = image.resize(target_size)  # Resize image
        image_array = np.array(image) / 255.0  # Normalize pixel values
        image_array = np.expand_dims(image_array, axis=0)  # Add batch dimension
        return image_array
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to preprocess image: {str(e)}")

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # Save uploaded file temporarily
        file_path = f"temp_{file.filename}"
        with open(file_path, "wb") as temp_file:
            temp_file.write(await file.read())
        
        # Preprocess the image
        image_array = preprocess_image(file_path)

        # Make a prediction
        predictions = model.predict(image_array)
        os.remove(file_path)  # Remove temp file

        # Get the index of the highest confidence class
        predicted_index = np.argmax(predictions[0])
        confidence = float(predictions[0][predicted_index])

        # Map index to class name
        predicted_class = CLASS_NAMES[predicted_index]

        # Prepare response
        response = {
            "result": predicted_class,
            "confidence": confidence,
            "message": "Prediction completed successfully",
            "success": True
        }
        print(response)  # Debugging output
        return JSONResponse(response)

    except Exception as e:
        response = {
            "result": None,
            "message": f"Error during prediction: {str(e)}",
            "success": False
        }
        print(response)  # Debugging output
        return JSONResponse(response, status_code=500)

# Run the app
if __name__ == "__main__":
    print("Server is running on http://127.0.0.1:8000")
    uvicorn.run(app, host="127.0.0.1", port=8000)
