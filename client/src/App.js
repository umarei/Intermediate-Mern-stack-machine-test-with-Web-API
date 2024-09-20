import React, { useState } from 'react';
import Login from './Login'; // Assuming Login.js is in src
import Register from './Register'; // Add this import
import EmployeeForm from './EmployeeForm'; // If in src
import EmployeeList from './EmployeeList'; // If in src

function App() {
    const [token, setToken] = useState('');
    const [isRegistering, setIsRegistering] = useState(false); // State to manage registration view

    const toggleRegister = () => {
        setIsRegistering(!isRegistering); // Toggle between login and register
    };

    // If the token is not set, show the Login or Register component
    if (!token) {
        return (
            <div>
                {isRegistering ? (
                    <>
                        <h2>Register</h2>
                        <Register setToken={setToken} toggleRegister={toggleRegister} />
                        <p>Already have an account? <button onClick={toggleRegister}>Login</button></p>
                    </>
                ) : (
                    <>
                        <h2>Login</h2>
                        <Login setToken={setToken} />
                        <p>Don't have an account? <button onClick={toggleRegister}>Register</button></p>
                    </>
                )}
            </div>
        );
    }

    // Once the token is set, show the employee form and list
    return (
        <div>
            <h1>Employee Management System</h1>
            <EmployeeForm />
            <EmployeeList />
        </div>
    );
}

export default App;
