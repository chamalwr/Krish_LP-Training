package dev.chamalwr;

public class Main {
    public static void main(String[] args) {
        CareTaker careTaker = new CareTaker();
        UserPreferences userMoviePreferences = new UserPreferences();

        userMoviePreferences.setUserPreferences(new String("Documentary"));
        userMoviePreferences.setUserPreferences(new String("Horror"));
        //Saved the current State
        careTaker.saveState(userMoviePreferences);
        System.out.println(userMoviePreferences);

        userMoviePreferences.setUserPreferences(new String("Crime"));
        userMoviePreferences.setUserPreferences(new String("Thriller"));
        //Adding new State - This is completely new State
        careTaker.saveState(userMoviePreferences);
        System.out.println(userMoviePreferences);

        //Revert the State
        careTaker.revertState(userMoviePreferences);
        System.out.println(userMoviePreferences);

        careTaker.revertState(userMoviePreferences);
        System.out.println(userMoviePreferences);
        
        careTaker.revertState(userMoviePreferences);
    }
}
