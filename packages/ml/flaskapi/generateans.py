import os
import google.generativeai as genai
from dotenv import load_dotenv

# Your API key
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

# Configure the Generative AI API with the provided key
genai.configure(api_key=GOOGLE_API_KEY)

# Choose a model (make sure 'gemini-pro' is a valid model)
model = genai.GenerativeModel('gemini-pro')

def generateGenAns(assignmentCleanedTextArrStr):
    response = model.generate_content(assignmentCleanedTextArrStr)
    print("AI RESPONSE: ", response.text)
    return response.text







