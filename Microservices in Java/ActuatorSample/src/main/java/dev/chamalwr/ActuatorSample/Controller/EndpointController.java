package dev.chamalwr.ActuatorSample.Controller;

import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.boot.actuate.endpoint.annotation.Selector;
import org.springframework.boot.actuate.endpoint.annotation.WriteOperation;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
@Endpoint(id = "stage")
public class EndpointController {

    Map<String, Stage> stageMap = new ConcurrentHashMap<>();

    @ReadOperation
    public Stage getStage(@Selector String name){
        return stageMap.get(name);
    }


    @WriteOperation
    public void addStage(@Selector String name, int stage){
        stageMap.put(name, new Stage(stage));
    }

    static class Stage{
        int stage;

        public Stage(int stage){
            this.stage = stage;
        }

        public int getStage() {
            return stage;
        }
    }
}
