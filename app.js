let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Cities(name, min, max, counter, avgCookiePerSale, randomCustomersPerHour, cookiesPerHour) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.counter = counter;
    this.avgCookiePerSale = avgCookiePerSale;
    this.randomCustomersPerHour = randomCustomersPerHour;
    this.cookiesPerHour = cookiesPerHour;
}

Cities.prototype.randomCustomersGenerator = function() {
    for(let i=0;i<14;i++) {
        this.randomCustomersPerHour.push(Math.floor(Math.random() * (this.max - this.min) + this.min));
        this.cookiesPerHour.push(Math.floor(this.avgCookiePerSale * this.randomCustomersPerHour[i]));
        this.counter += this.cookiesPerHour[i];
    }
}

let cities = [
    Seattle = new Cities('Seattle', 23, 65, 0, 6.3, [], []),
    Tokyo = new Cities('Tokyo', 3 , 24, 0, 1.2, [], []),
    Dubai = new Cities('Dubai', 11, 38, 0, 3.7, [], []),
    Paris = new Cities('Paris', 20, 38, 0, 2.3, [], []),
    Lima = new Cities('Lima', 2, 16, 0, 4.6, [], [])
];

for(city of cities) {
    city.randomCustomersGenerator();
    let parent = document.getElementById('parent');
    let cityName = document.createElement('h2');
    cityName.textContent = city.name;
    let list = document.createElement('ul');
    for(let i = 0;i<14;i++){
        let item = document.createElement('li');
        parent.append(cityName);
        parent.append(list);
        list.append(item);
        item.innerText = `${workingHours[i]}: ${city.cookiesPerHour[i]} cookies`;
        if(i == 13){
            list.append(item);
            item.innerText = `Total: ${city.counter} cookies`;
        }
    }
}
