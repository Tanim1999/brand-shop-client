import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const navigate= useNavigate();

    const product = useLoaderData();
    const { image, name, brandName, type, price, shortDescription, rating,_id }= product
    
    const handleUpdateProducts = e => {
        e.preventDefault();
        const form = e.target
        const image = form.image.value
        const name = form.name.value
        const brandName = form.brandName.value
        const type = form.type.value
        const price = form.price.value
        const shortDescription = form.shortDescription.value
        const rating = form.rating.value
        const updatedProduct = { image, name, brandName, type, price, shortDescription, rating }
        console.log(updatedProduct)
        console.log(_id)

        fetch(`https://brand-shop-server-37q6aggdw-tanims-projects-44b97d8f.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data,data.insertedId)

                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                      })
                      navigate('/')
                      e.target.reset()

                }
            })
    }

    return (
        <div>
            <h3 className="text-3xl text-[#800000] font-bold text-center my-5">
               Update Product
            </h3>
            <form onSubmit={handleUpdateProducts} className="card-body max-w-[80%] mx-auto">
                <div className="lg:flex justify-center gap-5">
                    <div className="flex-1">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="text" defaultValue={image} name="image" required placeholder="image" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={name} name="name" required placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand name</span>
                            </label>
                            <input type="text" defaultValue={brandName} name="brandName" required placeholder="Brand name" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input type="text" defaultValue={type} name="type" required placeholder="type" className="input input-bordered" />

                        </div>

                    </div>
                    <div className="flex-1">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={price} name="price" required placeholder="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <input type="text" defaultValue={shortDescription} name="shortDescription" required placeholder="shortDescription" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" defaultValue={rating} name="rating" required placeholder="rating" className="input input-bordered" />

                        </div>

                    </div>

                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#800000] text-white text-lg font-bold">Update</button>
                </div>

            </form>

        </div>
    );
};

export default UpdateProduct;