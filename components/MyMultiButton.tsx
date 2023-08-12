'use client'

import dynamic from 'next/dynamic';

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function MyMultiButton() {

  return (
    <div>
      <WalletMultiButtonDynamic className="mymultibutton text-sm break-keep  flex items-center justify-center  text-white  py-[18px] px-[36px] rounded-[320px]  w-full" />
    </div>
  );
}