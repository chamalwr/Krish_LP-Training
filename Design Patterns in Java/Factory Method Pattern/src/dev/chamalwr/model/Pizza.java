package dev.chamalwr.model;

import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;

public abstract class Pizza {
    private PizzaName name;
    private PizzaType type;
    private PizzaSize size;
    private PizzaCrust crust;
    private List<String> extra;
    private BigDecimal price;

    public Pizza() {
    }

    public Pizza(PizzaName name, PizzaType type, PizzaCrust crust, PizzaSize size, List<String> extra, BigDecimal price) {
        this.name = name;
        this.type = type;
        this.crust = crust;
        this.size = size;
        this.extra = extra;
        this.price = price;
    }

    public PizzaName getName() {
        return name;
    }

    public void setName(PizzaName name) {
        this.name = name;
    }

    public PizzaType getType() {
        return type;
    }

    public void setType(PizzaType type) {
        this.type = type;
    }

    public PizzaCrust getCrust() {
        return crust;
    }

    public void setCrust(PizzaCrust pizzaCrust) {
        this.crust = pizzaCrust;
    }

    public PizzaSize getSize() {
        return size;
    }

    public void setSize(PizzaSize size) {
        this.size = size;
    }

    public List<String> getExtra() {
        return extra;
    }

    public void setExtra(List<String> extra) {
        this.extra = extra;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Your Order Summary{" +
                "Pizza Name=" + name +
                ", Pizza Type=" + type +
                ", Size=" + size +
                ", Crust=" + crust +
                ", extras=" + extra +
                ", Total price=" + price +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Pizza pizza = (Pizza) o;

        if (!Objects.equals(name, pizza.name)) return false;
        if (crust != pizza.crust) return false;
        if (!Objects.equals(extra, pizza.extra)) return false;
        return Objects.equals(price, pizza.price);
    }

    @Override
    public int hashCode() {
        int result = name != null ? name.hashCode() : 0;
        result = 31 * result + (crust != null ? crust.hashCode() : 0);
        result = 31 * result + (extra != null ? extra.hashCode() : 0);
        result = 31 * result + (price != null ? price.hashCode() : 0);
        return result;
    }
}
