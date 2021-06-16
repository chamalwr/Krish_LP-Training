package dev.chamalwr.authui.controller;

import dev.chamalwr.authui.config.AccessToken;
import dev.chamalwr.commons.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;


@Controller
@EnableOAuth2Sso
public class UIController extends WebSecurityConfigurerAdapter {

    @Autowired
    RestTemplate restTemplate;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/")
                .permitAll()
                .anyRequest()
                .authenticated();
    }

    @RequestMapping(value = "/")
    public String loadHomePage(){
        return "home";
    }
    @RequestMapping(value = "/secure")
    public String loadSecuredPage(){
        return "secure";
    }

    @RequestMapping(value = "/customers")
    public String loadCustomers(Model model) {
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization", AccessToken.getAccessToken());
        HttpEntity<Customer> customerHttpEntity = new HttpEntity<>(httpHeaders);
        try {
            ResponseEntity<Customer[]> responseEntity = restTemplate.exchange("http://localhost:8081/services/profile", HttpMethod.GET, customerHttpEntity, Customer[].class);
            model.addAttribute("customers", responseEntity.getBody());
        } catch (HttpStatusCodeException err) {
            ResponseEntity responseEntity = ResponseEntity.status(err.getRawStatusCode()).headers(err.getResponseHeaders()).body(err.getResponseBodyAsString());
            model.addAttribute("error", responseEntity);
        }
        return "secure";
    }

}
