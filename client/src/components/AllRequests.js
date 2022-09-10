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
            navigate('/unitDashboard')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div> 
            <div className="d-flex justify-content-between">
                <h1>Welcome to 5W/NW!</h1>
                <Link to ={'/login'}>Login</Link>
            </div>
            <table className="table table-striped">
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
                        <td>{request.room}</td>
                        <td>{request.request} {request.custom}</td>
                        <td>{request.urgency}</td>
                        <td>
                            <Link to={`/requests/${request._id}`}>Details</Link>  |
                            <Link to={`/requests/${request._id}/edit`}>Edit</Link> |
                            <button className="btn btn-link" onClick={()=>deleteHandler(request._id)} >Done</button>
                        </td>
                    </tr>
                ))
            }
            </table>
            <Link to={`/requests/new`}>Add A New Request</Link>
        </div>
    )
}

export default AllRequests