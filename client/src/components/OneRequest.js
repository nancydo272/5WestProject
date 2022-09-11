import React, {useEffect, useState} from 'react'; 
import axios from 'axios'; 
import {useParams, Link, useNavigate} from 'react-router-dom'; 

const OneRequest = () => {
    
    const {id} = useParams(); 
    const [request, setRequest] = useState(''); 
    const [requestList, setRequestList] = useState([]); 
    const navigate = useNavigate(); 
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/callbells/${id}`)
        .then((res)=>{
            setRequest(res.data)
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
        <div className="w-75 p-3">
            <div className="d-flex justify-content-between">
                <h1>{request.room}'s Request</h1>
                <Link to ={'/unitDashboard'}>Go Back</Link>
            </div>
            <table>
                <tr>
                    <th>Request:</th>
                    <td>{request.request} {request.custom}</td>
                </tr>
                <tr>
                    <th>Urgency:</th>
                    <td>{request.urgency}</td>
                </tr>
            </table>
            <div className="d-flex flex-row">
                <button className="btn btn-success" onClick={()=>deleteHandler(request._id)} >Completed</button>
                <Link to={`/requests/${request._id}/edit`} className="btn btn-warning ">Edit </Link>
            </div>
        </div>
    )
}

export default OneRequest