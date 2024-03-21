'use client'
import React from "react";
import HighlightedNFT from "@/components/HighlightedNFT/HighlightedNFT";
import "./HeroSection.css"
import Link from "next/link";
import {ROUTER} from "../../router/router.enum"
import Image from "next/image";
import Rocket from "../../img/RocketLaunch.svg"
import TextH1 from "@/components/TextH1/TextH1";
import TextP from "@/components/TextP/TextP";
import TextPSM from "@/components/TextPSM/TextPSM";
import { useEffect, useRef } from 'react';


const HeroSection = () => {
    return (
        <section className="heroSection">
            <div className="leftside">
                <div>
                    <TextH1 style={{marginBottom: '20px'}}>Discover digital art & Collect NFTs</TextH1>
                    <TextP style={{marginBottom: '30px', fontSize: '22px'}}>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</TextP>
                
                </div>
                <div className="ls_stats">
                    <div className="ls_stat">
                        <TextPSM style={{fontSize: '28px', fontWeight: '700'}}><span>240</span>k+</TextPSM>
                        <TextP style={{fontSize: '24px'}}>Total Sale</TextP>
                    </div>
                    <div className="ls_stat">
                        <TextPSM style={{fontSize: '28px', fontWeight: '700'}}><span>100</span>k+</TextPSM>
                        <TextP style={{fontSize: '24px'}}>Auctions</TextP>
                    </div>
                    <div className="ls_stat">
                        <TextPSM style={{fontSize: '28px', fontWeight: '700'}} ><span>240</span>k+</TextPSM>
                        <TextP style={{fontSize: '24px'}}>Artists</TextP>
                    </div>
                </div>
            </div>
            <HighlightedNFT/>
        </section>
    )
}

export default HeroSection;