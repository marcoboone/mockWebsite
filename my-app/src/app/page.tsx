import "./globals.css";

import { Hero } from "@/app/sections/hero";
import { Projects } from "./sections/projects";


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Projects></Projects>
    </div>
  );
}