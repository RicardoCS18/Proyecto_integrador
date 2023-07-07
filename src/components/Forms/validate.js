const validate = (userData, errors, setErrors) => {
    let emailMessage=""
    let passwordMessage=""
    if(/^[^\s@]+@[^\s@]+\.[^\s@]{2,35}$/.test(userData.email)){
        emailMessage=""
    } else if (userData.email==="") {emailMessage= "Email is empty"} 
    else {emailMessage="Invalid email"}
    if( /^(?=.*[0-9]).{6,10}$/.test(userData.password)){
        passwordMessage=""
    } else if ((userData.password!=="") && !(/^(?=.*[0-9]).{6,10}$/.test(userData.password)) ) {
        passwordMessage="Password must have at least 1 number and must be from 6 to 10 characters"
    }
    setErrors({...errors, email:emailMessage,password:passwordMessage})
}
export default validate