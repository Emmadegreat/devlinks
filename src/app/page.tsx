import Image from "next/image";
import Login from "./login/page";
import DdesktopAddLinks from "@/components/desktop-add-links";

export default function Home() {
  return (
    <main className="flex flex-col items-cente bg-[#fafafa]">
      {/* <Login/> */}
      <DdesktopAddLinks />
    </main>
  );
}
