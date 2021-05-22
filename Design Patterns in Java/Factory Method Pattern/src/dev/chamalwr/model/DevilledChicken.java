package dev.chamalwr.model;

import java.math.BigDecimal;
import java.util.List;

public class DevilledChicken extends Pizza{
    public DevilledChicken() {
    }

    public DevilledChicken(PizzaType type, PizzaCrust pizzaCrust, PizzaSize size, List<String> extra, BigDecimal price) {
        super(PizzaName.DEVILLED_CHICKEN, type, pizzaCrust, size, extra, price);
    }
}
