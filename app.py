from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)

with open('scaler.pkl', 'rb') as f:
    scaler = pickle.load(f)

with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    features = np.array(data['features'])
    scaled_features = scaler.transform([features])
    prediction = model.predict(scaled_features)

    return jsonify({'prediction': prediction.tolist()[0]})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
