import React from 'react'
import axios from 'axios';

const REST_API_BASE_URL = "http://localhost:8080/api/employees"

export const listEmployees = () => axios.get(REST_API_BASE_URL);


export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee)

export const getEmployee = (id) => axios.get(REST_API_BASE_URL + '/' + id);

export const updateEmployee = (employeeId, Employee) => axios.put(REST_API_BASE_URL + "/" + employeeId)

export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + "/" + employeeId)
