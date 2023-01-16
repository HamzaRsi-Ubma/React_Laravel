import React,{useState} from 'react'


export const Account = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  const [id,setId]= useState(user.userDetails.id);
  const [name,setName]= useState(user.userDetails.name);
  const [address,setAddress]= useState(user.userDetails.address);
  const [mobile,setMobile]= useState(user.userDetails.mobile);
  const [shop,setShop]= useState(user.userDetails.shop);
  async function Update (){
    if(name=="")
    {
      alert("Please enter your Name");
    }else{


      
      let item = {id,name,address,mobile,shop}
      let result = await fetch('http://127.0.0.1:8000/api/update-user',{
        method:'POST',
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(item)
      });

      result= await result.json();
      alert("Your account details successfully updated!");
    }
  }
  return (

    <div className='col-sm-6 offset-sm-3'>
      {
         localStorage.getItem('user')?
          <>
          <h2>{user.userDetails.name}</h2>
         <h5> Your account details are as below: </h5>

         Name:<input className='form-control' type='text' onChange={(e)=>setName(e.target.value)}  value={name} />
         <br></br>
         Address:<input className='form-control' type='text' onChange={(e)=>setAddress(e.target.address)}  value={address}/>
         <br></br>
         Mobile:<input className='form-control' type='text' onChange={(e)=>setMobile(e.target.mobile)}  value={mobile}/>
         <br></br>
         Shop:<input className='form-control' type='text' onChange={(e)=>setShop(e.target.shop)}  value={shop}/>
         <br></br>

         <button className='form-control btn btn-primary' onClick={Update}>Update</button>
          </>
          :
          null
          }
          </div>

  )
}

export default Account 
