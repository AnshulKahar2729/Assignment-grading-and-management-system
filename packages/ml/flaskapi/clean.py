def clean_Ans(currentUncleanedText:str) -> list:
    # Split the string into an array using "Answer:" as the delimiter
    answers_array = currentUncleanedText.split("Answer:")

    # Remove empty strings from the array
    answers_array = [answer.strip() for answer in answers_array if answer]

    # Add "Answer:" prefix to each element of the array
    answers_array = ["Answer:" + answer for answer in answers_array]

    # Print the resulting array
    # print(answers_array)
    # print(len(answers_array))
    # print(type(answers_array))

    return answers_array

def clean_Ques(assignmentUncleanedText:str) -> list:
    # Split the string into an array using "Question : " as the delimiter
    questions_array = assignmentUncleanedText.split("Question : ")

    # Remove empty strings from the array
    questions_array = [question for question in questions_array if question]

    # Add "Question : " prefix to each element of the array
    questions_array = ["Question : " + question.strip() for question in questions_array]

    # print(questions_array)
    # print(len(questions_array))
    # print(type(questions_array))

    return questions_array