import React from 'react';
import Navber from '../../Component/Navber';
import Footer from '../../Component/Footer';
import { Outlet } from 'react-router-dom';

const Share = () => {
    return (
        <div>
            <Navber></Navber>
              <Outlet></Outlet>
            <Footer/>

            
        </div>
    );
};

export default Share;