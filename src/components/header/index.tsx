import React, { useState } from "react";
import Logo from "./details/logo";
import Burger from "./details/burger";
import Vertical from "./details/verticalLine";
import Card from "./details/card";
import Link from "next/link";


const Header: React.FC = () => {

    return (
        <div className="flex flex-row w-[1440px] h-[116px] items-center">
            <button className="pl-[120px] mt-[20px]"><Link href="/"><Logo /></Link></button>
            <button className="flex flex-row items-center ml-[69px] gap-x-[12px]">
                <Burger />
                <p className="font-noto text-[12px] leading-[1.05rem] tracking-[.03em] font-semibold">МЕНЮ</p>
            </button>
            <div className="font-noto ml-[684px]">
                <div className="font-normal text-[12px] text-[#706E5D] leading-[1.063rem] tracking-[.02em]">Мы на связи с вами</div>
                <a href="tel:+375 (29) 875-98-46" className="font-semibold text-[12px] text-[#515040] leading-[1.125rem] tracking-[.06em]">+375 (29) 875-98-46</a>
            </div>
            <div className="ml-[21px]"><Vertical /></div>
            <div className="ml-[21px]"><Card /></div>
        </div>
    )
};

export default Header;