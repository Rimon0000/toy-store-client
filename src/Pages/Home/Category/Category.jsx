import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    return (
        <div>
            <h2 className='font-bold text-6xl text-center m-5 pb-5'>Our Categories</h2>
            <Tabs>
               <TabList className='text-center font-bold text-2xl'>
                 <Tab>marvel</Tab>
                 <Tab>avengers</Tab>
                 <Tab>star wars</Tab>
               </TabList>
           
               <TabPanel>
                 <h2>Any content 1</h2>
               </TabPanel>
               <TabPanel>
                 <h2>Any content 2</h2>
               </TabPanel>
               <TabPanel>
                 <h2>Any content 3</h2>
               </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;