import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./provider/Authprovider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { updateProfile } from "firebase/auth";

const Register = () => {
    const navigate= useNavigate();
   const [registerError,setRegisterError]=useState()
   const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email= form.get('email')
        const password= form.get ('password')
        const displayName= form.get('displayName')
        const photoURL= form.get('photoURL')
        console.log(email,password,displayName,photoURL)

        if(password.length<6){
            setRegisterError('Your password should have at least 6 characters');
            toast(registerError);
            return   
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('Your password should have at least 1 Upper case characters');
            toast(registerError);
            return   
            
        }
        else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            setRegisterError('Your password should have at least 1 special characters')
            toast(registerError)
            return 
        }

        
       
        
        createUser(email, password)
        .then( result => {
            const user = result.user;

            
             updateProfile(user, {
                displayName: displayName,
                photoURL: photoURL
            });

            toast('Successfully registered');
             e.target.reset();
            navigate('/');
        })
        .catch(error=>{
            
            setRegisterError(error.message)
            toast(error.message)
           
        })

    }


    return (
        <div>
            <div className="max-w-[60%] mx-auto mb-10">
                <ToastContainer></ToastContainer>



                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="displayName" required placeholder="Your name" className="input input-bordered" />
                    </div>
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">photoURL</span>
                        </label>
                        <input type="text" name="photoURL" required placeholder="photoURL" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#800000] text-white text-lg font-bold">Register</button>
                    </div>
                </form>

                <p className="text-center">Already have an account? <Link to='/login' className="text-[#800000]">Login</Link></p>


            </div>

        </div>
    );
};

export default Register;