import React from "react";

import { IoMdSearch } from "react-icons/io";

import Heroimg from './img/heroimg.jpg'

export default function Main() {
    return (
        <main>
            <div className="IMAGEM relative flex items-center justify-center">
                {/* <img className="bg-cover" src={Heroimg} alt="imagem principal" /> */}
                <div className="absolute text-center">
                    <div>
                        <h1 className="text-3xl text-gray-100 mb-4">Onde você quer ir?</h1>
                        <p className="text-green-100">Escolha o estado e cidade para achar os melhores resorts</p>
                    </div>
                    <form className="space-x-4 mt-7 flex items-center justify-center" action="">
                        <select className="bg-grey-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
                            <option value="">Escolha o estado</option>
                        </select>

                        <select className="bg-grey-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
                            <option value="">Escolha a cidade</option>
                        </select>

                        <button className="font-medium bg-yellow-500 px-3 py-2 rounded text-yellow-900 flex items-center justify-center gap-1"><IoMdSearch />Pesquisar resorts</button>
                    </form>
                </div>
            </div>
        </main>
    )
}