import Swal from 'sweetalert2'

const AddProducts = () => {

    const handleAddProducts = e => {
        e.preventDefault();
        const form = e.target
        const image = form.image.value
        const name = form.name.value
        const brandName = form.brandName.value
        const type = form.type.value
        const price = form.price.value
        const shortDescription = form.shortDescription.value
        const rating = form.rating.value
        const newProduct = { image, name, brandName, type, price, shortDescription, rating }
        console.log(newProduct)

        fetch('https://brand-shop-server-three-iota.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data,data.insertedId)

                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                      })
                      e.target.reset()

                }
            })
    }

    return (
        <div>
            <h3 className="text-3xl text-[#800000] font-bold text-center my-5">
                Add Products
            </h3>
            <form onSubmit={handleAddProducts} className="card-body max-w-[80%] mx-auto">
                <div className="lg:flex justify-center gap-5">
                    <div className="flex-1">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="text" name="image" required placeholder="image" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" required placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand name</span>
                            </label>
                            <input type="text" name="brandName" required placeholder="Brand name" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input type="text" name="type" required placeholder="type" className="input input-bordered" />

                        </div>

                    </div>
                    <div className="flex-1">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" required placeholder="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <input type="text" name="shortDescription" required placeholder="shortDescription" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name="rating" required placeholder="rating" className="input input-bordered" />

                        </div>

                    </div>

                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#800000] text-white text-lg font-bold">Add</button>
                </div>

            </form>

        </div>
    );
};

export default AddProducts;