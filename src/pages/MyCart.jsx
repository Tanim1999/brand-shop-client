import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/provider/Authprovider";
import { Link, useLoaderData, } from "react-router-dom";
import Swal from "sweetalert2";




const MyCart = () => {

    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const products = useLoaderData();


    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://brand-shop-server-three-iota.vercel.app/cart/${user.uid}/${_id}`,
                    { method: 'DELETE' })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )

                            const fetchCartItems = async () => {
                                try {
                                    const response = await fetch(`https://brand-shop-server-three-iota.vercel.app/cart/${user.uid}`);
                                    if (response.ok) {
                                        const data = await response.json();
                                        setCartItems(data);
                                    } else {
                                        console.error('Failed to fetch cart items.');
                                    }
                                } catch (error) {
                                    console.error('Error fetching cart items:', error);
                                }
                            };
                            fetchCartItems();


                        }
                    })
            }
        })
    }


    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch(`https://brand-shop-server-three-iota.vercel.app/cart/${user.uid}`);
                if (response.ok) {
                    const data = await response.json();
                    setCartItems(data);
                } else {
                    console.error('Failed to fetch cart items.');
                }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        if (user) {
            fetchCartItems();
        }
    }, [cartItems, user]);




    useEffect(() => {
        if (cartItems.length >= 0 && products.length >= 0) {

            const filteredProduct = products.filter((product) =>
                cartItems.some((cartItem) => cartItem.productId === product._id)
            );
            setFilteredProducts(filteredProduct);
        }
        // const filteredProduct = products.filter((product)=> cartItems.productId==product._id);
        // setFilteredProducts(filteredProduct)
    }, [cartItems, products]);

    return (
        <div>

            <h2 className="text-3xl font-bold text-center my-10 text-[#800000]">My Cart</h2>
            {filteredProducts.length == 0 &&
                <>
                    <div className="alert alert-info max-w-fit mx-auto bg-[#800000] text-white text-2xl font-bold ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>There is no product in the cart</span>
                    </div>

                </>}
            <div className="grid gap-5  grid-cols-1 md:grid-cols-2 max-w-fit mx-auto  ">
                {filteredProducts.map((product) => (
                    <div key={product._id} className="card w-96 h-[30 rem] bg-[#FF5D5D] shadow-xl">
                        <figure className="px-10 pt-10 h-60 ">
                            <img src={product.image} alt="Shoes" className="rounded-xl h-60 w-80" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-[#800000] font-bold">{product.name}</h2>
                            <p>{product.shortDescription}</p>
                            <p><span className="text-xl font-bold text-[#800000]">Price:</span>{product.price}</p>
                            <div className=" card-actions">
                                <Link to={`/brandProducts/:brandName/product/${product._id}`}>

                                    <button className="btn btn-primary bg-[#800000]">Details</button>

                                </Link>

                                <button
                                    onClick={() => handleDelete(product._id)}
                                    className="btn btn-primary bg-[#800000]">delete</button>
                                


                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
export default MyCart;