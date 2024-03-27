import React from "react";

import { FaArrowRight } from "react-icons/fa"

import Resort from '../../../assets/resort.jpg'

export default function ResortDestaque() {
    return (
        <section className="px-10 py-10 flex items-center justify-center gap-12  max-md:flex max-md:flex-col-reverse">

            <div className="w-1/2 max-sm:w-full text-gray-600 space-y-5">

                <h1 className="text-gray-400 text-sm font-medium">RESORT EM DESTAQUE</h1>

                <h2 className="text-2xl ">Ecoresort Praia do Forte Bahia</h2>

                <p className="text-gray-400 text-sm font-medium">Hotel qualidade 5 estrelas</p>

                <p className="text-gray-400 text-sm font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil labore illum culpa accusamus veniam soluta voluptas vitae qui perferendis natus non, earum animi tempora, sequi beatae vel porro ad error.</p>

                <p className="text-gray-400 text-sm font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil labore illum culpa accusamus veniam soluta voluptas vitae qui perferendis natus non, earum animi tempora, sequi beatae vel porro ad error.</p>

                <button className="font-medium bg-yellow-500 px-3 py-2 rounded text-yellow-900 flex items-center justify-center gap-5">Solicitar reserva <FaArrowRight /></button>
            </div>

            <div className="flex items-center justify-center">
                <img className="RESORT rounded-lg" src={Resort} alt="resort" />
            </div>
        </section>
    )
}