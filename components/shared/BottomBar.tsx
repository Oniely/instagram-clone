"use client";
import { links } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
	const pathname = usePathname();

	return (
		<section className="md:hidden fixed bottom-0 left-0 right-0 border-t border-t-gray-600 bg-back z-30">
			<div className="flex items-center justify-around mb-2">
				{links.map((link) => {
					const isActive =
						(pathname.includes(link.href) &&
							link.href.length > 1) ||
						pathname === link.href;

					return (
						<Link
							key={link.title}
							href={link.href}
							className="p-3 flex flex-col items-center"
						>
							<Image
								src={isActive ? link.active : link.img}
								alt={link.title}
								width={24}
								height={24}
							/>
							<p
								className={`text-[12px] hidden sm:block ${
									isActive && "font-semibold"
								}`}
							>
								{link.title.split("/s+./")[0]}
							</p>
						</Link>
					);
				})}
			</div>
		</section>
	);
};

export default BottomBar;
