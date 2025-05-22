class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = balance;
  }

  deposit(amount) {
      if (amount > 0) {
          this.balance += amount;
          console.log(`Deposited: $${amount}. New Balance: $${this.balance}`);
      } else {
          console.log("Deposit amount must be positive.");
      }
  }

  withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          console.log(`Withdrawn: $${amount}. Remaining Balance: $${this.balance}`);
      } else {
          console.log("Invalid withdrawal amount or insufficient funds.");
      }
  }

  checkBalance() {
      console.log(`Account Holder: ${this.accountHolder}, Balance: $${this.balance}`);
  }
}

export { BankAccount };