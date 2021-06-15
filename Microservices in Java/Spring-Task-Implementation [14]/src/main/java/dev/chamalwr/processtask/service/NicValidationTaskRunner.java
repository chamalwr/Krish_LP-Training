package dev.chamalwr.processtask.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

@Service
public class NicValidationTaskRunner implements CommandLineRunner {

    @Autowired
    NicValidationService nicValidationService;

    @Override
    public void run(String... args) throws Exception {
        if (args.length > 0){
            System.out.println("Task Running with Arguments");
            if (nicValidationService.validate(args[0])){
                System.out.println("This is a Valid NIC");
            }else {
                System.out.println("This is an invalid NIC");
            }
        }else {
            System.out.println("Task Running without Arguments");
        }
    }
}
