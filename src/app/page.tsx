import Image from "next/image";
// import Login from "./login/page";
import ProfileDetails from "@/components/ProfileDetails";


export default function Home() {
	return (
		<main className="flex flex-col items-cente bg-[#fafafa]">
			{/* <Login /> */}
			<ProfileDetails/>
		</main>
	);
}
