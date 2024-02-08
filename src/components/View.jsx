import React, { useEffect, useState } from 'react'
import axios from "axios";
const View = () => {
    const[output,setOutput]= new useState([])
    const getData=()=>{
        axios.get("http://localhost:3001/api/covidapp/view").then(
            (response)=>{
                setOutput(response.data)
            }
        )
    }
    useEffect(()=>{getData()},[])
  return (
    <div>
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
    output.map((value,index)=>{
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
export default View
