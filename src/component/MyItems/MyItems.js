import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { auth } from '../../firebase';

const MyItems = () => {

  const [myitems, setMyitems] = useState([])
  const [user, loading,] = useAuthState(auth);


  useEffect(() => {
    if (loading) {
      return <Loading />
    }
    const email = user?.email
    console.log(email);


    const url = `http://localhost:4000/myitems?email=${email}`

  

    axios.get(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
    .then(data =>{
      console.log(data.data)
      setMyitems(data.data)
    })

  }, [user,loading])



  const handleDelete = (id) => {
    const confirmDelete = window.confirm('wannna delete?')
    if (confirmDelete) {
      console.log(id);

      const url = `http://localhost:4000/products/${id}`
      fetch(url, {
        method: "DELETE",

      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount > 0) {
            console.log('deleted');
            const remaining = myitems.filter(product => product._id !== id)
            setMyitems(remaining)
          }
        })










    }
  }

  return (
    <div>
      <h1 className='text-2xl m-5'>My items : {myitems.length}</h1>
      <section>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>

                <th scope="col" class="px-6 py-3">
                  supplier
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>

              {
                myitems.map(myitem => {
                  return (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        {myitem.name}
                      </th>


                      <td class="px-6 py-4">
                        {myitem.quantity}
                      </td>
                      <td class="px-6 py-4 text-right">
                        <button onClick={() => handleDelete(myitem._id)} className="font-medium mx-2 text-red-600  hover:underline">delete</button>



                      </td>
                    </tr>

                  )
                })
              }

            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};

export default MyItems;