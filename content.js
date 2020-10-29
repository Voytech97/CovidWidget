let cases = document.getElementById('cases');
let recovered = document.getElementById('recovered');
let deaths = document.getElementById('deaths');

function getCases() {
    fetch('https://disease.sh/v3/covid-19/countries/poland?strict=true')
    .then(res => res.json())
    .then(data => {
        cases.innerHTML = `Zarażonych: ${data.cases}(${data.todayCases})`;
        recovered.innerHTML = `Wyzdrowiało: ${data.recovered}(${data.todayRecovered})`;
        deaths.innerHTML = `Zmarło: ${data.deaths}(${data.todayDeaths})`;
    })
}

getCases();