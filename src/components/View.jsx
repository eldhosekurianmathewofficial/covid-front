import React, { useEffect, useState } from 'react'
import axios from "axios";
const ViewCountry = () => {
    const[output,setOutput]= new useState([])
    const getData=()=>{
        axios.get("http://localhost:3005/api/country/view").then(
            (response)=>{
                setOutput(response.data.countrydat)
            }
        )
    }
    useEffect(()=>{getData()},[])
  return (
    <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
            {
                            output.map(
                                (value,index) => {
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
  )
}

export default ViewCountry
