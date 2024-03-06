import * as z from "zod";

export const PostValidation = z.object({
	caption: z.string().min(1).max(2200),
});
