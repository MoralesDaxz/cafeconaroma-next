import FormSignUp from '@/components/FormSignUp'
import Link from 'next/link'
import React from 'react'
import { IoArrowBack } from "react-icons/io5";
const Register = () => {
  return (
    <section className='pt-20 md:pt-28 pb-2 min-h-screen w-full bg-white flex flex-col items-center gap-8 px-2'>
      <h2 className='title text-black'>Creemos una cuenta</h2>
      <Link
        href={"/login"}
        className="text-black absolute top-14 sm:top-20 left-2 flex items-center gap-2"
      >
        <IoArrowBack /> Volver
      </Link>
        <FormSignUp/>
    </section>
  )
}

export default Register