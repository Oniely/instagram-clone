import Link from "next/link";

const PostDescription = () => {
	return (
		<div className="flex flex-col flex-1 border-b border-gray-600 pb-3">
			<p className="text-sm font-semibold">26,123 likes</p>
			<Link href={"/"}>View all 3,474 comments</Link>
			<div className="flex flex-1">
				<input
					type="text"
					placeholder="Add a comment..."
					className="w-full py-1 bg-transparent border-none outline-none text-sm mt-1"
				/>
				<button className="text-blue-500">Post</button>
			</div>
		</div>
	);
};

export default PostDescription;
