import requests

# URL of the backend API
API_URL = "http://127.0.0.1:8000/predict"

# Corrected path to the test image
TEST_IMAGE_PATH = r"C:\Users\MIER_MIDS\Downloads\Maize\backend\static\images\Maize___Common_Rust.jpg"

def test_backend(api_url, image_path):
    try:
        # Open the image file in binary mode
        with open(image_path, "rb") as image_file:
            # Prepare the file payload
            files = {"file": image_file}

            # Send POST request to the backend
            response = requests.post(api_url, files=files)

            # Check if the request was successful
            if response.status_code == 200:
                print("Response from backend:")
                print(response.json())
            else:
                print(f"Error: Received status code {response.status_code}")
                print(response.text)
    except Exception as e:
        print(f"Error: {e}")

# Run the script
if __name__ == "__main__":
    test_backend(API_URL, TEST_IMAGE_PATH)
