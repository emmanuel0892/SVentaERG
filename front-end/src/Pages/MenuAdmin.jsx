import React from 'react'
import logo from '../Resources/img/logo.png'
import VentaNueva from './VentaNueva'

export default function MenuAdmin() {
  return (
    <>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200" id='nav-global'>
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                <button
                    data-drawer-target="logo-sidebar"
                    data-drawer-toggle="logo-sidebar"
                    aria-controls="logo-sidebar"
                    type="button"
                    className="inline-flex items-center p-2 text-sm text-black rounded-lg sm:hidden hover:bg-ocean focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    <span className="sr-only">Open sidebar</span>
                    <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                    </svg>
                </button>
                <a href="/" className="flex ml-16 md:mr-24">
                    <img
                    src={ logo }
                    className="h-14 content-center bg-transparent"
                    />
                </a>
                </div>
                <div className="flex items-center">
                <div className="flex items-center ml-3">
                    <div>
                    <button
                        type="button"
                        className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown-user"
                    >
                        <a className='mr-2 mt-1 font-bold' id='nomUserMenu'>Administrador</a>
                        <span className="sr-only">Open user menu</span>
                        <img
                        className="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="user photo"
                        />
                    </button>
                    </div>
                    <div
                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown-user"
                    >
                    <div className="px-4 py-3" role="none">
                        <p
                        className="text-sm text-gray-900 dark:text-white"
                        role="none"
                        >
                        Emmanuel Rubio Gaete
                        </p>
                        <p
                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                        role="none"
                        >
                        admin@lanasypuntos.cl
                        </p>
                    </div>
                    <ul className="py-1" role="none">
                        <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-white hover:font-bold dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                        >
                            Inicio
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-white hover:font-bold dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                        >
                            Configuración
                        </a>
                        </li>
                    
                        <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-white hover:font-bold dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                        >
                            Cerrar Sesión
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </nav>
        <aside
            id="logo-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800" id='menuSidebar'>
            <ul className="space-y-2 font-medium">
                <li>
                <a
                    href="#"
                    className="flex items-center p-2 text-gray-500 bg-pink-300 rounded-lg dark:text-white hover:text-black hover:font-bold hover:bg-blue-400 dark:hover:bg-gray-700 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 flex-shrink-0 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>


                    <span className="ml-3">Inicio</span>
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="flex items-center p-2 text-gray-500 bg-pink-300 rounded-lg dark:text-white hover:text-black hover:font-bold hover:bg-blue-400 dark:hover:bg-gray-700 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 flex-shrink-0 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true">
                    <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                    <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
                    </svg>

                    <span className="flex-1 ml-3 whitespace-nowrap">Venta</span>
                    
                </a>
                </li>
                
                <li>
                <a
                    href="#"
                    className="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:text-black hover:font-bold hover:bg-blue-400 dark:hover:bg-gray-700 group"
                >
                    <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                    >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Gestión Usuarios</span>
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:text-black hover:font-bold hover:bg-blue-400 dark:hover:bg-gray-700 group"
                >
                    <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                    >
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Gestión Productos</span>
                </a>
                </li>
                
                
            </ul>
            </div>
        </aside>

        <div className="sm:ml-64" id='divPrincipal'>
            
        <div className='pt-5 BodyMenu'>

        { /* INGRESAR LOS COMPONENTES AQUÍ */ }
        


        </div>




            <footer className="rounded-lg shadow m-4 dark:bg-gray-800 text-black font-bold" id='footer-home'>
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        SVentas-ERG
                    </a>
                    . Todos lo derechos reservados.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm text-black font-bold dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">
                        Acerca de
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                        Políticas y Privacidad
                        </a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">
                        Licencia
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">
                        Contacto
                        </a>
                    </li>
                    </ul>
                </div>
            </footer>
        </div>

    </>
  )
}
