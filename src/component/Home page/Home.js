import React from 'react';
import bookwh from '../../assests/book-house.jpg'



const Home = () => {
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


           

           

        </div>
    );
};

export default Home;