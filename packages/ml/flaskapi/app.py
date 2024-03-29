from flask import Flask, jsonify, request
from extract import extract_text_from_pdf_url
from clean import clean_Ans, clean_Ques
from similarity import calculate_cosine_similarity
from generateans import generateGenAns
from convert import convertStrToArr
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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
            #conert assignmentCleanedTextArr to string
            assignmentCleanedTextArrStr = ""
            for i in range(len(assignmentCleanedTextArr)):
                assignmentCleanedTextArrStr += assignmentCleanedTextArr[i]
            print(assignmentCleanedTextArrStr)

            AI_GEN_ANS = generateGenAns(assignmentCleanedTextArrStr)
            print("AI_ANS FROM APP ",AI_GEN_ANS)
            # for i in range(len(assignmentCleanedTextArr)):
            #     AI_GEN_ANS.append(generateGenAns(assignmentCleanedTextArr[i]))
            # print(AI_GEN_ANS)

            
            relevancyScore = calculate_cosine_similarity(currentCleanedText, AI_GEN_ANS)
            relativeRelevancyScore = (relevancyScore*10)
            print("relevancyScore in app", relativeRelevancyScore)

            plag_threshold = 5

            # Calculate the grammar score
            grammerScore = 7

    
            # Normalize the plagiarism score based on the write answer score
            normalized_plagiarism = relativePlagirismScore / relativeRelevancyScore if relativeRelevancyScore != 0 else 0
    
            # Calculate the total grade, considering the normalized plagiarism score
            finalScore = relativeRelevancyScore + grammerScore - normalized_plagiarism
            
            if normalized_plagiarism > plag_threshold:
                finalScore = finalScore - (plag_threshold / 2)
            else:
                finalScore = finalScore / 2
            

            # Respond with a JSON object
            return jsonify({"grade" : finalScore, "plagirismScore" : relativePlagirismScore, "grammerScore" : grammerScore}), 200


if __name__ == '__main__':
    app.run(debug=True)