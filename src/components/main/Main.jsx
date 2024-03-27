import React from "react";

import { IoMdSearch } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

import Resort from './img/resort.jpg'

import Hotel01 from './img/hotel01.png'
import Hotel02 from './img/hotel02.jpg'
import Hotel03 from './img/hotel03.jpg'
import Hotel04 from './img/hotel04.jpg'

export default function Main() {
    return (
        <main>
            <section className="IMAGEM relative flex items-center justify-center">
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

            <section className="px-10 py-10 flex items-center justify-center gap-12  max-md:flex max-md:flex-col-reverse">
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

            <section className="p-10 space-y-10">
                <h1 className="text-2xl text-center text-gray-500 font-semibold">Conheça mais resorts</h1>

                <div className="grid grid-cols-4 grid-rows-2 gap-6 max-md:grid-cols-1">
                    <div className="relative col-span-2 row-span-2 max-md:col-span-1 rounded-lg overflow-hidden">
                        <p className="absolute bottom-0 p-1 m-2 rounded-lg text-gray-700 font-semibold bg-white shadow-xl">Beach Park Resort</p>
                        <img className="w-full h-full object-cover" src={Hotel01} alt="" />
                    </div>

                    <div className="relative h-44 col-span-2 max-md:col-span-1 max-md:h-full rounded-lg overflow-hidden">
                        <p className="absolute bottom-0 p-1 m-2 rounded-lg text-gray-700 font-semibold bg-white shadow-xl">Salina do Maragoggi Resort</p>
                        <img className="w-full h-full object-cover" src={Hotel02} alt="" />
                    </div>

                    <div className="relative rounded-lg overflow-hidden">
                        <p className="absolute bottom-0 p-1 m-2 rounded-lg text-gray-700 font-semibold bg-white shadow-xl">Grand Palladium</p>
                        <img className="w-full h-full object-cover" src={Hotel03} alt="" />
                    </div>

                    <div className="relative rounded-lg overflow-hidden">
                        <p className="absolute bottom-0 p-1 m-2 rounded-lg text-gray-700 font-semibold bg-white shadow-xl">Arraial d'Ajuda Eco Resort</p>
                        <img className="w-full h-full object-cover" src={Hotel04} alt="" />
                    </div>
                </div>
            </section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </main>
    )
}