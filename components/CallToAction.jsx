
"use client";
import { TokenSOL } from '@web3icons/react'; // Import TokenSOL
import Link from "next/link";


export default function SwapComponent() {
  return (
    <div className="relative flex justify-center items-center max-h-[370px] bg-[#D8F3DC] w shadow-md overflow-hidden">
      {/* Solana Icon as Background */}
      <div className="absolute -right-28 -top-30 z-0">
        <div className=" opacity-30 -rotate-12">
          <TokenSOL variant="branded" size={650} /> {/* Replace Image with TokenSOL icon */}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-12 flex flex-col justify-between gap-10">
        <h2 className="text-2xl font-normal text-[#1B4332]">
          &quot;Ready to Swap? Let FeeFlex Handle the Fees!&quot;
        </h2>
        <p className="text-base pl-2 text-[#1B4332] font-thin">
          FeeFlex Labs makes cross-chain token swaps effortless by eliminating
          the need for native tokens to cover gas fees. Join the future of
          seamless DeFi transactions today!
        </p>
        <Link href="/swap">
          <button className="shadow-custom-dark-green max-w-[200px] h-[50px] px-5 py-2 bg-[#D8F3DC] border border-[#1B4332] rounded-[12px] group hover:bg-[#081c15] hover:shadow-custom-light-green transition-all duration-300 font-normal">
            <span className=" text-[#1B4332] group-hover:text-[#D8F3DC]">Swap Now &gt;</span>
          </button>
          </Link>
      </div>
    </div>
  );
}
