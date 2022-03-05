import React from 'react'

export default function Login() {
  return (
   <>
 <form action='/' className='container bg-primary p-3' >
 <div className="row form-floating mb-3 ">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="row form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>

<button type="button" class="btn btn-dark m-3">Success</button>

</form>
   </>
  )
}
