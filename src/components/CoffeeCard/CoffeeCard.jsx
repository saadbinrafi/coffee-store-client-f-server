import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {

    const { _id, name, chef, supplier, test, category, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            })
                        }
                    })
            }
        });
    }



    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl p-5 my-5">
                <figure>
                    <img
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className=" flex justify-around w-full space-y-5">
                    <div>
                        <h2 className="card-title">Name : {name}</h2>
                        <p> Quantity : {chef}</p>
                        <p> Supplier : {supplier}</p>
                        <p> Test : {test}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-5">
                            <button className="btn join-item">Vew</button>
                            
                            <Link to={`updateCoffee/${_id}`}>
                                <button className="btn join-item">Edit</button>
                            </Link>
                           
                            <button
                                onClick={() => handleDelete(_id)}
                                className="btn join-item bg-orange-200 text-black font-bold hover:text-white"> x </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;