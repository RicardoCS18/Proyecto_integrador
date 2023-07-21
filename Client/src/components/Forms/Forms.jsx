import { useState } from "react"
import validate from "./validate";
const Forms = (props) => {
    const [userData, setUserData] = useState({
        email:"",
        password:""
    });
    const [errors, setErrors] = useState({
        email:"",
        password:""
    })
    // const validate = (obj)=>{
        
    //     if(/^[^\s@]+@[^\s@]+\.[^\s@]{2,35}$/.test(obj.email)){
    //         setErrors({...errors, email:""});
    //     } else {setErrors({...errors, email:"Invalid email"})}
    //     if(obj.email==="") {setErrors({...errors, email:"Email is empty"});}
    //     if( /^(?=.*[0-9]).{6,10}$/.test(obj.password)){
    //        setErrors({...errors, password:""});
    //     } else if ((obj.password!=="") && !(/^(?=.*[0-9]).{6,10}$/.test(obj.password)) ) {setErrors({...errors, password:"Password must have at least 1 number and must be from 6 to 10 characters"})}
    // }
     const submitHandler = (event) => {
        event.preventDefault();
        props.login(userData);
        
    }
    const handleChange = (event) => {
        let property = event.target.name
        setUserData({...userData, [property]:event.target.value}); 
        validate(userData,errors, setErrors);

    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="email">Email</label>
            <input type="text" value={userData.email} name="email" onChange={handleChange} /> <h5>{errors.email}</h5>
            <br></br>
            <label htmlFor="password">Password</label>
            <input type="password" value={userData.password} name="password" onChange={handleChange} /> <h5>{errors.password}</h5>
            <button type="submit">Login</button>
        </form>
    )
}
export default Forms