async function signup(e){
    try{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.pass.value
        const res = await axios.post(`http://localhost:3000/user/signup/`,{name,email,password},{
            headers: {'Content-Type': 'application/json'}
          })
          
        console.log(res);
        if(res.status===500){
            console.log("lagged")
            throw new Error('User already Exists');
        }
        if(res.status===201){
            
            console.log("in")
            window.location.href = "D:/NodejsExpenseTracker/login.html";
        }
        else{
            throw new Error('Failed to Login');
        }
    }catch(err){
        console.log(err);
        document.body.innerHTML += `<div style="color:red;">${err.response.data}<div`;
    }
}