import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bookwh from '../../assests/book-house.jpg'
import useInventory from '../../hooks/useInventory';
import HomeProducts from '../HomeProducts/HomeProducts';



const Home = () => {
    const [inventories, setInventories] = useInventory()
    console.log(inventories)

    const navigate = useNavigate()
    const navigateTODetails = id => {
        // navigate(`/inventory/${_id}`)
    }

    return (
        <div>

            {/* hero section  */}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img src={bookwh} alt="heroImg" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Deliver books on time.
                        </h1>
                        <p className="mb-8 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem, esse numquam maiores e</p>

                    </div>
                </div>
            </section>

            {/* hero section end 
            service section start */}


            <section>
                <h1 className='text-3xl text-center'>sample product </h1>

                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                    {

                        inventories?.slice(0, 6).map(inventory => <HomeProducts
                            inventory={inventory}
                            key={inventories._id}
                        ></HomeProducts>)
                    }
                </div>
            </section>
                

           <div className='text-center my-9'>
           <Link class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to='inventories' > Manage Inventory</Link>
           </div>
       

        </div>
    );
};

export default Home;