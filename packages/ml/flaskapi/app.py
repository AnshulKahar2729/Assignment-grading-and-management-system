from flask import Flask, jsonify,request




app = Flask(__name__)


@app.route('/')
def hello_world():
    return jsonify({'message': 'Hello, World!'}), 200

if __name__ == '__main__':
    app.run()