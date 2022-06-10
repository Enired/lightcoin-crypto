let balance = 500.00;
class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  // set balance(balance){
  //   this.balance = balance
  // }


  get balance() {
    let balance = 0
    for (const transaction of this.transactions) {
      balance += transaction.value;
    }

    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount,
    this.account = account;
  }

  commit() {
    this.account.addTransaction(this);
  }
}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAcc = new Account('Enired');

t1 = new Withdrawal(50.25, myAcc);
t1.commit();
console.log('Transaction 1:', t1);

// t2 = new Withdrawal(9.99, myAcc);
// t2.commit();
// console.log('Transaction 2:', t2);

// t3 = new Deposit(200, myAcc);
// t3.commit();
// console.log('Transaction 3:', t3);

console.log('Balance:', myAcc.balance);


