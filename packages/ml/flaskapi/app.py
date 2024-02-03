from flask import Flask, jsonify, request
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
            print(currentUncleanedText)
            assignmentUncleanedText = extract_text_from_pdf_url(assignmentURL)
            print(assignmentUncleanedText)
            previousUncleanedArrText = []
            for i in range(len(previousSubmissionArrURL)):
                previousUncleanedArrText.append(extract_text_from_pdf_url(previousSubmissionArrURL[i]))

            print(assignmentUncleanedText)

            # clean the text
            currentCleanedText = clean_Ans(currentUncleanedText)
            print(currentCleanedText)
            assignmentCleanedTextArr = clean_Ques(assignmentUncleanedText)
            print(assignmentCleanedTextArr)
            prevCleanedText = ""
            for i in range(len(previousUncleanedArrText)):
                prevCleanedText += clean_Ans(previousUncleanedArrText[i])
            print(prevCleanedText)

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

            # NOW WE NEED TO convert currentcleanedtext to a list of sentences
            currentCleanedAnswerArr = convertStrToArr(currentCleanedText)
            print(currentCleanedAnswerArr)

            # NOW WE NEED TO COMPARE THE AI GENERATED ANSWERS WITH THE CURRENT ANSWERS
            relevancyScore = []
            for i in range(len(AI_GEN_ANS)):
                relevancyScore.append(calculate_cosine_similarity(currentCleanedAnswerArr[i], AI_GEN_ANS[i]))

            print(relevancyScore)

            MEAN_REL_SCORE_WITHOUT_DIVIDE = 0
            for i in range(len(relevancyScore)):
                MEAN_REL_SCORE_WITHOUT_DIVIDE += relevancyScore[i]

            MEAN_REL_SCORE = MEAN_REL_SCORE_WITHOUT_DIVIDE/len(relevancyScore)
            print(MEAN_REL_SCORE)

            # GRAMMER CHECK
            grammerScore = grammerCheck(currentCleanedText)
            print(grammerScore)
            # grammerScore will be a float value between 0 and 1
            relativeGrammerScore = (grammerScore*10)
            print(relativeGrammerScore)

            # CALCULATE THE FINAL GRADE
            FINAL_GRADE = (relativePlagirismScore + MEAN_REL_SCORE + relativeGrammerScore)/3
            print(FINAL_GRADE)

            # Respond with a JSON object
            return jsonify({"grade": FINAL_GRADE}), 200


if __name__ == '__main__':
    app.run(debug=True)