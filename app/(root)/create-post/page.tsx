"use client";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostValidation } from "@/lib/validations";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import MediaCard from "@/components/cards/MediaCard";

export type MediaFile = {
	file: File;
	type: "image" | "video";
};
type PostType = z.infer<typeof PostValidation>;

const CreatePost = () => {
	const [addedMedia, setAddedMedia] = useState<MediaFile[]>([]);

	const form = useForm({
		resolver: zodResolver(PostValidation),
		defaultValues: {
			caption: "",
		},
	});

	const uploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;

		if (!files) {
			return;
		}

		const newMedia: MediaFile[] = Array.from(files).map((file) => ({
			file,
			type: file.type.startsWith("image/") ? "image" : "video",
		}));

		setAddedMedia((prevMedia) => [...prevMedia, ...newMedia]);
	};

	const onSubmit: SubmitHandler<PostType> = async (values) => {
		console.log(values);
	};
	// setup uploadthing

	return (
		<section className="main-container max-w-2xl">
			<div className="head-text">Create Post</div>

			<Form {...form}>
				<form
					className="flex flex-col gap-3"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<div className="flex flex-col flex-1 gap-3">
						<MediaCard
							medias={addedMedia}
							setMedia={setAddedMedia}
						/>

						<label className="w-full h-28 flex flex-col items-center justify-center gap-1 border rounded-lg cursor-pointer">
							<input
								type="file"
								className="hidden"
								multiple
								onChange={uploadPhoto}
							/>
							{/* prettier-ignore */}
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
							</svg>
							Upload Media
						</label>
					</div>

					<FormField
						control={form.control}
						name="caption"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Caption</FormLabel>
								<FormControl>
									<Textarea
										rows={5}
										maxLength={10}
										{...field}
										className="text-back"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Post</Button>
				</form>
			</Form>
		</section>
	);
};

// filter images or videos if needed
// const images = mediaFiles.filter((media) => media.type === 'image');
// const videos = mediaFiles.filter((media) => media.type === 'video');

export default CreatePost;
