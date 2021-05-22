package dev.chamalwr;

import dev.chamalwr.model.BankingService;
import dev.chamalwr.model.SavingsAccount;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {

        //Create Mock Objects
        SavingsAccount tomsAccount = new SavingsAccount();
        SavingsAccount sawyersAccount = new SavingsAccount();
        BigDecimal amount = BigDecimal.valueOf(20439.00);

        //Creating Facade Object
        BankingService bankingService = new BankingService();
        bankingService.deposit(tomsAccount,amount);
        bankingService.getCurrentBalance(sawyersAccount);
    }
}
