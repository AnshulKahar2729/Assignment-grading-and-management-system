import os
import google.generativeai as genai
from dotenv import load_dotenv

# Your API key
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

# Configure the Generative AI API with the provided key
genai.configure(api_key=GOOGLE_API_KEY)

def shorten_response(response, max_length=100):
    return response.text[:max_length]

# Choose a model (make sure 'gemini-pro' is a valid model)
model = genai.GenerativeModel('gemini-pro')

def generateGenAns(assignmentCleanedTextArrElement):
    response = model.generate_content(assignmentCleanedTextArrElement)
    # Shorten the response
    shortened_response = shorten_response(response, max_length=100)
    # Print the shortened response as plain text
    print(shortened_response)
    return shortened_response







