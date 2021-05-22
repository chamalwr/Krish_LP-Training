package dev.chamalwr;

import dev.chamalwr.factory.pizzaFactory.JohnsPizzaStore;
import dev.chamalwr.model.*;

import java.util.List;

public class Main {
    public static void main(String[] args) {

        Pizza samePizza = new MeatLovers();

        JohnsPizzaStore johnsPizzaStore = new JohnsPizzaStore();
        johnsPizzaStore.orderPizza(PizzaName.MEAT_LOVERS, PizzaType.SUPREME, PizzaCrust.SAUSAGES, PizzaSize.MEDIUM,
                List.of("Cheese", "Capsicum", "Onion"));


    }
}
