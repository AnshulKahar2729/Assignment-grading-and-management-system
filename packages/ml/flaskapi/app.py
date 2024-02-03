from flask import Flask, jsonify, request
from extract import extract_text_from_pdf_url
from clean import clean_Ans, clean_Ques
from similarity import calculate_cosine_similarity
from generateans import generateGenAns
from convert import convertStrToArr

app = Flask(__name__)

@app.route('/', methods=['POST'])
def calculateGrade():
     if request.is_json:
        # Get the JSON data from the request
        body = request.get_json()

        if 'currentSubmissionURL' in body and 'previousSubmissionArrURL' in body and 'assignmentURL' in body:
            currentSubmissionURL = body['currentSubmissionURL']  # contains answer
            previousSubmissionArrURL = body['previousSubmissionArrURL']  # conntains answer 
            assignmentURL = body['assignmentURL']    # contains question

            # Extract uncleanedtext from the PDF URLs
            currentUncleanedText = extract_text_from_pdf_url(currentSubmissionURL)
            print("currentUncleanedText from app", currentUncleanedText)
            assignmentUncleanedText = extract_text_from_pdf_url(assignmentURL)
            print("assignmentUncleanedText from app", assignmentUncleanedText)
            previousUncleanedArrText = []
            for i in range(len(previousSubmissionArrURL)):
                previousUncleanedArrText.append(extract_text_from_pdf_url(previousSubmissionArrURL[i]))

            print("assignmentUncleanedText from app", assignmentUncleanedText)

            # clean the text
            currentCleanedText = currentUncleanedText
            print("currentCleanedText from app", currentCleanedText)
            assignmentCleanedTextArr = clean_Ques(assignmentUncleanedText)
            print("assignmentCleanedTextArr from app", assignmentCleanedTextArr)
            prevCleanedText = ""
            for i in range(len(previousUncleanedArrText)):
                prevCleanedText += previousUncleanedArrText[i]
            print("prevCleanedText from app ", prevCleanedText)

            #CHECK FOR PLAGIARISM
            plagirismScore = calculate_cosine_similarity(currentCleanedText, prevCleanedText)
            print(plagirismScore)
            # plagarismScore will be a float value between 0 and 1
            relativePlagirismScore = (plagirismScore*10)
            print(relativePlagirismScore)

            # NOW FIND AI ANSWER FOR ALL THE QUESTIONS
            AI_GEN_ANS = []
            for i in range(len(assignmentCleanedTextArr)):
                AI_GEN_ANS.append(generateGenAns(assignmentCleanedTextArr[i]))
            print(AI_GEN_ANS)

            
            
            # Respond with a JSON object
            return jsonify({"msg" : "hello world"}), 200


if __name__ == '__main__':
    app.run(debug=True)