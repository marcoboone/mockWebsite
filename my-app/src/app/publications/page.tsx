import  {PublicationCard} from "@/app/components/publicationCard";

export default function Home() {
  return (
    <div className="squeezetainer py-[15vh] bg-slate-50">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <span className=" text-blue-400">PUBLISH OR PERISH</span>
          <h2 className=" text-3xl  lg:text-5xl font-bold">PUBLICATIONS</h2>
        </div>
        <div className = "flex flex-col">
        <h2 className = "text-3xl font-bold opacity-20">2024</h2>
        <PublicationCard imageUrl = "/Images/paper.png" description = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro molestiae ratione inventore? Sapiente, atque, explicabo, rerum ratione pariatur corrupti recusandae voluptatibus quasi minus dolor blanditiis sequi repellat consequuntur doloremque."/>
        <PublicationCard imageUrl = "/Images/paper.png" description = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro molestiae ratione inventore? Sapiente, atque, explicabo, rerum ratione pariatur corrupti recusandae voluptatibus quasi minus dolor blanditiis sequi repellat consequuntur doloremque."/>
        <PublicationCard imageUrl = "/Images/paper.png" description = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro molestiae ratione inventore? Sapiente, atque, explicabo, rerum ratione pariatur corrupti recusandae voluptatibus quasi minus dolor blanditiis sequi repellat consequuntur doloremque."/>
        <h2 className = "text-3xl font-bold opacity-20">2023</h2>
        <PublicationCard imageUrl = "/Images/paper.png" description = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro molestiae ratione inventore? Sapiente, atque, explicabo, rerum ratione pariatur corrupti recusandae voluptatibus quasi minus dolor blanditiis sequi repellat consequuntur doloremque."/>
        <PublicationCard imageUrl = "/Images/paper.png" description = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro molestiae ratione inventore? Sapiente, atque, explicabo, rerum ratione pariatur corrupti recusandae voluptatibus quasi minus dolor blanditiis sequi repellat consequuntur doloremque."/>
        <PublicationCard imageUrl = "/Images/paper.png" description = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro molestiae ratione inventore? Sapiente, atque, explicabo, rerum ratione pariatur corrupti recusandae voluptatibus quasi minus dolor blanditiis sequi repellat consequuntur doloremque."/>

        </div>
      </div>
    </div>
  );
}
