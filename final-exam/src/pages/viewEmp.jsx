import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VIEWEMPL } from '../redux/action/action'

const ViewEmp = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(VIEWEMPL())
    })
    const record = useSelector(state => state)

    return (
        <div>
            <h1>view Empolyee</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Salary</th>
                                    <th scope="col">Degination</th>
                                </tr>
                            </thead>
                            <tbody>
                           { record && Object.entries(record).map(([key, val]) => {
                                    return(
                                        <tr>
        
                                            <th scope="row">{++i}</th>
                                            <td>{val.name}</td>
                                            <td>{val.email}</td>
                                            <td>{val.pass}</td>
                                            <td>{val.city}</td>
                                            <td>{val.salary}</td>
                                            <td>{val.pass}</td>
                                            <td>{val.deg}</td>
                                </tr>
                                    )
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEmp
