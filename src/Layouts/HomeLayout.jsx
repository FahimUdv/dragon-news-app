import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-5'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-5'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12'>
                <section className="col-span-3 sticky top-2 h-fit">
                    <LeftAside></LeftAside>
                </section>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <section className="col-span-3 sticky top-2 h-fit">
                    <RightAside></RightAside>
                </section>
            </main>
        </div>
    );
};

export default HomeLayout;