from datetime import datetime
from flask import Flask

app = Flask(__name__)

@app.route("/health")
def hello_world():
   now = datetime.now() 
   return f"Current time: {now} \n OK"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
