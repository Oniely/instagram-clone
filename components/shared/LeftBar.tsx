"use client";
import { links } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftBar = () => {
	const pathname = usePathname();

	return (
		<section className="hidden md:block sticky left-0 top-0 bottom-0 w-max lg:w-[18rem] h-screen border-r border-r-gray-600 z-30 py-6 px-4">
			<nav className="flex flex-col gap-10 h-full">
				<Link href={"/"} className="ml-2">
					<Image
						src={"/assets/insta.png"}
						alt="instagram"
						className="object-contain hidden lg:block"
						width={100}
						height={100}
						priority
					/>
					<Image
						src={"/assets/logo.png"}
						alt="logo"
						width={30}
						height={30}
						className="object-contain block lg:hidden"
						priority
					/>
				</Link>

				<div className="flex flex-col flex-1 gap-4">
					{links.map((link) => {
						const isActive =
							(pathname.includes(link.href) &&
								link.href.length > 1) ||
							pathname === link.href;

						return (
							<Link
								href={link.href}
								key={link.title}
								className="flex items-center gap-2 p-2 rounded-xl hover:bg-[#1a1a1a]"
							>
								<Image
									src={isActive ? link.active : link.img}
									alt={link.title}
									width={35}
									height={35}
									className="object-contain lg:p-1"
								/>
								<p
									className={`hidden lg:block ${
										isActive && "font-semibold"
									}`}
								>
									{link.title}
								</p>
							</Link>
						);
					})}
				</div>

				<button className="flex items-center gap-2 p-2">
					<Image
						src={"/assets/burger.svg"}
						alt="burger"
						width={35}
						height={35}
						className="object-contain lg:p-1"
					/>
					<span className="hidden lg:block">More</span>
				</button>
			</nav>
		</section>
	);
};

export default LeftBar;
