import '../App.css';
// import './index.css';
import { FaArrowRight } from "react-icons/fa"
// eslint-disable-next-line
import {Header} from '../components/Header'
import {Herosection} from '../components/Herosection'
import {Heading} from '../components/heading'
import {Subheading} from '../components/Subheadings'
import {Card} from '../components/card'
import {Footer} from '../components/footer'
import serviceIconOne from "../components/assests/images/img two/Vector.png";
import serviceIconTwo from "../components/assests/images/img two/software.png";
import serviceIconThree from "../components/assests/images/img two/consult.png";
// eslint-disable-next-line
import {Routes, Route} from 'react-router-dom'
import React, { useState } from "react";
import {Allproject} from '../components/allprojects'
import {Mobilesolution} from '../components/mobilesolution'
import {Webprojects} from '../components/websolution'
import {Design} from '../components/designproject'


export const Programs = () => {

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (

    <>

      {/*hero section start */}

       <section>
    <div className='lg:px-16 px-6 h-[34em] bg-bg-about bg-no-repeat bg-origin-border bg-center bg-cover flex justify-center text-left flex-col'>
    <div className="text-white w-[95%] md:w-full">
      
      <h3 className="text-[2em] font-bold lg:text-[3em] xl:text-[3.4em]">Some Clients We've Worked With</h3>
      <p className="text-gray-100 mt-4 lg:text-[1.2em] sm:w-[28rem] lg:w-[30rem]">We provide the prefect blend of people and technology. Our approach to problem-solving & strategic planing will help you deliver exceptional services</p>
      <button className="text-left border-2 border-[#07a6c6] mt-6 px-6  cursor-pointer font-bold py-2 rounded-full"> Contact Us </button>

    </div>
    </div>
    </section>

<section>

    <div className="md:flex md:flex-wrap md:gap-[2rem] px-6 lg:px-16 my-16">
        <Card>
          <p>lorem</p>
        </Card>

        <Card>
          <p>lorem</p>
        </Card>
        
         <Card>
          <p>lorem</p>
        </Card>
        
          <Card>
          <p>lorem</p>
        </Card>
      
       <Card>
          <p>lorem</p>
        </Card>

         <Card>
          <p>lorem</p>
        </Card>

        </div>
    </section>   

      <section id="whyus_section" className="lg:px-16 px-6 py-16 bg-bg-three bg-cover bg-repeat text-white">

    <div className="md:flex md:justify-between md:gap-11">
    <img src={require("../components/assests/images/img.png") } className="mb-5 min-w-full md:min-w-[53%]" alt=""/>
    <div>
    <h3 className="font-extrabold text-2xl mb-4 mt-10 md:text-4xl">Why choose us?</h3>
    <p className="text-gray-200 lg:text-[1.2em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
    <p className="text-gray-200 lg:text-[1.2em] mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
   

    <div className="md:flex mt-7 md:mt-12 md:items-center  md:justify-between justify-center md:gap-[.9em] lg:gap-[2em]">

      <div className="md:mb-0 flex justify-center items-center flex-col mb-8 ">
     <span className="py-5 px-3 border rounded-[100%] border-heading"> <img src={require("../components/assests/images/img two/shake.png") } className="w-[4rem]" alt=""/></span>
    
      <h4 className="md:mt-[.4em] lg:text-[1.2em]">lorem isupm</h4>
      </div>

      <div className="md:mb-0 mb-8 flex justify-center items-center flex-col">
      <span className="py-4 px-6 border rounded-[100%] border-heading"><img src={require("../components/assests/images/img two/creative.png") }  className="w-[2rem]" alt=""/></span>
    
      <h4 className="lg:text-[1.2em]">lorem isupm</h4>
      </div>

      <div className="flex justify-center items-center flex-col md:my-0">
        <span className="py-4 px-4 border rounded-[100%] border-heading"><img src={require("../components/assests/images/img two/award.png") } className="w-[3rem]"  alt=""/></span>
      <h4 className="lg:text-[1.2em]">lorem isupm</h4>
      </div>

     </div>
    </div>
    </div>
    <button className=" mt-16 flex justify-center text-primary mr-[auto] ml-[auto] items-center"><span className="border-2 border-primary p-3 rounded-full"><  FaArrowRight/></span> <span className="ml-3 lg:text-[1.2em]">Get in touch</span></button>

  </section>
 



    </>
  );
};