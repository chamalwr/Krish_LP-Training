package dev.chamalwr.factory.pizzaFactory;

import dev.chamalwr.model.*;

import java.math.BigDecimal;
import java.util.List;

public abstract class PizzaFactory {

    public void orderPizza(PizzaName name, PizzaType type, PizzaCrust pizzaCrust, PizzaSize size, List<String>extra){
        Pizza orderedPizza;
        switch (name){
            case DEVILLED_CHICKEN -> orderedPizza = new DevilledChicken(type, pizzaCrust, size, extra, BigDecimal.ZERO);
            case MEAT_LOVERS -> orderedPizza = new MeatLovers(type, pizzaCrust, size, extra, BigDecimal.ZERO);
            default -> orderedPizza = new ChickenBacon(type, pizzaCrust, size, extra, BigDecimal.ZERO);
        }
        bake();
        wrapPizza();
        processPayment(orderedPizza);
        System.out.println("Your Order is Ready!");
        System.out.println(orderedPizza);
    }

    protected abstract void processPayment(Pizza orderedPizza);


    public void wrapPizza(){
        System.out.println("Wrapping.....Please wait");
    }

    public void bake(){
        System.out.println("Baking....Please wait");
    }

}
