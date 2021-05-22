package dev.chamalwr.model;

import java.time.Duration;
import java.time.LocalDate;

public class FixedDeposit extends Account{
    private LocalDate endDate;
    private Duration depositDuration;
}
