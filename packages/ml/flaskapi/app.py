from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def hello_world():
    if request.is_json:
        # Get the JSON data from the request
        body = request.get_json()

        # Check if the required keys are present in the JSON data
        if 'currentSubmission' in body and 'previousSubmission' in body:
            url1 = body['currentSubmission']
            url2 = body['previousSubmission']
            print(url1)
            print(url2)

            # Respond with a JSON object
            return jsonify({"url1": url1, "url2": url2}), 200
        else:
            # If the required keys are not present, respond with an error
            return jsonify({"error": "Invalid JSON data"}), 400
    else:
        # If the request is not JSON, respond with an error
        return jsonify({"error": "Invalid Content-Type, expected application/json"}), 415

if __name__ == '_main_':
    app.run(debug=True)
