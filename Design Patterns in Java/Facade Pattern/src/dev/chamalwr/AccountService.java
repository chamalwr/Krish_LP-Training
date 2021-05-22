package dev.chamalwr;

import dev.chamalwr.model.Account;

import java.math.BigDecimal;

public interface AccountService {

    boolean deposit(Account account, BigDecimal amount);

    BigDecimal withdraw(Account account, BigDecimal bigDecimal);

    BigDecimal getCurrentBalance(Account account);

    boolean transfer(Account from, Account to, BigDecimal amount);


}
