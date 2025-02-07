import React, { useState, useEffect } from 'react';
import { useCreateEmployeeMutation } from 'host/store/employeeApi';

const EmployeeForm = ({selectedEmployee}) => {
    const[createEmployee, {isLoading}] = useCreateEmployeeMutation();

    const[formData, setFormData] = useState({
        name: '',
        department: '',
        salary: '0',
});

useEffect( () => {
    if(selectedEmployee){
        setFormData({
            name: selectedEmployee.name,
            department: selectedEmployee.department,
            salary: selectedEmployee.salary,
        })
    }
}, selectedEmployee);

const handleSubmit = async  (e) => {
    e.preventDefault();
    try{
        await createEmployee(formData).unwrap();
        setFormData({name: '', department: '', salary: '0'});
    }catch(err){
        console.log(err);
    }
};

return (
    <form onSubmit={handleSubmit} className='Employee-form'>
        <div>
            <label htmlFor='name'>Name</label>
            <input type = 'text' 
            id = 'name' 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value
            })} 
        required/>
        </div>
        <div>
            <label htmlFor='department'>Department</label>
            <input type = 'text' 
            id = 'department' 
            value={formData.name}
            onChange={(e) => setFormData({...formData, department: e.target.value
            })} 
        required/>
        </div>
        <div>
            <label htmlFor='salary'>Salary</label>
            <input type = 'text' 
            id = 'salary' 
            value={formData.name}
            onChange={(e) => setFormData({...formData, salary: e.target.value
            })} 
        required/>
        </div>
        <button type = 'submit' disabled={isLoading}>
            {isLoading? 'Creating...': 'Create Employee'}
        </button>
    </form>
)

}

export default EmployeeForm;