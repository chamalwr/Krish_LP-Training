package dev.chamalwr.model;

import dev.chamalwr.AccountServiceImpl;

import java.math.BigDecimal;

public class BankingService {

    AccountServiceImpl accountService;

    public BankingService() {
        accountService = new AccountServiceImpl();
    }

    public void deposit(Account account, BigDecimal amount){
        System.out.println("Starting Deposit");
        var isComplete = accountService.deposit(account, amount);
        if (isComplete){
            System.out.println("Transaction Complete!");
        }else {
            System.out.println("Transaction Failed");
        }
        System.out.println("Thank you for Banking with us!");
    }

    public void withdraw(Account account, BigDecimal amount){
        var withdrawAmount = accountService.withdraw(account, amount);
        if (withdrawAmount!= null){
            System.out.println("Transaction Complete!");
            System.out.println("Here's the Money : " + withdrawAmount);
        }else {
            System.out.println("Transaction Failed");
        }
        System.out.println("Thank you for Banking with us!");
    }

    public void getCurrentBalance(Account account){
        System.out.println("Your current balance is " + account.getBalance());
    }

    public void transfer(Account from, Account to, BigDecimal amount){
        var isComplete = accountService.transfer(from, to, amount);
        if (isComplete){
            System.out.println("Transfer Complete!");
        }else {
            System.out.println("Transfer Failed");
        }
        System.out.println("Thank you for Banking with us!");
    }
}
