import Image from "next/image";
import PeopleCard from "@/app/components/peopleCard";
import { GrMailOption } from "react-icons/gr";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="squeezetainer py-[15vh] bg-slate-50">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 col-span-1 ">
          <div className="flex flex-col gap-2">
            <span className=" text-blue-400">THE BRAINS BEHIND THE BOTS</span>
            <h2 className=" text-3xl  lg:text-5xl font-bold">PEOPLE</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-flow-row gap-12">
        <div className = "col-span-2 lg:col-span-4">
            <h2 className="text-3xl font-bold opacity-20">Professor</h2>
          </div>
          <div className="col-span-2  relative h-0 pb-[100%]">
            <Image
              src="/Images/Alves-Oliveira.jpg"
              layout="fill"
              objectFit="cover"
              alt="Image"
              className="rounded-lg"
            />
          </div>
          <div className="col-span-2  flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <span className="font-bold text-4xl">Patricia Alves-Oliveira</span>
              <hr className="border-blue-400 border-2" />
              <span className="text-base font-bold">About</span>
              <p className="text-lg lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                rerum reiciendis maiores excepturi nobis.
              </p>
              <span className="text-base font-bold">Education</span>
              <p className="text-lg lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                rerum reiciendis maiores excepturi nobis.
              </p>
            </div>
            <div className="flex flex-col gap-4">
            <span className="text-base font-bold">Links</span>
              <a href="/"><GrMailOption className="text-black inline text-xl hover:scale-[1.15] transition-transform ease-in-out hover:cursor-pointer"  /> email@umich.edu</a>
              <a href="/"><FaGoogleScholar className="text-black text-xl hover:scale-[1.15] transition-transform ease-in-out hover:cursor-pointer inline" /> Google Scholar</a>
              <a href="/"><FaXTwitter className="text-black text-xl hover:scale-[1.15] transition-transform ease-in-out hover:cursor-pointer inline" />@account</a>
            </div>
          </div>
          
    
          <div className = "col-span-2 lg:col-span-4">
            <h2 className="text-3xl font-bold opacity-20">OUR TEAM</h2>
          </div>
          <PeopleCard imageUrl="/Images/robot-user.jpg" name="Marco Boone" year = "Somphmore" area = "Web Design"  />
          <PeopleCard imageUrl="/Images/robot-user.jpg" name="Marco Boone" year = "Somphmore" area = "Web Design"  />
          <PeopleCard imageUrl="/Images/robot-user.jpg" name="Marco Boone" year = "Somphmore" area = "Web Design"  />
          <PeopleCard imageUrl="/Images/robot-user.jpg" name="Marco Boone" year = "Somphmore" area = "Web Design"  />
          <PeopleCard imageUrl="/Images/robot-user.jpg" name="Marco Boone" year = "Somphmore" area = "Web Design"  />
          <PeopleCard imageUrl="/Images/robot-user.jpg" name="Marco Boone" year = "Somphmore" area = "Web Design"  />
          <PeopleCard imageUrl="/Images/robot-user.jpg" name="Marco Boone" year = "Somphmore" area = "Web Design"  />
          <PeopleCard imageUrl="/Images/robot-user.jpg" name="Marco Boone" year = "Somphmore" area = "Web Design"  />
         
        </div>
      </div>
    </div>
  );
}
