import React from "react"; 

export default function Contatos() {
    return (
        <div className="p-10 text-gray-600 text-center space-y-32">
            <div>
                <h1 className="text-2xl my-10">Contatos</h1>
                <div className="space-y-5">
                    <p>Telefone: (00) 0 0000-0000</p>
                    <p>E-mail: exemplo@hotmial.com</p>
                    <p>E-mail: exemplo@gmail.com</p>
                </div>
            </div>

            <div>
                <h1 className="text-2xl my-10">Endenreço</h1>
                <p>Rua Qualquer, n° 0000, Cidade, Estado, Brasil.</p>
                <p>CPNJ: XX.XXX.XXX/0001-XX</p>
            </div>
        </div>
    )
}