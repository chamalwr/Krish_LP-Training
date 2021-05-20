package dev.chamalwr;

public class PrinterInstance {

    //Making printerInstance Volatile, to access and modified in different threads
    private static volatile PrinterInstance printerInstance;

    //Making method private so object cannot create from outside
    private PrinterInstance(){
        //Avoid creating objects through Reflection API
        if (printerInstance != null){
            throw new RuntimeException("Use getPrinterInstance() method");
        }
    }

    public static PrinterInstance getPrinterInstance(){
        if (printerInstance == null){
            /*Double checking before treating the object in concurrent access
            from multiple threads**/
            synchronized (PrinterInstance.class){
                printerInstance = new PrinterInstance();
            }
        }
        return printerInstance;
    }

    public void printMyInfo(){
        System.out.println("Hash Code  : " + this.hashCode());
    }


}
