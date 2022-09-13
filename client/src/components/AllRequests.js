import React, {useState, useEffect } from 'react'; 
import axios from 'axios'; 
import {Link, useNavigate} from 'react-router-dom'; 


const AllRequests = () => {
    
    const [requestList, setRequestList] = useState([]); 
    const navigate = useNavigate(); 

    useEffect(()=>{
        axios.get('http://localhost:8000/api/callbells')
        .then((res)=>{
            setRequestList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    
    const deleteHandler =(id)=>{
        axios.delete(`http://localhost:8000/api/callbells/${id}`)
        .then((res)=>{
            const newRequestList = requestList.filter((request)=>{
                return request._id !== id
            })
            setRequestList(newRequestList)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div> 
            <h1>Welcome to 5W/NW at TJUH Center City!</h1>
            <div className="main-container">
                <table className="col-12 mx-auto table table-hover text-start mt-4">
                    <thead>
                        <tr>
                            <th>Room #</th>
                            <th>Request</th>
                            <th>Urgency</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                
                    {
                        requestList.map((request)=>(
                        <tr>
                            <td className="room-num">{request.room}</td>
                            <td>{request.request} {request.custom}</td>
                            <td>{request.urgency}</td>
                            <td>
                                <Link to={`/requests/${request._id}`}>Details</Link>  |
                                <button className="btn btn-link" onClick={()=>deleteHandler(request._id)}>Completed</button>
                            </td>
                        </tr>
                    ))
                }
                </table>
                <Link to={`/requests/new`}>Add A New Request</Link>
            </div>
            <div className="bottom-half">
                <h1 className="lasts">A Message from the Creater: Nancy Do</h1>
                <h4 className="lasts">Cardiac Critical Care Technician to Full Stack Software Engineer</h4>
                <p className="lasts">Thank you for taking the time to use this new feature. The goal of this project was to decrease the nursing staff's alarm
                    fatigue and to help assit patients who are isolating from covid-19. What is alarm fatigue? Alarm fatigue occurs when clinicians experience high exposure to medical device alarms, causing alarm desensitization and leading to missed alarms or delayed response.
                    In order to take care of you and your loved one in a timely matter, please take the time to use this application. Thank you for your time and patience, pleae feel free to contact me about further questions or suggetions. 
                </p>
                <div className= "d-flex justify-content-center lasts"> |
                    <a className="lasts text-white" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nancy-do-9588a9158/">LinkedIn</a> |                    
                    <a className="lasts text-white" target="_blank" rel="noopener noreferrer" href="https://github.com/nancydo272">Github </a> |
                    <a className="lasts text-white" target="_blank" rel="noopener noreferrer" href="https://github.com/nancydo272/5WestProject">About This Project</a> |
                </div>
            </div>
        </div>
    )
}

export default AllRequests