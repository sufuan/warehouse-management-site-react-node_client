


import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../firebase';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <div className='sticky top-0 bg-white px-12 py-2 flex justify-center md:justify-between'>
            <div className='hidden md:block' >
                <Link to='/' className='font-bold text-2xl text-gray-600'>sohoj book</Link>
            </div>
            <div className='flex gap-4 text-xl '>
                <NavLink to='/' className={({ isActive }) => isActive ? 'text-emerald-400' : 'black'}>Home</NavLink>

                <NavLink to='/services' className={({ isActive }) => isActive ? 'text-emerald-400' : 'black'}>inventory</NavLink>

               

                <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-emerald-400' : 'black'}>Blog</NavLink>


                {
                    user ? <button onClick={() => signOut(auth)}>SignOut</button> : <NavLink to="/login" className={({ isActive }) => isActive ? 'text-emerald-400' : 'black'}>login  </NavLink>
                }





            </div>
        </div>
    );
};

export default Header;