function findMinimum(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  var number1 = 50;
  var number2 = 10;
  var result = findMinimum(number1, number2);
  console.log(result);


  function power(base, exponent) {
    return Math.pow(num1, num2);
  }
  
  var num1 = 2;
  var num2 = 3;
  var result = Math.pow(num1, num2);
  console.log(result);



  function sendSMS(phoneNumber, message) {
    
    console.log(`Отправлено SMS на номер ${phoneNumber}: "${message}"`);
  }
  
  var phoneNumber = "+996 500 101010";
  var message = "Что-нибудь";
  sendSMS(phoneNumber, message);


  var bankAccount = {
    accountNumber: "922992",
    balance: 7000,
    sendTransfer: function(accountNumber, amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log("Перевод выполнен успешно.");
      } else {
        console.log("Недостаточно средств на счете.");
      }
    }
  };
  console.log("Баланс до перевода:", bankAccount.balance);
  bankAccount.sendTransfer("969696", 4000); 
  console.log("Баланс после перевода:", bankAccount.balance);