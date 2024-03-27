import React from "react";

import Hotel01 from '../../../assets/hotel01.png'
import Hotel02 from '../../../assets/hotel02.jpg'
import Hotel03 from '../../../assets/hotel03.jpg'
import Hotel04 from '../../../assets/hotel04.jpg'

export default function MaisResort() {
    return (
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
    )
}