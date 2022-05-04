import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import Loading from '../Loading/Loading';

const Inventories = () => {
  const [inventories, setInventories,isLoading] = useInventory()
  // const [isLoading, setLoading] = useState(true)




  const handleDelete = (id) => {
    const confirmDelete = window.confirm('are you sure ?')
    if (confirmDelete) {
      console.log(id);

      const url = `https://pure-harbor-66242.herokuapp.com/products/${id}`
      fetch(url, {
        method: "DELETE",

      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount > 0) {
            console.log('deleted');
            const remaining = inventories.filter(product => product._id !== id)
            setInventories(remaining)
          }
        })










    }
  }
  return ( isLoading ? (<Loading></Loading>) : 


    <div>
      <div className='text-center flex justify-end my-9'>
        <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to='/uploadPd' >Add Product</Link>
      </div>
      <section>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>

                <th scope="col" className="px-6 py-3">
                  supplier
                </th>
                <th scope="col" className="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>

              {
                inventories.map(inventory => {
                  return (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        {inventory.name}
                      </th>


                      <td className="px-6 py-4">
                        {inventory.supplier}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button onClick={() => handleDelete(inventory._id)} className="font-medium mx-2 text-red-600  hover:underline">delete</button>



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
































    // <div>
    //     <div className='w-90vh px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2'>
    //         <div className="text-center">
    //             <h1 className='text-4xl py-10 ' > our product</h1>
    //         </div>

    //         <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
    //             {
    //                 inventories.map(inventory => <Inventory
    //                     key={inventory.id}
    //                     inventory={inventory}
    //                 ></Inventory>)
    //             }
    //         </div>
    //     </div>
    // </div>
  );
};

export default Inventories;