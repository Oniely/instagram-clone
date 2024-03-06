import Image from "next/image";
import Link from "next/link";
import Search from "../shared/Search";

const TopBar = () => {
	return (
		<nav className="md:hidden w-full sticky top-0 left-0 flex items-center justify-between px-4 py-1 border-b border-b-gray-600 bg-back z-30">
			<Link href={"/"} className="relative w-24 h-14">
				<Image
					src={"/assets/insta.png"}
					alt="instagram"
					fill
					className="object-contain"
					priority
				/>
			</Link>

			<div className="flex items-center gap-3">
				<Search />

				<Link href={"/notifications"}>
					<Image
						src={"/assets/heart.svg"}
						alt="heart"
						width={29}
						height={29}
					/>
				</Link>
			</div>
		</nav>
	);
};

export default TopBar;
