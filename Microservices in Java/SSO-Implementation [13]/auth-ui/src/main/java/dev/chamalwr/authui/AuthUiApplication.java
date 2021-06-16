package dev.chamalwr.authui;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("dev.chamalwr.commons")
public class AuthUiApplication {

    public static void main(String[] args) {
        SpringApplication.run(AuthUiApplication.class, args);
    }

}
