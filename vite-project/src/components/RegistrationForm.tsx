import { useState } from "react";

function RegistrationForm(){
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        phoneNumber:''
    });
    const [errors, setErrors] = useState({
        name:'',
        email:'',
        password:'',
        confirmpassword:'',
        phoneNumber:''
    });
    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log(formData);
        if(validateForm()) {
            alert('Form submitted successfully');
        };
    }
    function validateForm(){
        let newErrors = {
            name: '',
            email: '',
            password: '',
            confirmpassword: '',
            phoneNumber: ''
        };
        if(formData.password.length === 0){
            newErrors.password = 'Password is required';
        } else if(formData.password !== formData.confirmPassword){
            newErrors.password = 'Password and Confirm Password should be same';
        }
        if(formData.phoneNumber.length !== 10){
            newErrors.phoneNumber = 'Phone number should be 10 digits';
        }
        if(formData.name.length === 0){
            newErrors.name = 'Name is required';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(formData.email.length === 0){
            newErrors.email = 'Email is required';
        } else if(!emailRegex.test(formData.email)){
            newErrors.email = 'Email is invalid';
        }
        setErrors(newErrors);
        return Object.values(newErrors).every(x => x === '');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <label>
                Name:
                <input type="text" name="name"  onChange={handleChange}/>
            </label>
            {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
            <label>
                Email:
                <input type="email" name="email" onChange={handleChange} />
            </label>
            </div>
            <div>
                <label> Password:</label>
                <input type="password" name="password" onChange={handleChange}></input>
            </div>
            <div>
                <label> Confirm Password:</label>
                <input type="password" name="confirmPassword" onChange={handleChange}></input>
            </div>
            <div>
                <label> Phone Number:</label>
                <input type="tel" name="phoneNumber" onChange={handleChange}></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default RegistrationForm;