import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Search = () => {

    //for getting input
const[input,setInput]= useState({
    Name:""
})
const inputHandler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
}
//till here

const [ out,setOutput ]=useState([])
const readvalues=()=>{
    axios.post("http://localhost:3005/api/country/search",input).then((response)=>{
        setOutput(response.data.countrydat)
    })
}
useEffect(()=>{readvalues()},[])
  return (
    <div>
       <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="from" className="form-label">Name</label>
                                <input type="text" className="form-control"  name="Name" value={input.Name} onChange={inputHandler} />
                            </div>
                            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readvalues}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            {
                            out.map((value,index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex">

                                        <div class="card" >
                                            <img src={value.Flag} class="card-img-top" alt="..."/>
                                            
                                                <div class="card-body">
                                                    <h5 class="card-title">Name: {value.Name}</h5>
                                                    <p class="card-text">Continent: {value.Continent}</p>
                                                    <p class="card-text">Formed on: {value.Formedon}</p>
                                                    <p class="card-text">Current President: {value.CurrentPresident}</p>
                                                    <p class="card-text">Official Language: {value.OfficialLanguage}</p>
                                                </div>
                                        </div>

                                    </div>
                                }
                            )
                        }
</div>
</div>
</div>
</div>
    </div>
  )
}

export default Search
