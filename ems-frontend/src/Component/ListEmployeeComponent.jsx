import React, { useState, useEffect } from 'react'
import { listEmployees } from '../Services/EmployeeService';
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from 'react-router-dom';
import { deleteEmployee } from '../Services/EmployeeService';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate()


    useEffect(() => {
        getAllEmployees()
    }, [])

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data)
        }).catch(error => console.log(error))
    }

    function addNewEmployee() {
        navigator("/add-employee")
    }
    function updateEmployee(employeeId) {

        navigator(`/edit-employee/${employeeId}`)
    }

    function removeEmployee(employeeId) {
        deleteEmployee(employeeId).then((response) => {
            getAllEmployees()
        }).catch(error => console.log(error))
    }

    return (
        <div className='card  ' style={{
            marginLeft: "10vw"
        }}>
            <div className='card-body'>
                <div className='container'>

                    <h2 className='text-center'>List Of Employees</h2>
                    <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
                    <div className="d-flex justify-content-center">
                        <table className='table table-responsive table-striped table-bordered w-auto'>
                            <thead>
                                <tr>
                                    <th>Employee Id</th>
                                    <th>Employee First Name</th>
                                    <th>Employee Last Name</th>
                                    <th>Employee email Id</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map((employee) =>
                                        <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                            <td>
                                                <button className='btn btn-info p-1' onClick={() => updateEmployee(employee.id)}>Update</button>
                                                <button className='btn btn-danger p-1 m-2' onClick={() => removeEmployee(employee.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >




    )
}

export default ListEmployeeComponent

