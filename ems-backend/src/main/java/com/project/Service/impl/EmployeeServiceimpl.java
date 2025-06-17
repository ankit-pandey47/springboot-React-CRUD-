package com.project.Service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.project.ResourceNotFoundException;
import com.project.DTO.EmployeeDTO;
import com.project.Entity.Employee;
import com.project.Mapper.EmployeeMapper;
import com.project.Repository.EmployeeRepository;
import com.project.Service.EmployeeService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeServiceimpl implements EmployeeService {

    private EmployeeRepository employeeRepository;
    // it is injected as constructor injection through lombook
    // @AllArgsConstructor

    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee = EmployeeMapper.maptoEmployee(employeeDTO);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.maptoEmployeeDTO(savedEmployee);
    }

    @Override
    public EmployeeDTO getEmployeeById(Long employeeId) {

        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee doesn't exist with the id : " + employeeId));

        return EmployeeMapper.maptoEmployeeDTO(employee);

    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();

        return employees.stream().map((employee) -> EmployeeMapper.maptoEmployeeDTO(employee))
                .collect(Collectors.toList());

    }

    @Override
    public EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO updatedEmployee) {

        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("EMployee doesn't exist with the given id : " + employeeId));

        employee.setEmail(updatedEmployee.getEmail());
        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());

        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.maptoEmployeeDTO(savedEmployee);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("EMployee doesn't exist with the given id : " + employeeId));

        employeeRepository.delete(employee);
    }

}
