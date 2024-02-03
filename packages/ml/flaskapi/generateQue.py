# make a function which take input as string and return the response

def generateQue(pdfText: str):
    
    cleanedPdfText = pdfText.replace('\n', ' ')
    # Split the text into a list of questions, maintaining "Question: " prefix
    questions = cleanedPdfText.split("Question: ")

    # Remove the empty string at the beginning (if any)
    if questions[0] == "":
        questions = questions[1:]

        #Print the array of questions
        print(questions)

    #

generateQue("Question\n:\nWhat\nmakes\na\nparticular\ncharacter\nin\na\nnovel\nor\nplay\nmemorable\nor\nrelatable\nto\nyou?\nExplore\ntheir\nmotivations\nand\nactions\nfrom\ndifferent\nperspectives\nQuestion\n:\nWould\nyou\nrecommend\nthis\nbook\nto\nothers?\nWhy\nor\nwhy\nnot?\nDefend\nyour\nopinion\nwith\nsupporting\narguments\nQuestion\n:\nWhat\nare\nthe\npotential\nlong-term\nimpacts\nof\na\nrecent\nhistorical\nevent,\nand\nhow\nmight\nhistorians\ndebate\nthem\nin\nthe\nfuture?\nQuestion\n:\nWhy\nnextjs\nis\npreferable\nover\nreactjs?\nQuestion\n:\nWhat\nis\nserver\nside\nrendering?")