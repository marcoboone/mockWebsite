import Image from "next/image";
import React from "react";
import { GrDocumentPdf, GrPlay, GrCode } from "react-icons/gr";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  description,
  imageUrl,
  title,
}) => {
  return (
    <div className="aspect-[2/3] md:aspect-[4/1] relative shadow-md rounded-lg group transition-transform duration-100 ease-in">
      <div className="absolute inset-0 flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full relative h-1/2 md:h-auto">
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            alt="Image"
            className="rounded-l-lg"
          />
        </div>
        <div className="flex flex-col justify-between p-2 lg:p-6 bg-white w-full md:w-1/2 h-1/2 md:h-auto">
          <div className="flex flex-col rounded-r-lg gap-4">
            <h2 className="text-base lg:text-lg font-bold pb-1 border-b-[1px]">{title}</h2>
            <p className="text-sm md:text-base">{description}</p>
          </div>
          <div className="flex justify-between items-end">
            <span className = "text-sm">Edward Witten | Leonard Susskind | Brian Green</span>
            <div className="flex gap-4">
              <GrDocumentPdf className="text-black text-2xl hover:scale-[1.15] transition-transform ease-in-out hover:cursor-pointer" />
              <GrPlay className="text-black text-2xl hover:scale-[1.15] transition-transform ease-in-out hover:cursor-pointer" />
              <GrCode className="text-black text-2xl hover:scale-[1.15] transition-transform ease-in-out hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};