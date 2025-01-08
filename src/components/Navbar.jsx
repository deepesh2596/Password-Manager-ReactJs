import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer flex justify-between px-10 items-center h-12 py-5">
                <div className='logo font-bold text-2xl'>
                    <span className='text-green-700'>&lt;</span>
                    Pass
                    <span className='text-green-700'>OP/&gt;</span>
                </div>
                {/* <ul>
                <li className='flex gap-4'>
                    <a className='hover:font-bold' href="/">Home</a>
                    <a className='hover:font-bold' href="/">About</a>
                    <a className='hover:font-bold' href="/">Contact Us</a>
                </li>
            </ul> */}
                <div className='flex gap-3'>
                    <span className='font-semibold py-6'>Follow us on</span>
                    <a href="https://github.com/deepesh2596" target="_blank"><button className='text-white bg-green-700 my-4 rounded-full flex justify-between items-center ring-white ring-1'>
                        <img className='invert w-10 p-0' src="/icons/github.svg" alt="Github logo"/>
                        <span className='font-bold px-1'>
                            Github
                        </span>
                    </button> </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar