import React from "react";

export default function Header() {
    return (
        <header className="container mx-auto px-4 h-24 flex items-center justify-between">
            <div className="font-black text-2xl text-slate-600">Logo</div>
            <nav>
                <ul className="flex gap-5 max-sm:hidden">
                    <li className="text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Como reservar</li>
                    <li className="text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Sobre nós</li>
                    <li className="text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Informações</li>
                    <li className="text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">Contato</li>
                </ul>
            </nav>
        </header>
    )
}