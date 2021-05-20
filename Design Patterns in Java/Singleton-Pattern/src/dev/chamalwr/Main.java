package dev.chamalwr;

public class Main {
    public static void main(String[] args) {

        long startCreatingFirstInstance = System.currentTimeMillis();
        PrinterInstance printerOne = PrinterInstance.getPrinterInstance();
        long finishedCreatingFirstInstance = System.currentTimeMillis();

        long startCreatingSecondInstance = System.currentTimeMillis();
        PrinterInstance printerTwo = PrinterInstance.getPrinterInstance();
        long finishedCreatingSecondInstance = System.currentTimeMillis();

        //Identical hashcode
        printerOne.printMyInfo();
        printerTwo.printMyInfo();

        //Performance improvement
        System.out.println("Time for First Instance Creation : " +
                (finishedCreatingFirstInstance - startCreatingFirstInstance));

        System.out.println("Time for Second Instance Creation : " +
                (finishedCreatingSecondInstance - startCreatingSecondInstance));
    }
}
