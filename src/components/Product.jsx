/* eslint-disable react/prop-types */
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./provider/Authprovider";
import { useContext } from "react";
import Swal from "sweetalert2";


// eslint-disable-next-line react/prop-types
const Product = () => {

    const products = useLoaderData()
    const navigate = useNavigate()



    const { _id } = useParams();

    const product = products.filter(product => product._id === _id);

    const { user } = useContext(AuthContext);

    const handleAddToCart = async () => {
        const cartItem = {
            userId: user.uid, 
            productId: product[0]._id, 
            quantity: 1, 
        };

        try {
            const response = await fetch('https://brand-shop-server-three-iota.vercel.app/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartItem),
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Added to my cart successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
                  navigate('/myCart')

            } else {
                console.error('Failed to add item to cart.');
            }
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    // const handleAddToCart = async () => {
    //     // Check if the product with the same _id is already in the user's cart
    //     const isProductInCart = cartItems.some(item => item.productId === product[0]._id);

    //     // If the product is not in the cart, add it
    //     if (!isProductInCart) {
    //         const cartItem = {
    //                     userId: user.uid, 
    //                     productId: product[0]._id, 
    //                     quantity: 1, 
    //                 };
            
    //                 try {
    //                     const response = await fetch('https://brand-shop-server-three-iota.vercel.app/cart', {
    //                         method: 'POST',
    //                         headers: {
    //                             'Content-Type': 'application/json',
    //                         },
    //                         body: JSON.stringify(cartItem),
    //                     });
            
    //                     if (response.ok) {
    //                         Swal.fire({
    //                             title: 'Success!',
    //                             text: 'Added to my cart successfully',
    //                             icon: 'success',
    //                             confirmButtonText: 'Okay'
    //                           })
    //                           navigate('/myCart')
            
    //                     } else {
    //                         console.error('Failed to add item to cart.');
    //                     }
    //                 } catch (error) {
    //                     console.error('Error adding item to cart:', error);
    //                 }
    //     } else {
    //         // Product is already in the cart, handle accordingly (e.g., show a message)
    //         console.log('Product is already in the cart.');
    //         Swal.fire({
    //             title: 'Info',
    //             text: 'The item is already in the cart',
    //             icon: 'info',
    //             confirmButtonText: 'Okay'
    //           })
    //     }
    // };




    return (
        <div >
            <div className="card w-96 h-[30 rem] bg-[#FF5D5D] shadow-xl mx-auto my-10">
                <figure className="px-10 pt-10 h-60 ">
                    <img src={product[0].image} alt="Shoes" className="rounded-xl h-60 w-80" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#800000] font-bold">{product[0].name}</h2>
                    <p>{product[0].shortDescription}</p>
                    <p><span className="text-xl font-bold text-[#800000]">Price:</span>{product[0].price}</p>

                    <p><span className="text-xl font-bold text-[#800000]">Brand:</span>{product[0].brandName}</p>

                    <p><span className="text-xl font-bold text-[#800000]">Ratings:</span>{product[0].rating}</p>

                    <p><span className="text-xl font-bold text-[#800000]">Type:</span>{product[0].type}</p>


                    <div className="card-actions">
                        <button onClick={handleAddToCart} className="btn btn-primary bg-[#800000]">Add to cart</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Product;