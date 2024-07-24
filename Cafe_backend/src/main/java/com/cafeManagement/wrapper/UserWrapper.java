package com.cafeManagement.wrapper;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author Shrawon Tandukar
 * Created on: 7/17/2024
 */
@Data
@NoArgsConstructor
public class UserWrapper {
    private Integer id;
    private String name;
    private String email;
    private String password;
    private String contactNumber;
    private String status;

    public UserWrapper(Integer id, String name, String email, String contactNumber, String status) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.contactNumber = contactNumber;
        this.status = status;
    }
}
