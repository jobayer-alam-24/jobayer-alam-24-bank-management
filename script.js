class BankAccount {
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance
    };
    deposit(depo) {
        if(depo < 0 || isNaN(depo)){
            setTimeout(() => {
                console.log("Invalid Input! Please Try again..");
            }, 2000)
        }
        else if(depo <= 100){
            setTimeout(() => {
                console.log("You have to deposit above 100");
            }, 3000)
        }
       else if(depo >= 100000){
        setTimeout(() => {
            console.log("You have to deposit below 100000");
        }, 3000)
       }
        else{
            setTimeout(() => {
                this.balance += depo;
                console.log(`Succesfully deposited: ${depo}.`);
            }, 4000);
        }
    };
    withdraw(draw) {
        if(draw < 0 || isNaN(draw)){
            setTimeout(() => {
                console.log("Invalid Input! Please Try again..");
            }, 2000)
        }
        else if(draw <= 100){
            setTimeout(() => {
                console.log("Sorry! You have to widthdraw above 100");
            }, 4000);
        }
        else if(draw >= 100000){
            setTimeout(() => {
                console.log("Sorry! You have to widthdraw below 100000 & below :" + this.balance);
            }, 4000);
        }
      
        else { 
            setTimeout(() => {
                this.balance -= draw;
                console.log(`You have drawn: ${draw}.`);
            }, 5000)
        }
    };
    checkBalance() {
       setTimeout(() => {
        console.log(`Balance: ${this.balance}`);
       }, 5000)
    }
}
const rahim = new BankAccount('01903081186', 50000);
rahim.deposit(220);
rahim.deposit(500);
rahim.withdraw(40000);
rahim.checkBalance();