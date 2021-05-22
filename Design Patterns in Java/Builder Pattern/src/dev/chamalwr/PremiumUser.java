package dev.chamalwr;

import java.math.BigDecimal;

public class PremiumUser {
    private final String id;
    private final String firstName;
    private final String lastName;
    private final boolean isActive;
    private final BigDecimal points;

    public PremiumUser(Builder builder){
        this.id = builder.id;
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.isActive = builder.isActive;
        this.points = builder.points;
    }

    static class Builder{
        private String id;
        private String firstName;
        private String lastName;
        private boolean isActive;
        private BigDecimal points;

        public PremiumUser build(){
            return new PremiumUser(this);
        }

        public Builder(){ }

        public Builder id(String id){
            this.id = id;
            return this;
        }

        public Builder firstName(String firstName){
            this.firstName = firstName;
            return this;
        }

        public Builder lastName(String lastName){
            this.lastName = lastName;
            return this;
        }

        public Builder isActive(boolean isActive){
            this.isActive = isActive;
            return this;
        }

        public Builder points(BigDecimal points){
            this.points = points;
            return this;
        }
    }

    @Override
    public String toString() {
        return "PremiumUser{" +
                "id='" + id + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", isActive=" + isActive +
                ", points=" + points +
                '}';
    }
}
