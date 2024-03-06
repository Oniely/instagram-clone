"use client";
import Image from "next/image";
import { useRef } from "react";

const PostImages = ({ images }: { images: string[] }) => {
	let i = 1;

	return (
		<div className="relative flex justify-start overflow-auto w-full h-[90vh] snap-x snap-mandatory hide-scrollbar transition-all">
			{images.length > 0 &&
				images.map((image) => (
					<div
						className="relative min-w-full h-full snap-center"
						key={i}
					>
						<Image
							src={image}
							alt="Image Post"
							className="object-cover w-full h-full"
							id={`img${i++}`}
							fill
							priority
						/>
					</div>
				))}
		</div>
	);
};

export default PostImages;
