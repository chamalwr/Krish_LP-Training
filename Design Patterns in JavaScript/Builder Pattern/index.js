class PremiumUser {
    id;
    firstName;
    lastName;
    isActive;

    constructor(builder) {
        this.id = builder.id;
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.isActive = builder.isActive;
    }

    getId() {
        return this.id
    }
}

class PremiumUserBuilder{
    build(){
        return new PremiumUser(this);
    }
    id(id) {
        this.id = id
        return this
    }
    firstName(firstName) {
        this.firstName = firstName
        return this
    }
    lastName(lastName) {
        this.lastName = lastName
        return this
    }
    isActive(isActive) {
        this.isActive = isActive
        return this
    }
}

let aPremiumUser = new PremiumUserBuilder()
    .id("PR-19473")
    .firstName("Andrea")
    .lastName("Bocelli")
    .isActive(true)
    .build();

console.log(aPremiumUser)
