import React from 'react'

export default function Props(props) {
  function toUppercase()
  {
    alert("u have xlicked me");
  }
  return (
<>
<div className='form_container'>
<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">{props.email}</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">{props.pss}</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={toUppercase}>Submit</button>
</form>
</div>
</>
  )
}
