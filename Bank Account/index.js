import { BankAccount } from "./bankAccount.js";


const mariaAccount = new BankAccount(1001, "Maria", 500);
const johnAccount = new BankAccount(1002, "John", 800);


mariaAccount.deposit(200);
mariaAccount.withdraw(100);
mariaAccount.checkBalance();

johnAccount.withdraw(300);
johnAccount.checkBalance();