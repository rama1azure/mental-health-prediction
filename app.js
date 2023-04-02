const form = document.getElementById('prediction-form');
const result = document.getElementById('prediction-result');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const feature1 = document.getElementById('feature1').value;
    const feature2 = document.getElementById('feature2').value;
    const feature3 = document.getElementById('feature3').value;
    const feature4 = document.getElementById('feature4').value;
    const feature5 = document.getElementById('feature5').value;
    const feature6 = document.getElementById('feature6').value;
    const feature7 = document.getElementById('feature7').value;
    const feature8 = document.getElementById('feature8').value;
    const feature9 = document.getElementById('feature9').value;
    const feature10 = document.getElementById('feature10').value;
    const feature11 = document.getElementById('feature11').value;
    
    const data = {
        features: [feature1, feature2, feature3, feature4, feature5, feature6, feature7, feature8, feature9, feature10, feature11]
    };

    try {
        const response = await fetch('https://mentalhealthseverityprediction.azurewebsites.net/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.status === 200) {
            const prediction = await response.json();
            result.innerHTML = `Prediction: ${prediction.prediction}`;
        } else {
            result.innerHTML = `Request failed with status code ${response.status}`;
        }
    } catch (error) {
        console.error('Error:', error);
        result.innerHTML = 'Error: Unable to fetch prediction';
    }
});
