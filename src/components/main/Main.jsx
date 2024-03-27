import React from "react";

import BannerPrincipal from "./bannerPrincipal/BannerPrincipal";
import ResortDestaque from "./resortDestaque/ResortDestaque";
import MaisResort from "./maisResort/MaisResort";
import FormProcurar from "./formProcurar/FormProcurar";

export default function Main() {
    return (
        <main>
            <BannerPrincipal></BannerPrincipal>

            <ResortDestaque></ResortDestaque>

            <MaisResort></MaisResort>

            <FormProcurar></FormProcurar>
        </main>
    )
}