import os
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv

load_dotenv()

# MongoDB connection
client = MongoClient(os.getenv('MONGO_URI'), server_api=ServerApi('1'))
db = client['blog_database']
collection = db['blog_posts']

# Sample data
sample_data = [
    {
        "title": "Understanding DevOps",
        "image": "https://example.com/devops.png",
        "tags": ["DevOps", "Software Engineering"],
        "description": "An in-depth look at DevOps and how it is transforming the way software is developed and deployed.",
        "author": "Hritik Yadav"
    },
    {
        "title": "React for Beginners",
        "image": "https://example.com/react.png",
        "tags": ["React", "Frontend Development"],
        "description": "A beginner's guide to getting started with React.js for building modern web applications.",
        "author": "John Doe"
    },
    {
        "title": "Continuous Integration with Jenkins",
        "image": "https://example.com/jenkins.png",
        "tags": ["CI/CD", "Jenkins", "DevOps"],
        "description": "Learn how to set up a continuous integration pipeline with Jenkins for automated testing and deployment.",
        "author": "Jane Smith"
    }
]

# Insert sample data
result = collection.insert_many(sample_data)
print(f"Inserted {len(result.inserted_ids)} documents into the database.")
