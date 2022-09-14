import React, {useState, useEffect} from 'react'; 
import {useParams, useNavigate, Link} from 'react-router-dom'; 
import axios from 'axios'; 

const EditRequest = () => {
    
    const [room, setRoom] = useState(''); 
    const [request, setRequest] = useState(''); 
    const [custom, setCustom] = useState(''); 
    const [urgency, setUrgency] = useState(''); 

    const [errors, setErrors] = useState(''); 
    const navigate = useNavigate(); 
    const {id} = useParams(); 

    useEffect(()=>{
        axios.get( `http://localhost:8000/api/callbells/${id}`)
        .then((res)=>{
            console.log(res.data);
            setRoom(res.data.room); 
            setRequest(res.data.request); 
            setCustom(res.data.custom); 
            setUrgency(res.data.urgency);   
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    const editHandler =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/callbells/${id}`,{
            room, 
            request,
            custom, 
            urgency,
        })
        .then((res)=>{
            console.log(res)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.error)
        })
    }

    return (
        <div>
            <h1>Edit Request</h1>
            <form onSubmit={editHandler}>
                <div className="form-row">
                    <label>Room Number:</label>
                    <select value={room} name="room" onChange ={(e)=> setRoom(e.target.value)}>
                        <option>Select A Room Number</option>
                        <option value="5100">5100</option>
                        <option value="5101">5101</option>
                        <option value="5102">5102</option>
                        <option value="5103">5103</option>
                        <option value="5104">5104</option>
                        <option value="5105">5105</option>
                        <option value="5106">5106</option>
                        <option value="5107">5107</option>
                        <option value="5108">5108</option>
                        <option value="5109">5109</option>
                        <option value="5110">5110</option>
                        <option value="5112">5112</option>
                        <option value="5114">5114</option>
                        <option value="5116">5116</option>
                        <option value="5118">5118</option>
                    </select>
                </div>
                <div className="form-row">
                    <label>Request:</label>
                    <select value={request} name="request" onChange ={(e)=> setRequest(e.target.value)}>
                        <option>Select A Request</option>
                        <option value="Glass of water">Glass of water</option>
                        <option value="Pain Medication">Pain Medication</option>
                        <option value="Medication">Medication </option>
                        <option value="Change linen">Change linen</option>
                        <option value="Need a blanket">Need a blanket</option>
                        <option value="Speak with nurse">Speak with nurse</option>
                        <option value="Need to use the bathroom">Need to use the bathroom</option>
                        <option value="Spill/Clean up">Spill/Clean up</option>
                        <option value="IV Pump is beeping">IV Pump is beeping</option>
                        <option value="Custom:">Custom:</option>
                    </select>
                </div>
                <div className="form-row">
                    <label>Custom Request:</label>
                    <textarea type="text" value={custom} onChange={(e)=>setCustom(e.target.value)} />
                </div>
                <div className="form-row">
                    <label>Urgency:</label>
                    <select value={urgency} name="urgency" onChange ={(e)=> setUrgency(e.target.value)}>
                        <option>Select Urgency level</option>
                        <option value="Low">Low</option>
                        <option value="Low-Medium">Low-Medium</option>
                        <option value="Medium">Medium</option>
                        <option value="Medium-High">Medium-High</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div>
                    <button className="btn btn-primary">Update</button>
                    <Link to ={'/'} className="btn btn-primary m-1">Cancel</Link>
                </div>
            </form>
            <div>
                {errors.room ? <span className="text-danger">{errors.room.message}</span> : null }<br></br>
                {errors.request ? <span className="text-danger">{errors.request.message}</span> : null }<br></br>
                {errors.urgency ? <span className="text-danger">{errors.urgency.message}</span> : null }<br></br>
            </div>
            <h5>Thank you for being so patient, someone from our excellent staff will be with you soon!</h5>
            <p>Please ask our staff about the Daisy Award Nominations.  </p>

        </div>
    )
}

export default EditRequest