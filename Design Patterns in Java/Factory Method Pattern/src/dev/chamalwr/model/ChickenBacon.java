package dev.chamalwr.model;

import java.math.BigDecimal;
import java.util.List;

public class ChickenBacon extends Pizza{
    public ChickenBacon() {
    }

    public ChickenBacon(PizzaType type, PizzaCrust pizzaCrust, PizzaSize size, List<String> extra, BigDecimal price) {
        super(PizzaName.CHICKEN_BACON, type, pizzaCrust, size, extra, price);
    }
}
