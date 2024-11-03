import { ProjectCard } from "@/app/components/projectCard";

export default function Home() {
  return (
    <div className="squeezetainer py-[15vh] bg-slate-50">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <span className=" text-blue-500">OH THE PLACES WE HAVE BEEN</span>
          <h2 className=" text-3xl  lg:text-5xl font-bold">PROJECTS</h2>
        </div>
        <ProjectCard
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, velit dolores voluptate commodi sed doloribus corporis nihil dignissimos placeat cupiditate odio, architecto minima non illum assumenda molestiae distinctio neque quidem...."
          imageUrl="/Images/projectsImageA.jpg"
          title="PROJECT 1"
        />
        <ProjectCard
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, velit dolores voluptate commodi sed doloribus corporis nihil dignissimos placeat cupiditate odio, architecto minima non illum assumenda molestiae distinctio neque quidem...."
          imageUrl="/Images/projectsImageB.jpg"
          title="PROJECT 2"
        />
        <ProjectCard
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, velit dolores voluptate commodi sed doloribus corporis nihil dignissimos placeat cupiditate odio, architecto minima non illum assumenda molestiae distinctio neque quidem...."
          imageUrl="/Images/projectsImageC.jpg"
          title="PROJECT 3"
        />
        <ProjectCard
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, velit dolores voluptate commodi sed doloribus corporis nihil dignissimos placeat cupiditate odio, architecto minima non illum assumenda molestiae distinctio neque quidem...."
          imageUrl="/Images/projectsImageA.jpg"
          title="PROJECT 1"
        />
        <ProjectCard
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, velit dolores voluptate commodi sed doloribus corporis nihil dignissimos placeat cupiditate odio, architecto minima non illum assumenda molestiae distinctio neque quidem...."
          imageUrl="/Images/projectsImageB.jpg"
          title="PROJECT 2"
        />
        <ProjectCard
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, velit dolores voluptate commodi sed doloribus corporis nihil dignissimos placeat cupiditate odio, architecto minima non illum assumenda molestiae distinctio neque quidem...."
          imageUrl="/Images/projectsImageC.jpg"
          title="PROJECT 3"
        />
      </div>
    </div>
  );
}
