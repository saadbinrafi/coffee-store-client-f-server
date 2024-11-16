import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();


        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;

        const photo = form.photo.value;

        const newCoffee = { name, chef, supplier, test, category, details, photo }
        console.log(newCoffee)

        //send a data to the backend server site
        fetch('http://localhost:5000/coffee', {
            method:"POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

        
    }



    return (
        <div className='max-w-full mx-auto p-5 h-screen bg-gradient-to-b from-white to-purple-200 '>
            <h2 className='text-2xl font-serif font-bold text-center my-12
            text-black'>ADD TO YOUR COFFEE ORDER</h2>
            <div className=''>

                <form onSubmit={handleAddCoffee}>
                    <div className='max-w-[60%] mx-auto border-2 shadow-lg bg-opacity-20 justify-center items-center text-black font-semibold mt-6'>

                        <div className='grid md:grid-cols-1 lg:grid-cols-4 gap-8 justify-center items-center p-4'>


                            <div className="md:col-span-1 lg:col-span-2">
                                <p>Coffee Name</p>
                                <input className=" hover:shadow-lg hover:shadow-green-300 text-white input input-bordered w-full" placeholder="Name" type='text' name='name' required />

                            </div>
                            <div className="md:col-span-1 lg:col-span-2">
                                <p>Chef</p>
                                <input className=" hover:shadow-lg hover:shadow-green-300 text-white input input-bordered w-full" placeholder="Available Quantity" type='text' name='chef' required />

                            </div>

                            <div className="md:col-span-1 lg:col-span-2">
                                <p>Supplier</p>
                                <input className=" hover:shadow-lg hover:shadow-green-300 text-white input input-bordered w-full" placeholder="Supplier " name='supplier' />

                            </div>

                            <div className="md:col-span-1 lg:col-span-2">
                                <p>Taste</p>
                                <input className="hover:shadow-lg hover:shadow-green-300 text-white input input-bordered w-full" placeholder="Test" name='test' />

                            </div>
                            <div className="md:col-span-1 lg:col-span-2">
                                <p>Category</p>
                                <input className="text-white hover:shadow-lg hover:shadow-green-300 input input-bordered w-full" placeholder="Category" name='category' />

                            </div>
                            <div className="md:col-span-1 lg:col-span-2">
                                <p>Details</p>
                                <input className="text-white hover:shadow-lg hover:shadow-green-300 input input-bordered w-full" placeholder="Details" name='details' />

                            </div>
                            <div className=" md:col-span-1 lg:col-span-4">
                                <p>Photo</p>
                                <input className="text-white hover:shadow-lg hover:shadow-green-300 input input-bordered w-full" placeholder="Enter Photo URL" name='photo' />

                                <input type="submit" value="Add Coffee" className='bg-orange-300 hover:text-white text-black font-bold w-full mt-5 btn border-t-pink-300' id="" />
                            </div>





                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;