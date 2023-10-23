import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "./provider/Authprovider";
import { signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";


const Login = () => {
    const [loginError, setLoginError] = useState()
    const navigate = useNavigate()

    const { signIn, auth, provider } = useContext(AuthContext)


    const handleLogin = e => {

        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        signIn(email, password)

            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'Success!',
                    text: 'Logged in successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
                e.target.reset()

                navigate('/')

            })
            .catch( error => {
                console.error(error)
                setLoginError(error.message)
                {
                    toast(loginError)
                }
            })
    }
    const handleGoogleSignin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                console.log(user)
                toast('Log in successfully');
                navigate('/')


            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <div className="max-w-[60%] mx-auto">
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" required placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" required placeholder="password" className="input input-bordered" />

                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#800000] text-white text-lg font-bold">Login</button>
                </div>
            </form>
            <p className="text-center"> Do not have an account? <Link to='/register' className="text-[#800000]">Register</Link></p>

            <p className="text-center my-5">Sign in with <button onClick={handleGoogleSignin} className="btn bg-[#800000] text-white font-bold">Google</button></p>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default Login;