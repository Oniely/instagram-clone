import Image from "next/image";
import Link from "next/link";
import PostButtons from "../home/PostButtons";
import PostDescription from "../home/PostDescription";
import PostImages from "../home/PostImages";

const PostCard = () => {
	return (
		<article className="w-full flex flex-col flex-1 pb-10">
			<div className="w-full flex items-center justify-between py-3">
				<div className="flex gap-2">
					<Link href={"/"}>
						<Image
							src={"/assets/profile.svg"}
							alt="profile photo"
							width={35}
							height={35}
							className="object-cover aspect-square rounded-full p-0.5"
						/>
					</Link>

					<div className="flex items-center gap-1 text-gray-600 text-sm">
						<p className="text-fore">Username</p>
						<span className="text-xs">•</span>
						<p>5d</p>
					</div>
				</div>
				<div>
					<button className="flex">
						<Image
							src={"/assets/more.svg"}
							alt="..."
							width={25}
							height={25}
						/>
					</button>
				</div>
			</div>

			<PostImages images={["/img.jpg", "/img.jpg"]} />
			<PostButtons />
			<PostDescription />
		</article>
	);
};

export default PostCard;
