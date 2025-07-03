import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="bg-black text-white w-screen h-screen flex flex-col items-center justify-center gap-5">
      <Image
        src="/hajrakot.jpg"
        alt="fotoprofile"
        width={400}
        height={400}
        className="rounded-full mb-10 pb-4"
      />
      <h1 className="text-white text-5xl items-center text-center justify-center">
        I do code and <br />
        make content{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          about it!
        </span>
      </h1>
      <p className="text-white text-2xl items-center text-center justify-center">
        I am a seasoned full-stack software engineer with over
      </p>
      <p className="text-white text-2xl items-center text-center justify-center">
        8 years of professional experience, specializing in backend development.
      </p>
      <p className="text-white text-2xl items-center text-center justify-center">
        My expertise lies in crafting robust and scalable SaaS-based
      </p>
      <p className="text-white text-2xl items-center text-center justify-center">
        architectures on the Amazon AWS platform.
      </p>
      <div className="flex flex-row justify-center items-center gap-7 p-[20px]">
        <Button className="bg-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-2xl text-white p-2 rounded-full">
          Get In Touch
        </Button>
        <Button className="bg-white text-black text-2xl p-2 rounded-full">
          Download CV
        </Button>
      </div>
    </div>
  );
}
