package com.project.Controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.PutExchange;

import com.project.DTO.EmployeeDTO;
import com.project.Entity.Employee;
import com.project.Service.EmployeeService;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    // Build addEmployee Rest API

    @PostMapping
    private ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeDTO employeeDTO) {

        EmployeeDTO savedEmployeeDTO = employeeService.createEmployee(employeeDTO);

        return new ResponseEntity<>(savedEmployeeDTO, HttpStatus.CREATED);

    }

    @GetMapping("{id}")
    public ResponseEntity<EmployeeDTO> getEmployeeById(@PathVariable("id") Long employeeId) {

        EmployeeDTO employeeDTO = employeeService.getEmployeeById(employeeId);

        return ResponseEntity.ok(employeeDTO);

    }

    // build getall rest api

    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getALLEmployees() {
        List<EmployeeDTO> employees = employeeService.getAllEmployees();

        return ResponseEntity.ok(employees);
    }

    // build update employee api
    @PutExchange("{id}")
    public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable("id") Long EmplpoyeeId,
            @RequestBody EmployeeDTO updatedEmployee) {

        EmployeeDTO employeeDTO = employeeService.updateEmployee(EmplpoyeeId, updatedEmployee);

        return ResponseEntity.ok(employeeDTO);
    }

    // build rest api to delete a employee
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long EmployeeId) {

        employeeService.deleteEmployee(EmployeeId);
        return ResponseEntity.ok("Employee deleted Successfully");

    }

}
