import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const Register = () => {

    const [name,setName]=useState('');
    const [shop,setShop]=useState('');
    const [mobile,setMobile]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();

    async function Save(){

      let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if(name=="")
      {
        alert('name is required');
      }else if(shop==""){

      }else if(mobile==""){

      }else if(email==""){

      }else if (!filter.test(email)) {
         alert('email not valide!');
      }else if(address==""){

      }else if(password==""){

      }
        let item={name,shop,mobile,email,address,password}
        //console.warn(item)
        let result = await fetch('http://127.0.0.1:8000/api/register-user',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(item)
    });
    result= await result.json();
    alert(result['email']);
    navigate('/thanks');
    //console.warn('User registred successfully!',result);
    }

  return (
    <div className='col-sm-6 offset-sm-3'>
        <h1>inscription</h1>
       Nom: <input type='text' value={name} onChange={(e)=>setName(e.target.value)}  className='form-control' required></input>
       Boutique: <input type='text' value={shop} onChange={(e)=>setShop(e.target.value)} className='form-control' required></input>
       Tél: <input type='text' value={mobile} onChange={(e)=>setMobile(e.target.value)} className='form-control' required></input>
       Email: <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' required></input>
       Addresse: <input type='text' value={address} onChange={(e)=>setAddress(e.target.value)} className='form-control' required></input>
       Mot de passe: <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' required></input>
<br></br>   <button onClick={Save} className='btn btn-primary'>S'Inscrire</button>
    </div>
  )
}

export default Register
