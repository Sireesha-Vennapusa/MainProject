const Validation=(data)=>{
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(data.name===""){
        error.name="Name should not be empty"
    }
    if(data.email===""){
        error.email="Email should not be empty"
    }
    if(!email_pattern.test(data.email)){
        error.email="Email didn't match"
    }
    if(data.password===""){
        error.password="Password should not be empty"
    }
    if(!password_pattern.test(data.password)){
        error.password="password must contain atleast 8 characters and digits"
    }
    return error;
}
export default Validation;