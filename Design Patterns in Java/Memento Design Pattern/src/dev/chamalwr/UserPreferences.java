package dev.chamalwr;

import java.util.LinkedHashSet;

//Originator class
public class UserPreferences {

    private LinkedHashSet<String> userPreferences = new LinkedHashSet<>();

    public UserPreferencesMemento saveCurrentState(){
        return new UserPreferencesMemento(getUserPreferences());
    }

    public void revertToPreviousState(UserPreferencesMemento userPreferencesMemento){
        this.userPreferences = userPreferencesMemento.getUserPreferences();
    }

    /**Clone ArrayList Since Java passes the reference of userPreference
     * ArrayList it might affected if use the same, because of that
     * use a cloned object
     **/
    public LinkedHashSet getUserPreferences() {
        return (LinkedHashSet<String>) userPreferences.clone();
    }

    public void setUserPreferences(String userPreference) {
        this.userPreferences.add(userPreference);
    }

    //Memento Class
    static class UserPreferencesMemento {
        private LinkedHashSet userPreferences;

        public UserPreferencesMemento(LinkedHashSet userPreferences) {
            this.userPreferences = userPreferences;
        }

        //Making getters and setters to private to avoid accessing outside the UserPreferences class


        private LinkedHashSet getUserPreferences() {
            return userPreferences;
        }

        private void setUserPreferences(LinkedHashSet userPreferences) {
            this.userPreferences = userPreferences;
        }
    }

    @Override
    public String toString() {
        return "UserPreferences{ " +
                  userPreferences +
                " }";
    }
}
