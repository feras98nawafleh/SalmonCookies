let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let cities = [];
function City(name, min, max, avgCookiePerSale, counter, randomCustomersPerHour, cookiesPerHour) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.counter = counter;
    this.avgCookiePerSale = avgCookiePerSale;
    this.randomCustomersPerHour = randomCustomersPerHour;
    this.cookiesPerHour = cookiesPerHour;

    cities.push(this);
};

Seattle = new City('Seattle', 23, 65, 6.3, 0, [], []);
Tokyo = new City('Tokyo', 3 , 24, 1.2, 0, [], []);
Dubai = new City('Dubai', 11, 38, 3.7, 0, [], []);
Paris = new City('Paris', 20, 38, 2.3, 0, [], []);
Lima = new City('Lima', 2, 16, 4.6, 0, [], []);

let form = document.getElementById("form");
let submitForm = function(e) {
    e.preventDefault();
    let city = e.target.city.value;
    let min = parseInt(e.target.min.value);
    let max = parseInt(e.target.max.value);
    let avg = parseInt(e.target.avg.value);
    let newStore = new City(city, min, max, avg, 0, [], []);
    console.log(newStore);
    newStore.renderBody();
    tfoot.textContent = '';
    renderFooter();
}
form.addEventListener('submit',submitForm);
City.prototype.randomCustomersGenerator = function() {
    for(let i=0;i<workingHours.length;i++) {
        this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
        this.cookiesPerHour.push(Math.floor(this.avgCookiePerSale * this.randomCustomersPerHour[i]));
        this.counter += this.cookiesPerHour[i];
    }
}
let parent = document.getElementById('container');
let table = document.createElement('table');
parent.appendChild(table);
renderHeader = () => {
    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);
    let th = document.createElement('th');
    th.textContent = "City"
    headingRow.appendChild(th);
    for(let i=0;i<workingHours.length;i++) {
        let th = document.createElement('th');
        th.textContent = workingHours[i];
        headingRow.appendChild(th);
        if(i == 13) {
            let th = document.createElement('th');
            th.innerText = "Daily Total";
            headingRow.appendChild(th);
        }
    }
}
City.prototype.renderBody = function() {
        this.randomCustomersGenerator();
        let dataRow = document.createElement('tr');
        table.appendChild(dataRow);
        let td = document.createElement('td');
        td.innerText = this.name;
        dataRow.appendChild(td);
        for(let i=0;i<workingHours.length;i++) {
            let td = document.createElement('td');
            td.innerText = this.cookiesPerHour[i];
            dataRow.appendChild(td);
            if(i == 13) {
                let td = document.createElement('td');
                td.innerText = this.counter;
                dataRow.appendChild(td);
            }
        }
}
let totalCookiesEachHour = 0;
let totalCookiesAllTime = 0;
let tfoot = document.createElement('tfoot');
renderFooter = () => {
    table.appendChild(tfoot);
    let tr = document.createElement('tr');
    tfoot.appendChild(tr);
    let td = document.createElement('td');
    td.innerText = "Totals";
    tr.appendChild(td);
    for(let i=0;i<workingHours.length;i++) {
        totalCookiesEachHour = 0;
        totalCookiesAllTime = 0;
    let td = document.createElement('td');
    for(let j=0;j<cities.length;j++) {
        console.log(cities);
        totalCookiesEachHour+=cities[j].cookiesPerHour[i];
        td.innerText = totalCookiesEachHour;
        tr.appendChild(td);
        totalCookiesAllTime+=cities[j].counter;
    }
    if(i == 13) {
        let td = document.createElement('td');
        td.innerText = totalCookiesAllTime;
        tr.appendChild(td);
    }
    }
}

renderHeader();
cities.forEach(city => {
    city.renderBody();
});
renderFooter();

