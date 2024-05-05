import BlockGlobal from "@/components/Block";
import BlockPassNft from "@/components/BlockPassNft";
import BlockProfiting from "@/components/BlockProfiting";
import BlockVision from "@/components/BlockVision";
import Cards from "@/components/Cards";
import Header from "@/components/Header";
import HorizontalCards from "@/components/HoriszontalCards";
import React, { useState } from 'react';


export default function Home() {
  const logoSrc = '/icons/logo.svg';
  const menuItems = [{ label: 'Creon Pass', isSoon: false }, { label: 'Token', isSoon: true }, { label: 'AI Revenue', isSoon: true }, { label: 'AI Launchpad', isSoon: true }];
  return (
    <main className="flex flex-col min-h-screen relative">
      <Header logoSrc={logoSrc} menuItems={menuItems} />
      <BlockGlobal />
      <BlockPassNft />
      <BlockProfiting />
      <BlockVision />
      <Cards />
      <HorizontalCards />
    </main>
  );
}
