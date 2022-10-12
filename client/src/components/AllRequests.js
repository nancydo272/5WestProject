import React, {useState, useEffect } from 'react'; 
import axios from 'axios'; 
import {Link, useNavigate} from 'react-router-dom'; 
import banner from '../images/5westbanner.jpg'; 
import westbanner from '../images/westbanner.jpg'; 
import west1 from '../images/west1.jpg'; 
import west2 from '../images/west2.jpg'; 
import west3 from '../images/west3.jpg'; 


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
    const api = axios.create({
        baseURL: ` https://zenquotes.io/ `
    })
    return (
        <div> 
            <div className="nav-bar">
                <a className="nav-bar h5" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nancy-do-9588a9158/">Contact the Creator</a> |                    
                <a className="nav-bar h5" target="_blank" rel="noopener noreferrer" href="https://github.com/nancydo272">About the Creator </a> |
                <a className="nav-bar h5" target="_blank" rel="noopener noreferrer" href="https://github.com/nancydo272/5WestProject">About This Project</a> 
            </div>
            <div>
                <img className="banner" src={banner} alt="blue hispital banner"/>
            </div>
            <div className="main-container">
                <h1>Welcome to 5West at TJUH Center City!</h1>
                <h4>Current Request from 5West Patients:</h4>
                <table className="table table-hover text-start mt-4">
                    <thead>
                        <tr>
                            <th>Room #</th>
                            <th>Request</th>
                            <th>Urgency</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                requestList.map((request)=>(
                                <tr>
                                    <td className="room-num">{request.room}</td>
                                    <td>{request.request} {request.custom}</td>
                                    <td>{request.urgency}</td>
                                    <td>
                                        <Link  className ="actions" to={`/requests/${request._id}`}>Details</Link>  |
                                        <button className=" actions btn btn-link" onClick={()=>deleteHandler(request._id)}>Completed</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Link className ="newRequest" to={`/requests/new`}>Add A New Request</Link>
            </div>
            <div className="bottom-container">
                <div className="row1">
                    <img className="westImages" src={westbanner} alt="teal scrubs"/>
                    <div className="message">
                        <p>TODAY'S QUOTES IS FROM ZENQUOTES</p>
                        <h2>"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart."</h2>
                        <a className="rowButton" target="_blank" rel="noopener noreferrer" href="https://zenquotes.io/">More from ZenQuotes</a>
                    </div>
                </div>
                <div className ="row2">
                    <div className="message">
                        <p>COVID GUIDELINES</p>
                        <h2>You are our family, we are here to protect your loved ones!</h2>
                        <a className="rowButton" target="_blank" rel="noopener noreferrer" href="https://www.cdc.gov/coronavirus/2019-ncov/your-health/isolation.html">More about CDC's guidelines</a>
                    </div>
                    <img className="westImages" src={west1} alt="animated hospital workers"/>
                </div>
                <div className="row3">
                    <img className="westImages" src={west2} alt="Thomas Jefferson Hospital"/>
                    <div className="message">
                        <p>THOMAS JEFFERSON UNIVERSITY HOSPITAL</p>
                        <h2>Your neighborhood hospital! Just minutes away from Patco, Blue and Orange Line.</h2>
                        <a className="rowButton" target="_blank" rel="noopener noreferrer" href="https://www.jeffersonhealth.org/home">Vist TJUH Official Website</a>
                    </div>
                </div>
                <div className="row4">
                    <div className="message">
                        <p>PHILADELPHIA, PA</p>
                        <h2>The city of brotherly love! We are known for our iconic food scene and arts districts. Explore NOW!</h2>
                        <a className="rowButton" target="_blank" rel="noopener noreferrer" href="https://www.visitphilly.com/"> Explore Philly!</a>
                    </div>
                    <img className="westImages" src={west3} alt="Philadelphia City"/>
                </div>
            </div>
        </div>
    )
}

export default AllRequests