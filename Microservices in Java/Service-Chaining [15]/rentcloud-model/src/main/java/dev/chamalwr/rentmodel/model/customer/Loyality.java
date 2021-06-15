package dev.chamalwr.rentmodel.model.customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "loyalityPoint")
@NoArgsConstructor
@AllArgsConstructor
public class Loyality {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int transactionId;
    @ManyToOne
    @JoinColumn
    Customer customer;
    int point;
    LocalDateTime expireDate;
}
