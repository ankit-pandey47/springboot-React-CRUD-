package com.project.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.DTO.EmployeeDTO;

@Service
public interface EmployeeService {

    EmployeeDTO createEmployee(EmployeeDTO employeeDTO);

    EmployeeDTO getEmployeeById(Long employeeId);

    List<EmployeeDTO> getAllEmployees();

    EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO updatedEmployee);

    void deleteEmployee(Long employeeId);

}
