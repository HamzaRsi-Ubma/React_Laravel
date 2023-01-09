import React from 'react'

export const Account = () => {
  let user = JSON.parse(localStorage.getItem('user'))
  return (

    <div>
      {
         localStorage.getItem('user')?
          <>{user.userDetails.name}
          </>
          :
          null
          }
          </div>

  )
}

export default Account 
