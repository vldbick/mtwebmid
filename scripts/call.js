
async function fetchAndParse(city) {
    const API_KEY = 'fe40dfed2d6d488c8bc182952240805'
    let url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=10&aqi=yes&alerts=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}


export {fetchAndParse} ;