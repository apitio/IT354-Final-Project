from flask import Flask, request, jsonify
from flask_cors import CORS
import time
app = Flask(__name__)


CORS(app)

@app.route('/<scriptName>/<month>/<day>/<cycle>', methods=['GET'])
def respond(scriptName, month, day, cycle):
    response = {}
    script = {}

    print(f"Running Script: {scriptName}")
    print("added cors")

    #error handling for script name
    if not scriptName:
        response["Error"] = "Please enter the script name!"

        return jsonify(response)

    elif str(scriptName).isdigit():
        response["Error"] = "The first parameter cannot be a digit! Please enter valid characters!"

        return jsonify(response)

    else:
        script["name"] = scriptName


    #error handling for month
    if not month:
        response["Error"] = "Please enter the month!"

        return jsonify(response)
    
    elif int(month) < 1 or int(month) > 12:
        response["Error"] = "The month should be between 1-12!"

        return jsonify(response)

    else:
        script["month"] = month


    #error handling for day
    if not day:
        response["Error"] = "Please enter the day!"

        return jsonify(response)
    
    elif int(day) < 1 or int(day) > 31:
        response["Error"] = "The day should be between 1-31!"

        return jsonify(response)

    else:
        script["day"] = day


    #error handling for cycle
    if not cycle:
        response["Error"] = "Please enter valid cycle from 1-10!"

        return jsonify(response)

    elif int(cycle) < 1 or int(cycle) > 10:
        response["Error"] = "The cycle should be between 1-10!"

        return jsonify(response)

    else:
        script["cycle"] = cycle


    #do a dummy run for the script
    script["response"] = "The script has been run succesfully!"

    time.sleep(5)

    return jsonify(script)


@app.route('/')
def index():
    print("Connected to the server!")
    return "<h1>Connected to the server!</h1>"


if __name__ == '__main__':
    app.run(threaded=True, port=5000)
