import axios from 'axios';
import React from 'react';

const UploadProduct = () => {


    const handleSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const supplier = e.target.supplier.value;
        const description = e.target.description.value;
        const quantity = e.target.quantity.value;
        const img = e.target.img.value;



      


        axios.post("http://localhost:4000/uploadpd", {
            name,supplier,description,quantity,img
        })
            .then((response) => {
                console.log(response);
            });

        console.log(name, supplier,description,quantity,img);
        e.target.reset()
        

    }
    return (
        <div>
            <form className='text-center' onSubmit={handleSubmit}>
                <input className='my-4' type="text" name="name" id="name" placeholder='name' /> <br />
                <input className='my-4' type="text" name="supplier" id="supplier" placeholder='supplier' /> <br />
                <input className='my-4' type="text" name="description" id="description" placeholder='description' /> <br />
                <input className='my-4' type="number" name="quantity" id="quantity" placeholder='quantity' /> <br />
                <input className='my-4' type="text" name="img" id="img" placeholder='img' /> <br />
                <input type="submit" value="uoload" />
            </form>
        </div>
    );
};

export default UploadProduct;