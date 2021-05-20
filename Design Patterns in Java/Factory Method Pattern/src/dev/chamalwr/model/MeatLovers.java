package dev.chamalwr.model;

import java.math.BigDecimal;
import java.util.List;

public class MeatLovers extends Pizza{

    public MeatLovers() {
    }

    public MeatLovers(PizzaType type, PizzaCrust pizzaCrust, PizzaSize size, List<String> extra, BigDecimal price) {
        super(PizzaName.MEAT_LOVERS, type, pizzaCrust, size, extra, price);
    }


}
