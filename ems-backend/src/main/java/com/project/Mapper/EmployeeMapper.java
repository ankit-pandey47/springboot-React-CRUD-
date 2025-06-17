package com.project.Mapper;

import com.project.DTO.EmployeeDTO;
import com.project.Entity.Employee;

public class EmployeeMapper {

    public static EmployeeDTO maptoEmployeeDTO(Employee employee) {

        return new EmployeeDTO(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail());
    }

    public static Employee maptoEmployee(EmployeeDTO employeeDTO) {
        return new Employee(
                employeeDTO.getId(),
                employeeDTO.getFirstName(),
                employeeDTO.getLastName(),

                employeeDTO.getEmail());
    }
}
