import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxSketchLogo, RxDashboard } from 'react-icons/rx';

interface Props {
  children?: ReactNode;
}

export default function Sidebar({ children }: { children: any }) {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] p-2 w-full border-gray-200"></span>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 my-4 cursor-pointer p-3 rounded-lg inline-block">
              <RxDashboard size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
}
