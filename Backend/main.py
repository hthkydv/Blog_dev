import os
from flask import Flask, jsonify
from flask_cors import CORS
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv

load_dotenv()
uri = os.getenv('MONGO_URI')
print(uri)



app = Flask(__name__)
CORS(app)

# MongoDB connection
client = MongoClient(os.getenv('MONGO_URI'))
db = client['blog_database']
collection = db['blog_posts']



@app.route('/api/posts', methods=['GET'])
def get_all_posts():
    posts = list(collection.find({}))
    for post in posts:
        post['_id'] = str(post['_id'])  # Convert ObjectId to string
    return jsonify(posts)

if __name__ == '__main__':
    app.run(debug=True)