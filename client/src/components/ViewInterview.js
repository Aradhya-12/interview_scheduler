import React,{useState, useEffect} from 'react';
import {interviews} from '../utilites/url';
import axios from 'axios';
import Interview from './interview';


const ViewInterview = () => {
    const [loading ,setLoading] = useState(true)
    const [items, loadItems] = useState([])

    useEffect(async()=>{
        try{
            const AxiosInstance= axios.create({baseURL: interviews});
            const interviewsList= await AxiosInstance.get();
            setLoading(false)
            loadItems(interviewsList.data)
        }
        catch(e)
        {
            console.log('error',e)
        }
    },[])

    return (
        loading? 
        <div>
            Loading...Please wait 
        </div>:(
            <div>
                {items.map( (item,index) =><Interview key = {index} item = {item} />)}
            </div>
        
        )
    )
}

export default ViewInterview;