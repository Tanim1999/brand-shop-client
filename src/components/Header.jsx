import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
import { AuthContext } from "./provider/Authprovider";
import {BiSolidUserCircle} from 'react-icons/bi'
import { toast } from "react-toastify";
import ThemeToggle from "./ThemeToggle";


const Header = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleSignout = ()=>{
        
            logOut()
            .then(
                
                toast('Succesfully signed out')
            )
            .catch()
    
    
        }
    
    const navLinks =
        <>
    
            <li> <NavLink to='/'> Home</NavLink></li>
            <li> <NavLink to='/register'> Register</NavLink></li>
            
            <li> <NavLink to='/addProducts'>Add-Products</NavLink></li>
            <li> <NavLink to='/myCart'>My-Carts</NavLink></li>

        </>
    return (
        <div className="navbar bg-[#800000] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {user && <span className='md:hidden overflow-hidden'>{user.name}</span>}
                        {navLinks}
                    </ul>
                </div>
                <a className="btn hidden lg:inline btn-ghost normal-case text-3xl font-sans font-bold">Gadget Hub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu-horizontal gap-5 font-bold text-xl  px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                    <div className="w-fit rounded-full">
                        {
                            user? <img className='w-5' src={user.photoURL}alt="" />
                            : 
                            <BiSolidUserCircle className='text-5xl text-center'></BiSolidUserCircle>
                        }
                   
                    </div>
                </label>
                {
                    user?
                     
                    <>
                    <span >{user.displayName}</span> 
                        <Link to='/login'>
                    <button onClick={handleSignout} className='btn bg-[#FF5D5D] text-white font-semibold'>Sign out</button>
                    </Link>
                    </>
                     
                    
                    :
                    <Link to='/login'>
                    <button className='btn bg-[#FF5D5D] text-white font-semibold'>Login</button>
                </Link>
                }
                <ThemeToggle></ThemeToggle>
            </div>
        
        </div>

    );
};

export default Header;