package dev.chamalwr.JDBC_Example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String welcome() {
        return "<h1 align = center>Microservices By Krish</h1> " +
                "<p> <a href =\"https://www.youtube.com/playlist?list=PLD-mYtebG3X9HaZ1T39-aF4ghEtWy9-v3\">" +
                "Learn Microservices from the Beginning</a></p>";
    }
}