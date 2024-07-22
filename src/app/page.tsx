import Image from "next/image";
import Login from "./login/login";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <Login/>
    </main>
  );
}
