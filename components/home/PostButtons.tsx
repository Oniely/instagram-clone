import Image from "next/image";

const PostButtons = () => {
	return (
		<section className="flex items-center justify-between py-2">
			<div className="flex gap-3">
				<button>
					<Image
						src={"/assets/heart.svg"}
						alt="Heart"
						width={30}
						height={30}
					/>
				</button>
				<button>
					<Image
						src={"/assets/comment.svg"}
						alt="Heart"
						width={30}
						height={30}
						className="transform -scale-x-100"
					/>
				</button>
				<button>
					<Image
						src={"/assets/share.svg"}
						alt="Heart"
						width={30}
						height={30}
						className="-rotate-[16deg]"
					/>
				</button>
			</div>
			<button>
				<Image
					src={"/assets/bookmark.svg"}
					alt="Bookmark"
					width={30}
					height={30}
				/>
			</button>
		</section>
	);
};

export default PostButtons;
