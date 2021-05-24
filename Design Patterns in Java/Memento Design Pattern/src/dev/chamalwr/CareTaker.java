package dev.chamalwr;

import java.util.Stack;

//Care Taker class - Responsible for holding previous state of the class
public class CareTaker {

    private Stack<UserPreferences.UserPreferencesMemento> userPreferencesHistory = new Stack<>();

    public void saveState(UserPreferences userPreferences){
        // Defined in userPreference class to return a Memento Class instance with
        // Current Status
        System.out.print("Added new state - ");
        userPreferencesHistory.push(userPreferences.saveCurrentState());
    }

    public void revertState(UserPreferences userPreferences){
        if (!userPreferencesHistory.isEmpty()){
            //Setting to the previous state by getting the latest change on the stack
            System.out.print("Reverted - ");
            userPreferences.revertToPreviousState(userPreferencesHistory.pop());
        }else {
            System.out.println("User Did not made further changes") ;
        }
    }
}
