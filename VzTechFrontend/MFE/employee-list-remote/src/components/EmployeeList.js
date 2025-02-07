import React from 'react';
import { useGetAllEmployeesQuery } from 'host/store/employeeApi';

const EmployeeList = ({onEmployeeSelect}) => {
    const{data:employees , isLoading} = useGetAllEmployeesQuery();

    if(isLoading) return <p>Loading bruh....</p>
    return(
        <div className ="employee-list">
        {employees?.map(employee =>(
                <div
                    key = {employee.id}
                    className = "employee-card"
                    onClick = { () => onEmployeeSelect(employee)}>
                    <h3>{employee.name}</h3>
                    <p>Department : {employee.department}</p>
                    <p>Salary : {employee.salary}</p>
                </div>
        ))}
        </div>
    )
}

export default EmployeeList;