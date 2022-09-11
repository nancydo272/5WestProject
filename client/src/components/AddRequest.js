import React, {useState} from 'react'; 
import axios from 'axios'; 
import { useNavigate, Link} from 'react-router-dom'

const AddRequest = () => {

    const [room, setRoom] = useState(''); 
    const [request, setRequest] = useState(''); 
    const [custom, setCustom] = useState(''); 
    const [urgency, setUrgency] = useState(''); 

    const [errors, setErrors] = useState({}); 
    const navigate = useNavigate(); 

    const submitHandler = (e) => {
        e.preventDefault(); 
        axios.post('http://localhost:8000/api/callbells/create',{
            room,
            request, 
            custom, 
            urgency
        })
        .then((res)=>{
            console.log(res)
            navigate('/unitDashboard')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.error)
        })
    }
    return (
        <div>
            <h1>Adding A New Request</h1>
            <form onSubmit={submitHandler}>
                <div classname="form-group row">
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
                    {errors.room ? <span className="text-danger">{errors.room.message}</span> : null }<br></br>
                </div>
                <div classname="form-group row">
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
                    {errors.room ? <span className="text-danger">{errors.room.message}</span> : null }<br></br>
                </div>
                <div classname="form-group row">
                    <label>Custom Request:</label>
                    <textarea type="text" onChange={(e)=>setCustom(e.target.value)} />
                </div>
                <div classname="form-group row">
                    <label>Urgency:</label>
                    <select value={urgency} name="urgency" onChange ={(e)=> setUrgency(e.target.value)}>
                        <option>Select Urgency level</option>
                        <option value="Low">Low</option>
                        <option value="Low-Medium">Low-Medium</option>
                        <option value="Medium">Medium</option>
                        <option value="Medium-High">Medium-High</option>
                        <option value="High">High</option>
                    </select>
                    {errors.urgency ? <span className="text-danger">{errors.urgency.message}</span> : null }<br></br>
                </div>
                <button className="btn btn-primary m-1">Add</button>
                <Link to ={'/unitDashboard'} className="btn btn-primary">Cancel</Link>
            </form>
        </div>
    )
}

export default AddRequest