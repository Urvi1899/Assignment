from flask import Flask, request, jsonify
import pip
from pip import age_estimator

import age_estimator
app = Flask(__name__)

# Create an instance of the AgeEstimator class
age_estimator = AgeEstimator()

@app.route('/estimate_age', methods=['POST'])
def estimate_age():
    # Get the JSON data from the request
    data = request.get_json()

    # Get the name from the JSON data
    name = data.get('name')

    # Call the get_age method of the AgeEstimator class to estimate the age
    age = age_estimator.get_age(name)

    # Return the estimated age as a JSON response
    return jsonify({'age': age})

if __name__ == '__main__':
    app.run(debug=True)
