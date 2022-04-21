const sum = document.getElementById("balance-sum");
const apiWeatherURL = "";
const demo = new Bank(1, "XXXX-XXXX-XX34-1", 300);
const statement = document.getElementById("statement");

// Build Weather
window.onload = () => [weather(), openAct()];

// weather array
const weather = () => {
  fetch(apiWeatherURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      weatherData(data);
    });
};

// Fetch Weather data
weatherData = (data) => {
  let text = JSON.stringify(`${data.current.condition.text}`);
  document.getElementById("condition").innerHTML = text;
  let icon = `${data.current.condition.icon}`;
  document.getElementById("weather-icon").src = icon;
  let temp = JSON.stringify(`${data.current.temp_f} F`);
  document.getElementById("temp").innerHTML = temp;
  let area = JSON.stringify(`${data.location.name}`);
  document.getElementById("area").innerHTML = area;
};

function Bank(branch, account, balance) {
  this.branch = branch;
  this.account = account;
  this.balance = balance;
}

Bank.prototype.withdrawal = function (value) {
  if (this.balance < value) {
    console.log(`Funds Not Available, Current Funds: ${this.balance}`);
    return;
  }

  this.balance -= value;
  this.checkBalance();
  this.updateSum();
};

Bank.prototype.deposit = function (value) {
  this.balance += value;
  this.checkBalance();
  this.updateSum();
};

Bank.prototype.checkBalance = function () {
  console.log(
    `Branch/Account: ${this.branch}/${this.account} | ` +
      `balance: ${this.balance.toFixed(2)}`
  );
};

Bank.prototype.updateSum = function () {
  document.getElementById(
    "balance-sum"
  ).innerHTML = `Account: ${demo.account}--------------------- $${demo.balance}`;
};

// Random amount function for buttons

function randomAmount(max) {
  return Math.floor(Math.random() * max);
}

// Charge function

function charge() {
  neg = randomAmount(max);
  function printNeg() {
    demo.withdrawal(neg);
    statement.innerHTML += "<li>Withdrawal Amount: " + `$${neg}` + "</li>";
  }
  if (neg > demo.balance) {
    statement.innerHTML += "<li>Insuficient Funds</li>";
  } else printNeg();
  console.log(neg);
}

// Pay Function

function pay() {
  add = randomAmount(max);
  demo.deposit(add);
  statement.innerHTML += "<li>Deposit Amount: " + `$${add}` + "</li>";
  console.log(add);
}

let max = `${demo.balance}`;

function openAct() {
  demo.updateSum();
}
