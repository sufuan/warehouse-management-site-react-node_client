import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

const MyItems = () => {

    const [myitems, setMyitems] = useState([])
    const [user] = useAuthState(auth);

    useEffect(() => {

        const myItem = async () => {
            // console.log(user?.email);

             const email =user?.email
             console.log(email);
            const { data } = await axios.get(`http://localhost:4000/products?email${email}`)
            setMyitems(data)
        }
        myItem()

    }, [user])
     console.log(user?.email);
    return (
        <div>
            this is my items {myitems.length}
        </div>
    );
};

export default MyItems;