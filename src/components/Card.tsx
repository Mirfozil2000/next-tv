"use client";
import React from "react";
import Image from "next/image";
interface Props {
  image: string;
  name: string;
}

export function Card({ image, name }: Props) {
  return (
    <div className="flex flex-col items-center p-1 w-[158px] sm:w-[178px]">
      <Image
        alt="movieImg"
        height={250}
        src={image}
        width={160}
        className="relative h-[210px]  sm:h-[237px] w-full bg-gray-300 overflow-hidden   transition-all"
      />
      <p className="text-left py-2 font-semibold">{name}</p>
    </div>
  );
}
export default function CardLoading() {
    return (
      <div className=" animate-pulse  gap-2    flex flex-col items-center p-2 w-[158px]  sm:w-[178px]      ">
        <div className=" relative h-[210px]  sm:h-[237px] w-full   transition-all bg-gray-300 rounded-md" />
        <p className="px-4 py-2 font-semibold text-lg  w-full  bg-gray-300 rounded-md" />
        <p className="px-4 py-2 font-semibold text-lg mb-1  w-full  bg-gray-300 rounded-md" />
      </div>
    );
  }