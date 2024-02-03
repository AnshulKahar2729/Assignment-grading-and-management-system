import pathlib
import textwrap
import os
import google.generativeai as genai
from IPython.display import display, Markdown
from dotenv import load_dotenv


# Your API key
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

# Configure the Generative AI API with the provided key
genai.configure(api_key=GOOGLE_API_KEY)

def to_markdown(text):
    text = text.replace('•', '  *')
    return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

def shorten_response(response, max_length=100):
    return response.text[:max_length]

# Print the supported models
for m in genai.list_models():
    if 'generateContent' in m.supported_generation_methods:
        print(m.name)

# Choose a model (make sure 'gemini-pro' is a valid model)
model = genai.GenerativeModel('gemini-pro')

# Generate content using the selected model
response = model.generate_content("give me some indian food names")

# Shorten the response
shortened_response = shorten_response(response, max_length=100)

# Display the shortened response in Markdown format
#display(to_markdown(shortened_response))

# Print the shortened response as plain text
print(shortened_response)