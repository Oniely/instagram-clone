import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
	{
		post: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post",
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		text: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Comment =
	mongoose.models.Comment || mongoose.model("Comment", CommentSchema);

export default Comment;
