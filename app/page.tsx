import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>My App</h2>
      <Button> Hire Me!!!</Button>
      <UserButton/>
    </div>
  );
}
