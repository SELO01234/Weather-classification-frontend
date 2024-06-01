import axios from 'axios'

class YearPredictService {

    predictWeather(rows) {
        const config = {
            headers: {
                'weather_predictions': 'true'
            }
        };
        return axios.post('http://127.0.0.1:5000/predict/weather', rows, config);
    }
}

export default new YearPredictService();