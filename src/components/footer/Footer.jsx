import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mt-10">
            <hr className="border-gray-300" />
            
            <div className="p-10 flex items-center justify-between">
                <div className="font-black text-2xl text-slate-600">Logo</div>

                <div className="flex gap-2">
                    <FaFacebookSquare className="text-gray-500 text-xl" />
                    <FaInstagram className="text-gray-500 text-xl"  />
                </div>
            </div>

            <div className="pb-10 text-gray-600 text-center">
                <p>Rua Qualquer, n° 0000, Cidade, Estado, Brasil.</p>

                <p>CPNJ: XX.XXX.XXX/0001-XX</p>
            </div>
        </footer>
    )
}