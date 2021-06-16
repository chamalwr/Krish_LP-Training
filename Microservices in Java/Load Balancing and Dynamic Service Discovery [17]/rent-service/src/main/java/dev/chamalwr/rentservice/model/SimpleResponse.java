package dev.chamalwr.rentservice.model;

import dev.chamalwr.rentmodel.model.rent.Rent;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SimpleResponse implements Response{
    private Rent rent;
}
