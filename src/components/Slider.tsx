"use client"
import React, { useEffect , useState } from 'react'
import Image from 'next/image'

const data = [
    {
      id: 1,
      title: "always fresh & always crispy & always hot",
      image: "/slide4.jpg",
    },
    {
      id: 2,
      title: "we deliver your order wherever you are in New Delhi",
      image: "/slide2.png",
    },
    {
      id: 3,
      title: "the best pizza to share with your friends",
      image: "/slide4.jpg",
    },
    {
      id: 4,
      title: "Children's highest rated pizza place",
      image: "/slide5.jpeg",
    },
  ];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(
          () =>
            setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
          4000
        );
        return () => clearInterval(interval);
      }, []);

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
        {/* TEXT CONTAINER*/}
        <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
            <h1 className=' text-5xl text-center uppercase p-4 md:p-10  md:text-6xl xl:text-7xl'>  {data[currentSlide].title} </h1>
            <button className='bg-red-500 text-white py-4 px-8'>  Order now  </button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className='h-1/2 relative w-full lg:h-full lg:w-1/2'>  
            <Image src={data[currentSlide].image} alt="" fill className='object-cover rounded-lg'/>
        </div>

    </div>
  )
}

export default Slider
