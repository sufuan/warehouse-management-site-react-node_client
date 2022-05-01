import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Auth/Loading/Loading';
import { auth } from '../../firebase';

const MyItems = () => {

    const [myitems, setMyitems] = useState([])
    const [user, loading,] = useAuthState(auth);

  

    // useEffect(() => {
           

       
    //     const myItem = async () => {
    //         // console.log(user?.email);

    //          const email =user?.email
    //          console.log(email);
    //         const { data } = await axios.get(`http://localhost:4000/products?email${email}`)
    //         setMyitems(data)
    //     }
    //     myItem()

    // }, [user])

  

   
    useEffect(() => {
        if(loading){
            return <Loading/>
        }
        const email =user?.email
        console.log(email);
        const url=`http://localhost:4000/myitems?email=${email}`
       
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setMyitems(data))

    }, [user])
  
    
    return (
        <div>
            this is my items {myitems.length}
        </div>
    );
};

export default MyItems;