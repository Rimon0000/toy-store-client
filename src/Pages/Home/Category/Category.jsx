import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategory from './SubCategory';

const Category = () => {
  const [allToy, setAllToy] = useState([])
  const [tabValue, setTabValue] = useState("marvel")
  
  useEffect(() =>{
    fetch(`https://toy-server-theta.vercel.app/allToys/${tabValue}`)
    .then(res => res.json())
    .then(data => setAllToy(data))
  },[tabValue])
  

    return (
        <div>
            <h2 className='font-bold text-4xl text-center m-5 p-5'>Our Categories</h2>
            <Tabs>
               <TabList className='text-center font-bold text-2xl mb-5'>
                 <Tab onClick={() => setTabValue("marvel")}>marvel</Tab>
                 <Tab onClick={() => setTabValue("avengers")}>avengers</Tab>
                 <Tab onClick={() => setTabValue("star wars")}>star wars</Tab>
               </TabList>
           
               <TabPanel>
                 <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-3 mx-10 gap-16'>
                 {
                  allToy.map(toy => <SubCategory 
                    key={toy._id}
                    toy={toy}
                    ></SubCategory>)
                 }
                 </div>
               </TabPanel>
               <TabPanel>
               <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-3 mx-10 gap-16'>
                 {
                  allToy.map(toy => <SubCategory 
                    key={toy._id}
                    toy={toy}
                    ></SubCategory>)
                 }
                 </div>
               </TabPanel>
               <TabPanel>
               <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-3 mx-10 gap-16'>
                 {
                  allToy.map(toy => <SubCategory 
                    key={toy._id}
                    toy={toy}
                    ></SubCategory>)
                 }
                 </div>
               </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;