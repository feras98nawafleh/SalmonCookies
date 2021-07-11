let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattlecounter = 0;
let Seattle = {
    min: 23,
    max: 65,
    avgCookiePerSale: 6.3,
    randomCustomersPerHour:[],
    cookiesPerHour: [],
    randomCustomersGenerator:function name() {
        for(let i=0;i<14;i++) {
            this.randomCustomersPerHour[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
            this.cookiesPerHour[i] = Math.floor(this.avgCookiePerSale * this.randomCustomersPerHour[i]);
            Seattlecounter += this.cookiesPerHour[i];
        }
    },
}
Seattle.randomCustomersGenerator();
document.write(`<h2>Seattle</h2>`);
for(let i = 0;i<14;i++){
    document.write(`<li>${workingHours[i]}: ${Seattle.cookiesPerHour[i]} cookies</li>`);
    if(i == 13) {
    document.write(`<li>Total: ${Seattlecounter} cookies</li>`);
    document.write(`<div class="breaker">breaker</div>`);
    }
}

let Tokyocounter = 0;
let Tokyo = {
    min: 3,
    max: 24,
    avgCookiePerSale: 1.2,
    randomCustomersPerHour:[],
    cookiesPerHour: [],
    randomCustomersGenerator:function name() {
        for(let i=0;i<14;i++) {
            this.randomCustomersPerHour[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
            this.cookiesPerHour[i] = Math.floor(this.avgCookiePerSale * this.randomCustomersPerHour[i]);
            Tokyocounter += this.cookiesPerHour[i];
        }
    },
}
Tokyo.randomCustomersGenerator();
document.write(`<h2>Tokyo</h2>`);
for(let i = 0;i<14;i++){
    document.write(`<li>${workingHours[i]}: ${Tokyo.cookiesPerHour[i]} cookies</li>`);
    if(i == 13) {
    document.write(`<li>Total: ${Tokyocounter} cookies</li>`);
    document.write(`<div class="breaker">breaker</div>`);
    }
}

let DubaiCounter = 0;
let Dubai = {
    min: 11,
    max: 38,
    avgCookiePerSale: 3.7,
    randomCustomersPerHour:[],
    cookiesPerHour: [],
    randomCustomersGenerator:function name() {
        for(let i=0;i<14;i++) {
            this.randomCustomersPerHour[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
            this.cookiesPerHour[i] = Math.floor(this.avgCookiePerSale * this.randomCustomersPerHour[i]);
            DubaiCounter += this.cookiesPerHour[i];
        }
    },
}
Dubai.randomCustomersGenerator();
document.write(`<h2>Dubai</h2>`);
for(let i = 0;i<14;i++){
    document.write(`<li>${workingHours[i]}: ${Dubai.cookiesPerHour[i]} cookies</li>`);
    if(i == 13) {
    document.write(`<li>Total: ${DubaiCounter} cookies</li>`);
    document.write(`<div class="breaker">breaker</div>`);
    }
}

let ParisCounter = 0;
let Paris = {
    min: 20,
    max: 38,
    avgCookiePerSale: 2.3,
    randomCustomersPerHour:[],
    cookiesPerHour: [],
    randomCustomersGenerator:function name() {
        for(let i=0;i<14;i++) {
            this.randomCustomersPerHour[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
            this.cookiesPerHour[i] = Math.floor(this.avgCookiePerSale * this.randomCustomersPerHour[i]);
            ParisCounter += this.cookiesPerHour[i];
        }
    },
}
Paris.randomCustomersGenerator();
document.write(`<h2>Paris</h2>`);
for(let i = 0;i<14;i++){
    document.write(`<li>${workingHours[i]}: ${Paris.cookiesPerHour[i]} cookies</li>`);
    if(i == 13) {
    document.write(`<li>Total: ${ParisCounter} cookies</li>`);
    document.write(`<div class="breaker">breaker</div>`);
    }
}

let LimaCounter = 0;
let Lima = {
    min: 2,
    max: 16,
    avgCookiePerSale: 4.6,
    randomCustomersPerHour:[],
    cookiesPerHour: [],
    randomCustomersGenerator:function name() {
        for(let i=0;i<14;i++) {
            this.randomCustomersPerHour[i] = Math.floor(Math.random() * (this.max - this.min) + this.min);
            this.cookiesPerHour[i] = Math.floor(this.avgCookiePerSale * this.randomCustomersPerHour[i]);
            LimaCounter += this.cookiesPerHour[i];
        }
    },
}
Lima.randomCustomersGenerator();
document.write(`<h2>Lima</h2>`);
for(let i = 0;i<14;i++){
    document.write(`<li>${workingHours[i]}: ${Lima.cookiesPerHour[i]} cookies</li>`);
    if(i == 13) {
    document.write(`<li>Total: ${LimaCounter} cookies</li>`);
    document.write(`<div class="breaker">breaker</div>`);
    }
}