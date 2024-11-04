import Image from "next/image";
import React from "react";
import { GrDocumentPdf, GrCode } from "react-icons/gr";
import Link from "next/link";

interface PublicationCardProps {
  description: string;
  imageUrl: string;
}

export const PublicationCard: React.FC<PublicationCardProps> = ({
  description,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 hover:bg-slate-100 p-6 transition-colors duration-100 ease-in">
      <Image
        src={imageUrl}
        alt="Description"
        width={96}
        height={96}
        className="object-cover border-[1px]"
      />
      <div className="flex flex-col">
        <p className="text-base font-medium">
          {description}
        </p>
        <div className="flex gap-2 mt-2">
          <Link href = "/">
            <GrDocumentPdf className="text-blue-400 text-2xl hover:scale-[1.15] transition-transform ease-in-out hover:cursor-pointer" />
          </Link>
          <Link href="/link2">
            <GrCode className="text-blue-400 text-2xl hover:scale-[1.15] transition-transform ease-in-out hover:cursor-pointer"/>
          </Link>
        </div>
      </div>
    </div>
  );
};
