import React from 'react' 
import {NavLink} from "react-router-dom"
import {SocialIcon} from 'react-social-icons'
function Navbar() {
    return (
        <header className='bg-gray-800'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink to='/' exact 
                    activeClassName="text-blue-200 bg-white-600  "
                    className="inline-flex text-3xl items-center py-6 px-3 mr-4 text-red-100 hover:text-red-800 font-bold cursive tracking-widest">
                        Kevin
                    </NavLink>
                    <NavLink to='/about' 
                    activeClassName="text-blue-200 bg-white-600  "
                    className='inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-red-800 font-bold cursive '>
                        About
                    </NavLink>
                    <NavLink to='/post'
                    activeClassName="text-blue-200 bg-white-600  "
                     className='inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-red-800 font-bold cursive '>
                         Blog Post
                    </NavLink>
                    <NavLink to='/projects' 
                    activeClassName="text-blue-200 bg-white-600  "
                    className='inline-flex items-center py-3 px-3 my-6 rounded text-red-100 hover:text-red-800 font-bold cursive '>
                        Projects
                    </NavLink>
                </nav>
                 <div className="inline-flex py-3 px-3 my-6  ">
                        <SocialIcon url='https://twitter.com/nkusikevin4' className="mr-4" target="_black" fgcolor="#fff" style={{height:35, width:35}}/>
                        <SocialIcon url='https://github.com/nkusikevin' className="mr-4" target="_black" fgcolor="#fff" style={{height:34, width:35}}/>
                        <SocialIcon url='youtube.com/channel/UCKNsy73WkGHBUI6xHEjF5hA' className="mr-4" target="_black" fgcolor="#fff" style={{height:34, width:35}}/>
                        <SocialIcon url='https://www.linkedin.com/in/nkusi-kevin-54669b167/' className="mr-4" target="_black" fgcolor="#fff" style={{height:34, width:35}}/>
                    </div>
            </div>
        </header>
    )
}

export default Navbar
