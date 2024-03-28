import React from "react";

import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import { Link } from "react-router-dom";


export default function Header() {

    const abrir = ()=>{
        const AbrirMenu = document.querySelector("#abrir")
        const FecharMenu = document.querySelector("#fechar")
        const Menu = document.querySelector("#menu")
        AbrirMenu.classList.add("max-sm:hidden")
        FecharMenu.classList.remove("max-sm:hidden")
        Menu.classList.remove("max-sm:hidden")
    }

    const fechar = ()=>{
        const AbrirMenu = document.querySelector("#abrir")
        const FecharMenu = document.querySelector("#fechar")
        const Menu = document.querySelector("#menu")
        AbrirMenu.classList.remove("max-sm:hidden")
        FecharMenu.classList.add("max-sm:hidden")
        Menu.classList.add("max-sm:hidden")
    }


    return (
        <header className="container mx-auto px-4 h-24 flex items-center justify-between relative">
            <Link to={"/pagina-de-hoteis/"}>
                <div className="font-black text-2xl text-slate-600">Logo</div>
            </Link>
            <nav>
                <ul id="menu" className="flex gap-5 max-sm:hidden max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:absolute max-sm:top-24 max-sm:right-0 max-sm:bg-gray-50 max-sm:z-10 max-sm:p-4 max-sm:gap-10 max-sm:w-2/5">

                    <Link to={"/comoreservar"}>
                        <li className="text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer" onClick={()=>fechar()}>Como reservar</li>
                    </Link>

                    <Link to={"/sobrenos"}>
                        <li className="text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer" onClick={()=>fechar()}>Sobre nós</li>
                    </Link>

                    <Link to={"/informacoes"}>
                        <li className="text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer" onClick={()=>fechar()}>Informações</li>
                    </Link>

                    <Link to={"/contatos"}>
                        <li className="text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer" onClick={()=>fechar()}>Contato</li>
                    </Link>

                </ul>

                <button id="abrir" className="text-2xl text-gray-500 sm:hidden cursor-pointer" onClick={()=>abrir()}>
                    <RiMenu3Line />
                </button>

                <button id="fechar" className="text-3xl text-gray-500 sm:hidden max-sm:hidden cursor-pointer" onClick={()=>fechar()}>
                    <IoMdClose />
                </button>
            </nav>
        </header>
    )
}