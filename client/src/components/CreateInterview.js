import React,{useState,useEffect} from 'react';
import {users, createInt} from '../utilites/url';
import axios from 'axios';
import {Button} from '@material-ui/core';
import DateTimePicker from 'react-datetime-picker'

const CreateInterview = () => {
    const [loading, setLoading] = useState(true)
    const [emailsList, setEmails] = useState([])
    const [startTime, setStartTime] =useState(new Date())
    const [endTime, setEndTime] = useState(new Date())
    const [usersList, setUserList] = useState([])

    useEffect(async()=>{
        try{
            const AxiosInstance =  axios.create({baseURL: users})
            const getUsers = await AxiosInstance.get()
            setLoading(false)
            setUserList(getUsers.data)
        }
        catch(e){
            console.log('error')
        }
    },[])

    const check =(email) =>{
       return (emailsList.includes(email))
    }

    const addEmail =(email) =>{
        const dummylist=[...emailsList]
        dummylist.push(email)
        setEmails(dummylist)
    }

    const removeEmail =(email)=>{
        const dummylist = emailsList.filter((item)=> item!=email)
        setEmails(dummylist)
    }
    const submit =async()=>{
        try{
            if(startTime > endTime)
            return alert('Start time must be before end time')
            const UsersList = usersList.filter((item)=> emailsList.includes(item.email))
            let request = {
                user:UsersList,
                startTime: startTime.getTime().toString(),
                endTime: endTime.getTime().toString()
            }
            const response= await axios.post(createInt,request)
            const dummy =[]
            const start = new Date()
            const end = new Date()
            setEmails(dummy)
            setStartTime(start)
            setEndTime(end)
            alert('Interview was successfully created');
        }
        catch(error){
             alert(error.response.data.error)
        }
    }

    return loading?
        <div>
            Loading...Please wait. 
        </div> : (
            <div>
            <h1 style={{fontSize: "2 rem", color: "brown", position: "relative"}}> Create new Interview</h1>
            <h3 style={{color: "brown"}}>Add users</h3>
            {
                usersList.map((item, index)=>
                    <p key={index}>
                        <span style={{fontFamily: "verdana"}}>{item.email}</span> &nbsp;
                        {!check(item.email) && <Button variant="outlined" color="primary" onClick= {()=> {addEmail(item.email)}}>ADD</Button>}
                        {check(item.email) && <Button variant="outlined" color= "secondary" onClick= {()=> {removeEmail(item.email)}}>REMOVE</Button>}
                    </p>
                )
                
            } 
            <h3 style={{color : "brown"}}>Select Time</h3>
            <p style={{fontSize: "1rem" }}>Start Time:-</p>
            {
                <DateTimePicker 
                onChange ={setStartTime}
                value = {startTime}
                />
            } <br/>
            <p style={{fontSize: "1rem" }}>End Time:-</p>
            {
                <DateTimePicker 
                onChange ={setEndTime}
                value = {endTime}
                />
            } <br/><br/>
            <Button variant="contained" color="primary" onClick= {()=> submit()}>Create Interview</Button>

            </div>
        )
}

export default CreateInterview;