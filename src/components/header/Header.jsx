import React from "react";

import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


export default function Header() {

    const abrirMenu = document.getElementById("abrir")
    const fecharMenu = document.getElementById("fechar")
    const menu = document.querySelector("ul")

    const abrir = ()=>{
        abrirMenu.style.display = "none"
        fecharMenu.style.display = "block"
        menu.classList.remove("max-sm:hidden")
    }

    const fechar = ()=>{
        abrirMenu.style.display = "block"
        fecharMenu.style.display = "none"
        menu.classList.add("max-sm:hidden")
    }

    return (
        <header className="container mx-auto px-4 h-24 flex items-center justify-between relative">
            <div className="font-black text-2xl text-slate-600">Logo</div>
            <nav>
                <ul id="menu" className="flex gap-5 max-sm:hidden max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:absolute max-sm:top-24 max-sm:right-0 max-sm:bg-gray-50 max-sm:z-10 max-sm:p-4 max-sm:gap-10 max-sm:w-2/5">
                    <li className="text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Como reservar</li>
                    <li className="text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Sobre nós</li>
                    <li className="text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Informações</li>
                    <li className="text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Contato</li>
                </ul>

                <buttom id="abrir" onClick={()=>abrir()} className="text-2xl text-gray-500 sm:hidden cursor-pointer z-10">
                    <RiMenu3Line />
                </buttom>

                <buttom id="fechar" onClick={()=>fechar()} className="text-3xl text-gray-500 sm:hidden max-sm:hidden cursor-pointer z-10">
                    <IoMdClose />
                </buttom>
            </nav>
        </header>
    )
}