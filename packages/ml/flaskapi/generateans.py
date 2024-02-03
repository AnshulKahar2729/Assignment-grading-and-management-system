import os
import google.generativeai as genai
from dotenv import load_dotenv

# Your API key
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

# Configure the Generative AI API with the provided key
genai.configure(api_key=GOOGLE_API_KEY)

# Choose a model (make sure 'gemini-pro' is a valid model)
model = genai.GenerativeModel('gemini-pro')

def generateGenAns(assignmentCleanedTextArrElement):
    response = model.generate_content(assignmentCleanedTextArrElement)
    return response







