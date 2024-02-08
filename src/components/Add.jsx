import React, { useState } from 'react'
import axios from "axios";
const Add = () => {
    const[input,setInput]=new useState([
        {
    name:"",
    address:"",
    age:"",
    mobile:"",
    symptoms:"",
    CovidStatus:""
        }
    ])
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})

    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3001/api/covidapp/add",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status==="success") {
                    alert("Succesfully inserted")
                } else {
                    alert("Something went wrong")
                    
                }
            }
        )
    }
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-lab">Name</label>
                        <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-lab">address</label>
                        <input type="text" className="form-control" name="address" value={input.address} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-lab">age</label>
                        <input type="text" className="form-control" name="age" value={input.age} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-lab">mobile</label>
                        <input type="text" className="form-control" name="mobile" value={input.mobile} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-lab">symptoms</label>
                        <input type="text" className="form-control" name="symptoms" value={input.symptoms} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-lab">CovidStatus</label>
                        <input type="text" className="form-control" name="CovidStatus" value={input.CovidStatus} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readValues}>Add</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Add
