import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json')
.then(res => res.json())

const Categories = () => {
    const categories = use(categoryPromise)
    return (
        <div>
            <p className='text-accent font-bold'>All Categories ({categories.length})</p>
            <div className='grid grid-cols-1 mt-3'>
                {
                categories.map(category => 
                <NavLink
                    key={category.id}
                    className='text-accent py-2 btn bg-base-100 border-0 hover:bg-base-200 justify-start text-left'
                    to={`/category/${category.id}`}
                >{category.name}</NavLink>)
            }
            </div>
            
        </div>
    );
};

export default Categories;