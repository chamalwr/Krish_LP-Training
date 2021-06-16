package dev.chamalwr.processtask.service;

import org.springframework.stereotype.Service;

@Service
public class NicValidationServiceImpl implements NicValidationService {

    @Override
    public boolean validate(String nic){
        return nic.length() == 10;
    }
}
