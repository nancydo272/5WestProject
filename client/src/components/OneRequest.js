import React, {useEffect, useState} from 'react'; 
import axios from 'axios'; 
import {useParams, Link, useNavigate} from 'react-router-dom'; 
import banner from '../images/5westbanner.jpg'; 

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
            <div className="nav-bar">
                <a className="nav-bar h5" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nancy-do-9588a9158/">Contact the Creator</a> |                    
                <a className="nav-bar h5" target="_blank" rel="noopener noreferrer" href="https://github.com/nancydo272">About the Creator </a> |
                <a className="nav-bar h5" target="_blank" rel="noopener noreferrer" href="https://github.com/nancydo272/5WestProject">About This Project</a> |
                <Link className="nav-bar h5" to ={'/'}>Unit Dashboard</Link>
            </div>
            <div>
                <img className="banner" src={banner} alt="blue hispital banner"/>
            </div>
            <table className="request-table">
                <h1>{request.room}'s Request</h1>
                <tbody>
                    <tr>
                        <th>Request:</th>
                        <td>{request.request} {request.custom}</td>
                    </tr>
                    <tr>
                        <th>Urgency:</th>
                        <td>{request.urgency}</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td><button className="addButton" onClick={()=>deleteHandler(request._id)} >Completed</button>
                        <Link to={`/requests/${request._id}/edit`} className="cancelButton">Edit </Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OneRequest