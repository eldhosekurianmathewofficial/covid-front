import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Search = () => {

    //for getting input
const[input,setInput]= useState({
    name:""
})
const inputHandler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
}
//till here

const [ out,setOutput ]=useState([])
const readvalues=()=>{
    axios.post("http://localhost:3001/api/country/search",input).then((response)=>{
        setOutput(response.data)
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
            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">name:</th>
      <th scope="col">address:</th>
      <th scope="col">age:</th>
      <th scope="col">Mobile:</th>
      <th scope="col">symptoms:</th>
      <th scope="col">Expense:</th>
    </tr>
  </thead>
  <tbody>
  {
    out.map((value,index)=>{
        return  <tr>
        <th scope="row">{value.name}</th>
        <td>{value.address}</td>
        <td>{value.age}</td>
        <td>{value.mobile}</td>
        <td>{value.symptoms}</td>
        <td>{value.CovidStatus}</td>
      </tr>
    })
  }
    
  </tbody>
</table>
            </div>
        </div>
      </div>
</div>
    
  )
}

export default Search
