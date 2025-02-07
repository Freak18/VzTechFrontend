import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';


const EmployeeList = React.lazy(() => import('employeeList/App'));
const EmployeeForm = React.lazy(() => import('employeeForm/App'));

const App = () =>{
  const[selectedEmployee, setSelectedEmployee] = useState(null);
  return(
    <Provider store={store}>
      <div className='container'>
        <h1>Employee Management System</h1>
        <React.Suspense fallback={<div> Loading....</div>}>
          <EmployeeList setSelectedEmployee={setSelectedEmployee} />
          <EmployeeForm selectedEmployee={selectedEmployee} />
          </React.Suspense>
      </div>
    </Provider>
  )
}

export default App;