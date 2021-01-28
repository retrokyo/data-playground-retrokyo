import redis
from flask import Flask, request, jsonify

app = Flask(__name__)
cache = redis.Redis(host="redis", port=6379)

@app.route('/stats/<string:userId>', methods=["GET", "POST"])
def record_user_stats(userId):
    retries = 5
    if request.method == "POST":
        #Set data in redis
        request_data = request.get_json()

    elif request.method == "GET":
        #get based on userid
        
