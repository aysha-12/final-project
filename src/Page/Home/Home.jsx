import React from 'react';

import Testimonial from '../../Component/Tastimonial';
import Hero from '../../Component/Hero'
import Card from '../../Component/Card'
import Latest from '../../Component/Latest'
import ADD from '../../Component/ADD'
import Luxuary from '../../Component/Luxuary';

const Home = () => {
    return (
        <div  className=' px-6 md:px-16 lg:px-20 ' >
         <div>
              <Hero />
         </div>
            
           
           <div className=' px-6 md:px-16 lg:px-20'>
             <Card></Card>
            <Latest></Latest>
            <Luxuary></Luxuary>
            <Testimonial/>
            <ADD></ADD>
           </div>
            

        </div>
    );
};

export default Home;