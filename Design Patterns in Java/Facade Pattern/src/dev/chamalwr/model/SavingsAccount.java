package dev.chamalwr.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.LinkedHashMap;

public class SavingsAccount extends Account{
    private LinkedHashMap<LocalDateTime, Transaction> transactions;
    private BigDecimal interestRate;
}
