import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogins = () => {
    return (
        <div>
            <h1 className='text-accent font-bold'>Login With</h1>
            <div>
                <button className='btn w-full btn-outline btn-secondary my-3'><FcGoogle size={24}/> Login with Google</button>
                <button className='btn w-full btn-outline btn-primary'><FaGithub size={24}/> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogins;