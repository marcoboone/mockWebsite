
import { ProjectCard } from "@/app/components/projectCard";

export const Projects = () => {
  return (
    <div className="squeezetainer py-[10vh] bg-slate-50">
      <div className="grid grid-cols-1  grid-rows-1 gap-12">
        <div className="flex flex-col gap-6 col-span-1 ">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-blue-500">
              OH THE PLACES WE HAVE BEEN
            </span>
            <h2 className=" text-3xl  lg:text-4xl font-bold">PROJECTS</h2>
          </div>
        </div>
        <ProjectCard
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi amet sunt eius commodi fuga quis itaque officiis placeat...."
          imageUrl="/Images/projectsImageA.jpg"
          title="PROJECT 1"
        />
         <ProjectCard
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi amet sunt eius commodi fuga quis itaque officiis placeat...."
          imageUrl="/Images/projectsImageB.jpg"
          title="PROJECT 1"
        />
         <ProjectCard
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi amet sunt eius commodi fuga quis itaque officiis placeat...."
          imageUrl="/Images/projectsImageC.jpg"
          title="PROJECT 1"
        />
      </div>
    </div>
  );
};
