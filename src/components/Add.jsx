import React, { useState } from 'react'
import axios from "axios";
const Add = () => {
    const[input,setInput]=new useState([
        {
            Name:"",
            Flag:"",
            Continent:"",
            Formedon:"",
            CurrentPresident:"",
            OfficialLanguage:""
        }
    ])
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})

    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3005/api/country/add",input).then(
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
                        <input type="text" className="form-control" name="Name" value={input.Name} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-lab">Flag</label>
                        <input type="text" className="form-control" name="Flag" value={input.Flag} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-lab">Continent</label>
                        <input type="text" className="form-control" name="Continent" value={input.Continent} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-lab">Formed on</label>
                        <input type="text" className="form-control" name="Formedon" value={input.Formedon} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-lab">Current President</label>
                        <input type="text" className="form-control" name="CurrentPresident" value={input.CurrentPresident} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-lab">Official Language</label>
                        <input type="text" className="form-control" name="OfficialLanguage" value={input.OfficialLanguage} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readValues}>Add Country</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Add
