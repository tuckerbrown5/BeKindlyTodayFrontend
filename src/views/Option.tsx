import React from 'react';
import { Link } from 'react-router-dom';
import 'daisyui/dist/full.css';
import { motion } from "framer-motion";

const Option: React.FC = () => {

    return(
        <div className='bg-white'>
            <div className='max-w-md mx-auto p-4 font-comfortaa flex flex-col items-center'>
                {/* bekindly */}
                <motion.div 
                className='option-title text-5xl m-1 p-2'
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ type: "spring", delay:2, stiffness: 260, damping: 200 }} 
                >BeKindly
                </motion.div>

                {/* logo */}
                <motion.img 
                src="src/assets/bekindlylogo.svg" 
                alt="BeKindlyLogo"
                style={{width:'450px', height:'450px'}}
                className="option-container p-2"
                initial={{ y:600, scale: 0 }}
                animate={{ y:0, rotate: 360, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, velocity:50, damping: 100 }} 
                />
                
                {/* today */}
                <motion.div 
                className='option-title text-5xl m-1 p-2'
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ type: "spring", delay:2, stiffness: 260, damping: 200 }} 
                >Today
                </motion.div>

                {/* login button */}
                {/* <motion.Link 
                to="/home" 
                className="login-btn btn-block rounded-full text-xl bg-[#227C9D] text-white border-none transition-colors duration-300 hover:bg-[#1C6F87]" 
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ type: "spring", delay:2.8, stiffness: 260, damping: 200 }} >
                Login
                </motion.Link> */}
                <motion.div
                    className="option-btn btn-block m-10 rounded-full text-xl bg-[#227C9D] text-white border-none transition-colors duration-300 hover:bg-[#1C6F87]"
                    style={{width:"300px"}} 
                    initial={{ opacity:0 }}
                    animate={{ opacity:1 }}
                    transition={{ type: "spring", delay:2.8, stiffness: 260, damping: 200 }}>
                    <Link to="/home" className="btn btn-block rounded-full text-xl bg-[#227C9D] text-white border-none transition-colors duration-300 hover:bg-[#1C6F87]">
                        Login
                    </Link>
                </motion.div>
                    

            </div>

        </div>


        
    )
}

export default Option