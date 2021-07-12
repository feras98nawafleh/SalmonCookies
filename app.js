let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let cities = [
     Seattle = {
        name: 'Seattle',
        min: 23,
        max: 65,
        counter: 0,
        avgCookiePerSale: 6.3,
        randomCustomersPerHour:[],
        cookiesPerHour: [],
        randomCustomersGenerator:function() {
            for(let i=0;i<14;i++) {
                this.randomCustomersPerHour[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
                this.cookiesPerHour[i] = Math.floor(this.avgCookiePerSale * this.randomCustomersPerHour[i]);
                this.counter += this.cookiesPerHour[i];
            }
        }
    },
    Tokyo = {
        name: 'Tokyo',
        min: 3,
        max: 24,
        counter: 0,
        avgCookiePerSale: 1.2,
        randomCustomersPerHour:[],
        cookiesPerHour: [],
        randomCustomersGenerator:function() {
            for(let i=0;i<14;i++) {
                this.randomCustomersPerHour[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
                this.cookiesPerHour[i] = Math.floor(this.avgCookiePerSale * this.randomCustomersPerHour[i]);
                this.counter += this.cookiesPerHour[i];
            }
        },
    },
    Dubai = {
        name: 'Dubai',
        min: 11,
        max: 38,
        counter: 0,
        avgCookiePerSale: 3.7,
        randomCustomersPerHour:[],
        cookiesPerHour: [],
        randomCustomersGenerator:function() {
            for(let i=0;i<14;i++) {
                this.randomCustomersPerHour[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
                this.cookiesPerHour[i] = Math.floor(this.avgCookiePerSale * this.randomCustomersPerHour[i]);
                this.counter += this.cookiesPerHour[i];
            }
        },
    },
    Paris = {
        name: 'Paris',
        min: 20,
        max: 38,
        counter: 0,
        avgCookiePerSale: 2.3,
        randomCustomersPerHour:[],
        cookiesPerHour: [],
        randomCustomersGenerator:function() {
            for(let i=0;i<14;i++) {
                this.randomCustomersPerHour[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
                this.cookiesPerHour[i] = Math.floor(this.avgCookiePerSale * this.randomCustomersPerHour[i]);
                this.counter += this.cookiesPerHour[i];
            }
        },
    },
    Lima = {
        name : 'Lima',
        min: 2,
        max: 16,
        counter: 0,
        avgCookiePerSale: 4.6,
        randomCustomersPerHour:[],
        cookiesPerHour: [],
        randomCustomersGenerator:function() {
            for(let i=0;i<14;i++) {
                this.randomCustomersPerHour[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
                this.cookiesPerHour[i] = Math.floor(this.avgCookiePerSale * this.randomCustomersPerHour[i]);
                this.counter += this.cookiesPerHour[i];
            }
        },
    }
]

for(city of cities) {
    city.randomCustomersGenerator();
    document.write(`<h2>Seattle</h2>`);
    for(let i = 0 ; i < 14 ; i++) {
        document.write(`<li>${workingHours[i]}: ${city.cookiesPerHour[i]} cookies</li>`);
        if(i == 13) {
        document.write(`<li>Total: ${city.counter} cookies</li>`);
        document.write(`<div class="breaker">breaker</div>`);
        }   
    }
}
