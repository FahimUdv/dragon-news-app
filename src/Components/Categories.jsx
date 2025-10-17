import React, { use } from 'react';

const categoryPromise = fetch('/categories.json')
.then(res => res.json())

const Categories = () => {
    const categories = use(categoryPromise)
    return (
        <div>
            <p className='text-accent font-bold'>All Categories ({categories.length})</p>
        </div>
    );
};

export default Categories;