# mental-health-prediction


Static Web application

Components: login-with_admin_credentials.html, app.js, index.html, logout.html

What it does ?
Static web application is for assessing the mental health - Depression severity. This is deployed as static website using Azure's Static Web App service. Create a Storage account, under static website option, upload all these 4 components (login with credentials, app.js, index.html, logout.html files
With this, mental health prediction application will be running on Azure
 
 This application can be used by the end users to fill the responses for questions and get the prediction of depression severity
 
 
 ML Model:
 
 ML model is built using the sample dataset which contains 9 Questions to predict the severity of depression.
 ML-model-training.py file can be executed to generate the models (model.pkl, scaler.pkl) using the dataset.csv. 
 
 About dataset:
 Severity of dataset is the prediction label
 Gender, age, Q1, Q2 through Q9 are features
 
 These models are containerised and deployed as API endpoints leveraging Flask. For production version, we can use FAST API instead of Flask.
 For containerizing the models, app.py, Dockerfile, scaler.pkl, model.pkl to be placed in the same directly and container images to be generated. Container image to be stored in Azure Container Registry.
 
 Using the docker image in ACR, its deployed to Azure Web app service
 
