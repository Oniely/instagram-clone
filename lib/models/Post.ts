import mongoose from "mongoose";

const MediaSchema = new mongoose.Schema({
	url: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
		enum: ["image", "video"],
	},
});

const PostSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		media: [MediaSchema],
		caption: {
			type: String,
			default: "",
		},
		likes: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		comments: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Comment",
			},
		],
	},
	{ timestamps: true }
);

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default Post;
