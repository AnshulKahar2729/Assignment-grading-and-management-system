from flask import Flask, jsonify, request
#from helper import extract_text_from_pdf_url,calculate_cosine_similarity
from extract import extract_text_from_pdf_url
from similarity import calculate_cosine_similarity
app = Flask(__name__)

@app.route('/', methods=['POST'])
def hello_world():
    if request.is_json:
        # Get the JSON data from the request
        body = request.get_json()

        # Check if the required keys are present in the JSON data
        if 'currentSubmission' in body and 'previousSubmission' in body:
            cursuburl = body['currentSubmission']  #string
            prevsuburlArr = body['previousSubmission'] #array of strings
            print(cursuburl)
            print(prevsuburlArr)

            # Extract text from the PDF URLs
            cursubtext = extract_text_from_pdf_url(cursuburl)
            print(cursubtext)

            # extract questions from the current submission
            currQuestions = generateQue(cursubtext)

            #i want one variable which will conatain all the text of the previous submissions
            #we need to make for loop for this and call the function extract_text_from_pdf_url for each url
            #and then append the text to the variable
            prevconatiner=[]
            for i in range(len(prevsuburlArr)):
                prevconatiner+=extract_text_from_pdf_url(prevsuburlArr[i])
            print(prevconatiner)

                

            

            prevsubtext = extract_text_from_pdf_url(prevsuburlArr)
            print(prevsubtext)

            # Calculate the cosine similarity
            plagirismScore = calculate_cosine_similarity(cursubtext, prevsubtext)
            print(plagirismScore)
            relativePlagirismScore = (plagirismScore*10)

            # Respond with a JSON object
            
            return jsonify({"message":"hello eo kaam"}), 200
        else:
            # If the required keys are not present, respond with an error
            return jsonify({"error": "Invalid JSON data"}), 400
    else:
        # If the request is not JSON, respond with an error
        return jsonify({"error": "Invalid Content-Type, expected application/json"}), 415


# extraction
@app.route('/extract', methods=['POST'])
def extract_text():
    if request.is_json:
        # Get the JSON data from the request
        body = request.get_json()

        # Check if the required keys are present in the JSON data
        if 'pdfUrl' in body:
            pdf_url = body['pdfUrl']

            # Extract text from the PDF URL
            pdf_text = extract_text_from_pdf_url(pdf_url)

            # Respond with a JSON object
            return jsonify({"pdfText": pdf_text}), 200
        else:
            # If the required keys are not present, respond with an error
            return jsonify({"error": "Invalid JSON data"}), 400
    else:
        # If the request is not JSON, respond with an error
        return jsonify({"error": "Invalid Content-Type, expected application/json"}), 415
if __name__ == '__main__':
    app.run(debug=True)