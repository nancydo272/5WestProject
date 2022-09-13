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
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className="one-per">
                <h1>{request.room}'s Request</h1>
            <table className="request-table">
                <tr>
                    <th>Request:</th>
                    <td>{request.request} {request.custom}</td>
                </tr>
                <tr>
                    <th>Urgency:</th>
                    <td>{request.urgency}</td>
                </tr>
                <tr>
                    <th>Actions:</th>
                    <td>
                        <button className="completed-btn" onClick={()=>deleteHandler(request._id)} >Completed</button>
                        <Link to={`/requests/${request._id}/edit`} className="edit-btn">Edit </Link>
                        </td>
                </tr>
            </table>
            <Link className="back-btn" to ={'/'}>Back to the Unit's Dashboard!</Link>
        </div>
    )
}

export default OneRequest