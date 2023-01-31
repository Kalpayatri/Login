import React,{useState} from "react";

const Register=()=>{
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            username:username,
            email:email,
            password:password,
        }
        setUsername('')
        setEmail('')
        setPassword('')
        console.log(formData)
    }

    const handleChange=(e)=>{
        if(e.target.name === 'username'){
            setUsername(e.target.value)
        }else if(e.target.name === 'email'){
            setEmail(e.target.value)
        }else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }
  return(
    <div className="form">
        <form onSubmit={handleSubmit}>
            <div className="brand"> 
            {/* <img src={logo} alt="logo"/> */}
            <h1 className="logo_name">Login</h1>
            </div> 
            <input type="text" placeholder="Username" name="username" value={username} onChange={handleChange}/>
            <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange}/>
            <button type="submit" className="btn_register">Login</button>
        </form>
    </div>
  )
}

export default Register