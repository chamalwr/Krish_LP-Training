package dev.chamalwr;

import dev.chamalwr.model.Account;

import java.math.BigDecimal;

//Functions are not implemented for demonstration only
public class AccountServiceImpl implements AccountService{

    @Override
    public boolean deposit(Account account, BigDecimal amount) {
        //Valid account?
        //Verify
        //Add cash, update balance

        //if fail
        return false;
    }

    @Override
    public BigDecimal withdraw(Account account, BigDecimal bigDecimal) {
        //Valid account?
        //Verify
        //Add cash, update balance
        //Enough Balance available?
        //then approve withdraw
        //else
        return null;
    }

    @Override
    public BigDecimal getCurrentBalance(Account account) {
        //Valid account?
        //Verify
        //send balance
        return null;
    }

    @Override
    public boolean transfer(Account from, Account to, BigDecimal amount) {
        //Both accounts are valid
        //Verify
        //reduce amount from sender update amount and add to receiver
        return false;
    }
}
