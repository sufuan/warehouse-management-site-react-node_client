import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import HomeProducts from '../HomeProducts/HomeProducts';



const Home = () => {
    const [inventories, setInventories ,isLoading] = useInventory()
    console.log(inventories)

    const navigate = useNavigate()
    const navigateTODetails = id => {

    }

    return (
        <div>







            <div className="relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                className="h-full w-full object-cover"
                                src="https://images.unsplash.com/photo-1527908290749-8c9518e0db09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=875&q=80"
                                alt=""
                            />

                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                <span className=" text-black">Maximize your warehouse <br /> efficiency</span>
                            </h1>
                            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                                Modern online warehouse
                            </p>
                            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <section >


                <div className="bg-white">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl text-center py-5 font-bold text-gray-700">Check out what's hittin' our shelves!</h2>

                        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">


                            {

                                inventories?.slice(0, 6).map(inventory => <HomeProducts
                                    inventory={inventory}
                                    isLoading={isLoading}
                                    key={inventories._id}
                                ></HomeProducts>)
                            }

                        </div>
                        <div className='text-center my-9'>
                            <Link class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" to='/inventories' > Manage Inventories</Link>
                        </div>
                    </div>

                </div>




            </section>


            {/* hero section  */}
            <section className="text-gray-600 body-font">
                <div className="bg-gray-50 pt-12 sm:pt-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                Advanced features made simple
                            </h2>
                            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                                Use cutting-edge automation and advanced routes to manage any warehouse.</p>
                        </div>
                    </div>
                    <div className="mt-10 pb-12 bg-white sm:pb-16">
                        <div className="relative">
                            <div className="absolute inset-0 h-1/2 bg-gray-50" />
                            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="max-w-4xl mx-auto">
                                    <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                                        <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Drop-shipping</dt>
                                            <dd className="order-1 text-5xl font-extrabold text-indigo-600">100%</dd>
                                        </div>
                                        <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Delivery</dt>
                                            <dd className="order-1 text-5xl font-extrabold text-indigo-600">24/7</dd>
                                        </div>
                                        <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Multi-warehouse</dt>
                                            <dd className="order-1 text-5xl font-extrabold text-indigo-600">100k</dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="relative bg-gray-50 pt-16 overflow-hidden sm:pt-24 lg:pt-32">
                    <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
                        <div>
                            <p className="mt-2 text-3xl font-extrabold text-gray-700 tracking-tight sm:text-4xl">
                                Experience total traceability
                            </p>
                            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                                Track every stock move with sohojBook's unique double-entry inventory system.
                            </p>
                        </div>
                        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
                            <img
                                className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                                src="https://odoocdn.com/openerp_website/static/src/img/2018/inventory/inventory_screenshot_03.gif"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* hero section end 
            service section start */}







        </div>
    );
};

export default Home;