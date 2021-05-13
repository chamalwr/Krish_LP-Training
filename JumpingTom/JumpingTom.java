import java.util.*;
import java.math.*;

public class JumpingTom{
 
 public static void main(String[] args){
   Scanner scn = new Scanner(System.in);
   System.out.print("Enter the distance in meters : ");
   var distance = scn.nextDouble();
   makeTomJump(new BigDecimal(String.valueOf(distance)));
 }

 public static void makeTomJump(BigDecimal distanceToJump){
    
    var roundedValue = distanceToJump.setScale(0, RoundingMode.UP).intValue();
    int restPeriod = 0;
    int hopCount = 0;

    Map<Integer, Integer> tomsRoutine = new LinkedHashMap<>(); 
    //<Distance, Rest>
    tomsRoutine.put(5, 1);
    tomsRoutine.put(3, 2);
    tomsRoutine.put(1, 5);
    
    while(roundedValue != 0){
      for(int distance : tomsRoutine.keySet()){
        if((roundedValue - distance) < 0){
		roundedValue = 0;
		hopCount += 1;
		break;
	}
        roundedValue -= distance;
        restPeriod += tomsRoutine.get(distance);
        hopCount += 1;
      }
    }
    
   System.out.println("--------------Tom's Jumping Summary--------------");
   System.out.println("Total Distance Jumped : " + distanceToJump + " Meters");
   System.out.println("Number of Hops Jumped : " + hopCount);
   System.out.println("Total Rest Taken      : " + restPeriod + " Seconds");  
   System.out.println("-------------------------------------------------");
 }

}