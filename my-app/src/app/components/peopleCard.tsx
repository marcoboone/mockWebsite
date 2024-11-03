import React from "react";
import Image from "next/image";

interface PeopleCardProps {
  imageUrl: string;
  name: string;
  year: string; 
  area: string;

}

const PeopleCard: React.FC<PeopleCardProps> = ({ imageUrl, name, year, area }) => {
  return (
    <div className="col-span-1 flex flex-col gap-2">
      <div className="relative h-0 pb-[100%]">
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          alt="Image"
          className="rounded-lg"
        />
      </div>
      <div className = "flex flex-col gap-1">
        <span className = "font-bold">{name}</span>
        <span>{year}</span>
        <span>{area}</span>

      </div>
    </div>
  );
};

export default PeopleCard;
