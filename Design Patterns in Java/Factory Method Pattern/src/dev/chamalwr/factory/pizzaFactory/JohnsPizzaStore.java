package dev.chamalwr.factory.pizzaFactory;

import dev.chamalwr.model.Pizza;

import java.math.BigDecimal;

public class JohnsPizzaStore extends PizzaFactory{
    @Override
    protected void processPayment(Pizza orderedPizza) {
        switch (orderedPizza.getType()){
            case SIGNATURE -> orderedPizza.setPrice(orderedPizza.getPrice().add(new BigDecimal("570.00")));
            case SUPREME -> orderedPizza.setPrice(orderedPizza.getPrice().add(new BigDecimal("760.00")));
            default -> orderedPizza.setPrice(orderedPizza.getPrice().add(new BigDecimal("510.00")));
        }

        switch (orderedPizza.getSize()){
            case LARGE -> orderedPizza.setPrice(orderedPizza.getPrice().add(new BigDecimal("2660.00")));
            case MEDIUM -> orderedPizza.setPrice(orderedPizza.getPrice().add(new BigDecimal("1450.00")));
            default -> orderedPizza.setPrice(orderedPizza.getPrice().add(new BigDecimal("760.00")));
        }

        orderedPizza.setPrice(orderedPizza.getPrice().add(new BigDecimal(300)
                .multiply(BigDecimal.valueOf(orderedPizza.getExtra().size()))));
    }
}
