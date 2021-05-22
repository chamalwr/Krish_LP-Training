package dev.chamalwr.model;

import java.math.BigDecimal;
import java.time.LocalDate;

public abstract class Account {
    private String id;
    private String accountName;
    private String holderId;
    private BigDecimal balance;
    private LocalDate startedDate;

    public Account() {
    }

    public Account(String id, String accountName, String holderId, BigDecimal balance, LocalDate startedDate) {
        this.id = id;
        this.accountName = accountName;
        this.holderId = holderId;
        this.balance = balance;
        this.startedDate = startedDate;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public String getHolderId() {
        return holderId;
    }

    public void setHolderId(String holderId) {
        this.holderId = holderId;
    }

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }

    public LocalDate getStartedDate() {
        return startedDate;
    }

    public void setStartedDate(LocalDate startedDate) {
        this.startedDate = startedDate;
    }
}
