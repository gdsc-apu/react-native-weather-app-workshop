const apiKey = '0381a6f5c37746aeb9372608242305';
const apiURL = params => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.country}&days=${params.days}&aqi=no&alerts=no`;

const apiCall = async (URL) => {
    const options = {
        method: 'GET',
        url: URL
    }
    try {
        const response = await axios.request(options);
        return response.data;
    } catch(err) {
        console.log('error', err);
        return null;
    }
}

export const fetchWeatherForecast = params => {
    return apiCall(apiURL(params));
}