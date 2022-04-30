import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import Inventory from './Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useInventory()
    return (





        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>

              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>

            {
              inventories.map(inventory => {
                return (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      {inventory.name}
                    </th>


                    <td class="px-6 py-4">
                      {inventory.supplier}
                    </td>
                    <td class="px-6 py-4 text-right">
                    <Link to={`/updatepd/${inventory._id}`} className="font-medium text-red-600  hover:underline">delete</Link>
                      
                  
                     
                    </td>
                  </tr>

                )
              })
            }

          </tbody>
        </table>
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