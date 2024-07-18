import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddEmpL } from '../redux/action/action'
const AddEmp = () => {
  const dispatch = useDispatch()
  const [empid,setempid] = useState("")
  const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [pass,setpass] = useState("")
  const [city,setcity] = useState("")
  const [salary,setsalary] = useState("")
 const [deg,setdeg] = useState("")

 const handlesubmit = (e) => {
  e.preventDefault()
  let obj = {
    empid,name,email,pass,city,salary,deg
  }
  dispatch(AddEmpL(obj))
  setname("")
  setemail("")
  setpass("")
  setcity("")
  setsalary("")
  setdeg("")
  alert("User Add")
 }
  return (
    <div>
      <h1>Add EmployMent</h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={handlesubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control"  aria-describedby="emailHelp"  onChange={(e) => setname(e.target.value)} value={name}/>
              </div>
              
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                <input type="email" className="form-control"  onChange={(e) => setemail(e.target.value)} value={email}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control"  onChange={(e) => setpass(e.target.value)} value={pass}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">City</label>
                <input type="text" className="form-control"  onChange={(e) => setcity(e.target.value)} value={city}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Salary</label>
                <input type="text" className="form-control" onChange={(e) => setsalary(e.target.value)} value={salary}/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Degination</label>
                <input type="text" className="form-control"  onChange={(e) => setdeg(e.target.value)} value={deg} />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmp
