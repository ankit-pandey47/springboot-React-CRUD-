import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { createEmployee, getEmployee, updateEmployee } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const EmployeeCompnonet = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator = useNavigate()
    const { id } = useParams();



    function saveOrUpdateEmployee(e) {
        e.preventDefault()
        const Employee = { firstName, lastName, email }

        if (validateForm()) {
            if (id) {
                updateEmployee(id, Employee).then((response) => {
                    console.log(response.data)
                    navigator("/employees")
                }).catch(error => console.log(error))
            }

            else {
                createEmployee(Employee).then((response) => {
                    console.log(response.data)
                    navigator("/employees")
                })
            }
        }
    }

    //function to validate form
    function validateForm() {
        let valid = true;

        const errorsCopy = { ...errors }

        if (firstName.trim()) {
            errorsCopy.firstName = ''
        } else {
            errorsCopy.firstName = 'First Name is Required';
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = "Last Name is required"
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = "";
        } else {
            errorsCopy.email = 'Email is required'
            valid = false
        }

        setErrors(errorsCopy)
        return valid;


    }

    function pageTitle() {
        if (id) return <h2 className='text-center mt-2'>Update Employee</h2>
        else return <h2 className='text-center mt-2'>Add Employee</h2>
    }

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [id])

    return (
        <div className="container" style={{ width: "60vw", marginLeft: "23vw", marginTop: "100px" }}>
            <div className="row justify-content-center">

                <div className="card shadow ">
                    <div className="card-body">
                        {
                            pageTitle()
                        }

                        <form>


                            <div className="form-group mb-2">
                                <label >FirstName</label>

                                <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''} `} placeholder='Enter Employee FirstName' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>

                            {/* lastName */}
                            <div className="form-group mb-2">
                                <label >lastName</label>
                                <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} name='lastName' placeholder='Enter Employee LastName' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>


                            {/* Email field */}
                            <div className="form-group mb-2">
                                <label>Email</label>
                                <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} name='email ' placeholder='Enter Employee email here' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>

                            <button className='btn w-100 btn-success ' onClick={saveOrUpdateEmployee}>Submit</button>

                        </form>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default EmployeeCompnonet
