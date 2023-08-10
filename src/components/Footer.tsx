import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:p-20 cl:p-40 text-red-500 items-center'>
      <Link href="/" className='font-bold text-xl'> MASSIMO  </Link>
      <p> ALL RIGHTS RESERVED  </p>
    </div>
  )
}

export default Footer
