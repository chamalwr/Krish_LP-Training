package com.example.configserverprofile;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class ConfigServerProfileApplication {

    public static void main(String[] args) {
        SpringApplication.run(ConfigServerProfileApplication.class, args);
    }

}
