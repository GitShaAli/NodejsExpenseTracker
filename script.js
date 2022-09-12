async function signup(e){
    try{
        e.preventDefault();
        const regUser={
            name : e.target.name.value,
            email : e.target.email.value,
            password : e.target.pass.value
        }
        const res = axios.post("http://localhost:3000/user/signup",regUser)
        if(res.status===201){
            window.location.href = "D:/NodejsExpenseTracker/login.html";
        }else{
            throw new Error('Failed to Login');
        }
    }catch(err){
        console.log(err);
        document.body.innerHTML += `<div style="color:red;">${err}<div`;
    }
}