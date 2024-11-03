import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative w-full h-[100vh]">
      <Image
        src="/Images/heroImage.jpg"
        layout="fill"
        objectFit="cover"
        alt="Image"
      ></Image>
      <div className="absolute w-full h-full bg-black/75 "></div>
      <div className="absolute w-full h-full squeezetainer flex items-center">
        <div className="flex flex-col gap-4 lg:w-[70%]">
          <h1 className="text-white text-2xl lg:text-5xl font-bold">
            ENVISION. ENGINEER. EXECUTE.
          </h1>
          <p className="text-white text-sm lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
            neque amet libero tempore quam velit voluptate incidunt qui
            obcaecati, sit totam quae.
          </p>
        </div>
      </div>
    </div>
  );
};
