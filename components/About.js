import React from "react";
import Image from "next/image";
import { tinaField, useTina } from "tinacms/dist/react";
import MarkdownContent from "./MarkdownContent";

const About = ({ props }) => {
  //console.log(props);
  return (
    <section className="bg-white dark:bg-gray-800 py-16 text-black dark:text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <div
              className="mb-12"
              data-tina-field={tinaField(props, "abouttext")}
            >
              <MarkdownContent markdownText={props.abouttext} />
            </div>

            <div className="flex justify-center">
              <a
                href="#contact"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-8 rounded my-6 uppercase w-3/4 lg:w-auto mx-auto text-center"
                data-tina-field={tinaField(props, "aboutbuttontext")}
              >
                {props.aboutbuttontext}{" "}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-8 mt-10 lg:mt-2">
            <Image
              src={props.aboutImgSrc}
              alt="Futaleufú hiking, stunning landscapes, guided tours"
              width={600}
              height={400}
              className="rounded-lg "
              data-tina-field={tinaField(props, "aboutImgSrc")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
