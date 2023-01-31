import React from 'react'

function Header() {
  return (
    <header className='bg-headerColor text-white h-screen top-0 sticky w-1/12 flex flex-col text-center'>
        <div className='text-8xl h-1/4 flex flex-col justify-center content-center titulo'>
            FS
        </div>
        <nav className='h-1/2 flex flex-col justify-center content-center mt-24'>
            <ul className='text-xl text-center h-full'>
                <li className='h-14'><span className="bg-lineaNavbar h-px w-full block mb-3"></span><a className='hover:text-celeste transition ease delay-75' href="">Sobre mí</a></li>
                <li className='h-14'><span className="bg-lineaNavbar h-px w-full block mb-3"></span><a className='hover:text-celeste transition ease delay-75' href="">Proyectos</a></li>
                <li className='h-14'><span className="bg-lineaNavbar h-px w-full block mb-3"></span><a className='hover:text-celeste transition ease delay-75' href="">Contacto</a><span className="bg-lineaNavbar h-px w-full block mt-3"></span></li>
            </ul>
        </nav>
        <div className='flex flex-row justify-evenly'>
            <a target="_blank" href="https://github.com/FedericoSantoro"><i class="fa-brands fa-github text-3xl"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/federico-gabriel-santoro/"><i class="fa-brands fa-linkedin text-3xl"></i></a>
        </div>
    </header>
  )
}

export default Header