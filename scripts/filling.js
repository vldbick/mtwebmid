function fillingTOP(data) {
    const cur = data.current;
    const loc = data.location;
    const cityName = document.querySelector('.mti-name');
    const countryName = document.querySelector('.mti-country');
    const oblName = document.querySelector('.mti-obl');
    const img = document.querySelector('.mt-img img');

    img.src = cur.condition.icon;
    cityName.textContent = loc.name;
    countryName.textContent = loc.country;
    oblName.textContent = loc.region
}
function fillingCurrent(current) {
    const temp = document.querySelector('.now-temp span');
    const wind = document.querySelector('.now-wind span');
    const cond = document.querySelector('.now-weahet span');

    temp.textContent = current.temp_c;
    wind.textContent = current.wind_kph;
    cond.textContent = current.condition.text;
}
function allFilling(data) {
    fillingTOP(data);
    fillingCurrent(data.current);
    fillingCardsHolder(data.forecast.forecastday);
}

function fillingCardsHolder(forecastday) {
    const holder = document.querySelector('.cards-holder')
    holder.innerHTML = ''
    forecastday.forEach((el)=>{
        const card = createCard(el);
        holder.innerHTML += card
    })
}

function createCard(item) {
    const day = item.day;
    const date = item.date
    return `<div class="main-card">
        <div class="mc-date">${date}</div>
        <div class="mc-img">
            <img src="${day.condition.icon}" alt="">
        </div>
        <div class="mc-temp">${
            day.avgtemp_c
            }˚C</div>
        <div class="mc-weather">${day.condition.text}</div>
    </div>`
}

export { allFilling }