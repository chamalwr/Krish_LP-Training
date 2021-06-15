package dev.chamalwr.profileserviceoauth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

@SpringBootApplication
@EntityScan("dev.chamalwr.commons")
@EnableResourceServer
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class ProfileServiceOauthApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProfileServiceOauthApplication.class, args);
    }

}
