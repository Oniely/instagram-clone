import mongoose from "mongoose";

const StorySchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		imageUrl: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			index: { expires: "24h" },
		},
	},
	{ timestamps: true }
);

const Story = mongoose.models.Story || mongoose.model("Story", StorySchema);

export default Story;
