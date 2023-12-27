import React from 'react'
import '../../index.css'
import { useState } from 'react'
import { Link} from 'react-router-dom';


const Dashboard = () => {
    const [data, setData] = useState({name:"", gender:"",nationality:"", email:"", phone:"", address:"", })
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData({...data, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(data)

    }


  return (
    <form method='post' onSubmit={handleSubmit}   >
        <h1> <p>
            Survey </p>
        </h1>
        <input type ="text" name ="name" id=""  onChange={handleChange} value={data.name} placeholder='Enter name'/>

        <input type ="text" name ="gender" id="" onChange={handleChange} value={data.gender} placeholder='Enter gender' />

        <input type ="text" name ="nationality" id="" onChange={handleChange} value={data.nationality}  placeholder='Enter nationality'/>

        <input type ="email" name ="email" id="" onChange={handleChange} value={data.email} placeholder='example@gmail.com '/>

        <input type ="phone" name ="phone" id="" onChange={handleChange} value={data.phone}  placeholder='+91'/>

        <input type ="text" name ="address" id="" onChange={handleChange} value={data.address} placeholder='Enter address'/>

        <textarea name ="mesage" id="" cols="10" onChange={handleChange}  placeholder='message...'/>

                        <Link to={'/'}>
                            <button className="btn">send</button>
                        </Link>

    </form>
  )
}

export default Dashboard
