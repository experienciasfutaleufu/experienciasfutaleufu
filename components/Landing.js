import React from "react";
import Image from "next/image";
import { tinaField, useTina } from "tinacms/dist/react";
import { Block } from "./Blockz";

export default function Landing({ data }) {
  // console.log("somos");
  // console.log(data.pagez);
  return (
    <section id="landing" className="dark:bg-darkBlue3 bg-teal-500/50 ">
      <div className="  flex   items-center justify-center">
        <Image
          src={data.pagez.landingImageSrc}
          alt="PuesoFest"
          width={1920}
          height={1080}
          className="block dark:hidden"
        />
        <Image
          src={data.pagez.landingDarkImageSrc}
          alt="PuesoFest"
          width={1920}
          height={1080}
          className="hidden dark:block"
        />
      </div>
    </section>
  );
}
