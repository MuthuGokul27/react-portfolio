import React from 'react'
import { CONTACT } from '../Constants'
import {motion} from "framer-motion"

function ContactUs() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2
        whileInView={{opacity :1, y :0}}
        initial = {{opacity : 0, y : -100}}
        transition={{duration : 1}}
        className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
        <motion.div 
        whileInView={{opacity : 1, x : 0}}
        initial = {{opacity : 0, x : -100}}
        transition={{duration : 1.5}}
        className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href='mailto:muthugokul027@gmail.com' className='border-b'>{CONTACT.email}</a>
        </motion.div>
    </div>
  )
}

export default ContactUs