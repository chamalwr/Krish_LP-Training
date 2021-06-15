package dev.chamalwr.processtask;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.task.configuration.EnableTask;

@SpringBootApplication
@EnableTask
public class ProcessTaskApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProcessTaskApplication.class, args);
    }

}
