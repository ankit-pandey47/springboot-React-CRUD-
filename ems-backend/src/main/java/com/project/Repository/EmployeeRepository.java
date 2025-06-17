
package com.project.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}