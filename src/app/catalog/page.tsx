import React from "react"
import Cat from "./details/catalog"


export default function Catalog() {
    return (
        <div className="flex flex-col justify-center w-[1200px] mx-auto">
            <h1 className="font-noto font-light text-[34px] text-[#2F2F2F] leading-[3.5rem] tracking-[.05em] text-center">КАТАЛОГ</h1>
            <Cat />
        </div>
    )
}