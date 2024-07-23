import Image from "next/image";
import Login from "./login/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-[#fafafa]">
      <Login/>
    </main>
  );
}