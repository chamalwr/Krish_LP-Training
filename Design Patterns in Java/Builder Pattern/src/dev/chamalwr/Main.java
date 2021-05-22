package dev.chamalwr;

public class Main {
    public static void main(String[] args) {
        PremiumUser.Builder premiumUserBuilder = new PremiumUser.Builder();

        PremiumUser premiumUser = premiumUserBuilder.firstName("John")
                                                    .lastName("Doe")
                                                    .build();

        PremiumUser anotherPremiumUser = premiumUserBuilder.id("PR-19473")
                                                        .firstName("Andrea")
                                                        .lastName("Bocelli")
                                                        .isActive(true)
                                                        .build();
        System.out.println(premiumUser);
        System.out.println(anotherPremiumUser);
    }
}
