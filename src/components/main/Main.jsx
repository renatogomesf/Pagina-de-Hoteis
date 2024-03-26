import React from "react";

import { IoMdSearch } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

import Heroimg from './img/heroimg.jpg'
import Resort from './img/resort.jpg'

export default function Main() {
    return (
        <main>
            <section className="IMAGEM relative flex items-center justify-center">
                {/* <img className="bg-cover" src={Heroimg} alt="imagem principal" /> */}
                <div className="absolute text-center">

                    <div>
                        <h1 className="text-3xl text-gray-100 mb-4">Onde você quer ir?</h1>
                        <p className="text-green-100">Escolha o estado e cidade para achar os melhores resorts</p>
                    </div>

                    <form className="space-x-4 mt-7 flex items-center justify-center" action="">

                        <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
                            <option value="">Escolha o estado</option>
                        </select>

                        <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
                            <option value="">Escolha a cidade</option>
                        </select>

                        <button className="font-medium bg-yellow-500 px-3 py-2 rounded text-yellow-900 flex items-center justify-center gap-1"><IoMdSearch />Pesquisar resorts</button>

                    </form>

                </div>
            </section>

            <section className="px-10 py-10 flex items-center justify-center gap-12">
                <div className="text-gray-600 space-y-5">

                    <h1 className="text-gray-400 text-sm font-medium">RESORT EM DESTAQUE</h1>

                    <h2 className="text-2xl ">Ecoresort Praia do Forte Bahia</h2>

                    <p className="text-gray-400 text-sm font-medium">Hotel qualidade 5 estrelas</p>

                    <p className="text-gray-400 text-sm font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil labore illum culpa accusamus veniam soluta voluptas vitae qui perferendis natus non, earum animi tempora, sequi beatae vel porro ad error.</p>

                    <p className="text-gray-400 text-sm font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil labore illum culpa accusamus veniam soluta voluptas vitae qui perferendis natus non, earum animi tempora, sequi beatae vel porro ad error.</p>

                    <button className="font-medium bg-yellow-500 px-3 py-2 rounded text-yellow-900 flex items-center justify-center gap-5">Solicitar reserva <FaArrowRight /></button>
                </div>

                <div>
                    <img className="RESORT" src={Resort} alt="resort" />
                </div>
            </section>
        </main>
    )
}