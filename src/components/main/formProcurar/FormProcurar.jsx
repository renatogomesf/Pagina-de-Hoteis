import React from "react";

import { IoMdSearch } from "react-icons/io";

export default function FormProcurar() {
    return (
        <form className="space-x-4 mt-7 flex items-center justify-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:space-x-0 gap-4" action="">

            <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500" required>
                <option value="">Escolha o estado</option>
                <option value="">Ceará</option>
            </select>

            <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500" required>
                <option value="">Escolha a cidade</option>
                <option value="">Fortaleza</option>
            </select>

            <button className="font-medium bg-yellow-500 px-3 py-2 rounded text-yellow-900 flex items-center justify-center gap-1"><IoMdSearch />Pesquisar resorts</button>

        </form>
    )
}