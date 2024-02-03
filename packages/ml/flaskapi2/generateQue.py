def generateQue(pdfText: str):
    # Replace '\n' with a space
    cleanedPdfText = pdfText.replace('\n', ' ')
    
    # Split the text into a list of questions based on the question mark
    questions = cleanedPdfText.split("Question: ")

    # Remove the empty string at the beginning (if any)
    if questions[0] == "":
        questions = questions[1:]

    # Split each question based on the question mark
    questions_with_marks = [question.split("Question :") for question in questions]

    # Flatten the list of lists into a single list
    flattened_questions = [item.strip() for sublist in questions_with_marks for item in sublist]

    # Remove elements with only whitespace and no letters
    filtered_questions = [question for question in flattened_questions if any(c.isalpha() for c in question)]

    return filtered_questions

# Example usage
""" pdfText = "Question\n:\nWhat\nmakes\na\nparticular\ncharacter\nin\na\nnovel\nor\nplay\nmemorable\nor\nrelatable\nto\nyou?\nExplore\ntheir\nmotivations\nand\nactions\nfrom\ndifferent\nperspectives\nQuestion\n:\nWould\nyou\nrecommend\nthis\nbook\nto\nothers?\nWhy\nor\nwhy\nnot?\nDefend\nyour\nopinion\nwith\nsupporting\narguments\nQuestion\n:\nWhat\nare\nthe\npotential\nlong-term\nimpacts\nof\na\nrecent\nhistorical\nevent,\nand\nhow\nmight\nhistorians\ndebate\nthem\nin\nthe\nfuture?\nQuestion\n:\nWhy\nnextjs\nis\npreferable\nover\nreactjs?\nQuestion\n:\nWhat\nis\nserver\nside\nrendering?"

result = generateQue(pdfText)
print(len(result))
print(result) """