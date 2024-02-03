import PyPDF2
import nltk
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from io import BytesIO
import requests
import os

def extract_text_from_pdf_url(pdf_url: str) -> str:
    try:
        response = requests.get(pdf_url)
        pdf_data = BytesIO(response.content)

        with open('temp.pdf', 'wb') as temp_pdf:
            temp_pdf.write(response.content)

        pdf_text = ""
        with open('temp.pdf', 'rb') as temp_pdf:
            reader = PyPDF2.PdfReader(temp_pdf)
            for page_num in range(len(reader.pages)):
                page = reader.pages[page_num]
                pdf_text += page.extract_text()

        return pdf_text.replace('\n', ' ')
    except Exception as e:
        print(f"Error extracting text from {pdf_url}: {e}")
        return ""
    finally:
        # Remove temporary PDF file
        try:
            os.remove('temp.pdf')
        except OSError:
            pass