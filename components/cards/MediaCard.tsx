import { MediaFile } from "@/app/(root)/create-post/page";
import Image from "next/image";

interface Props {
	medias: MediaFile[];
	setMedia: (state: MediaFile[]) => void;
}

const MediaCard = ({ medias, setMedia }: Props) => {
	function setAsMainMedia(file: MediaFile) {
		const newMedia: MediaFile[] = [
			file,
			...medias.filter((mediaFile) => mediaFile !== file),
		];

		setMedia(newMedia);
	}

	return (
		<>
			{medias.map((media: MediaFile, index: number) => (
				<article
					className="flex flex-1 max-w-full relative"
					key={index}
				>
					{media.type === "image" ? (
						<div className="relative min-w-full h-[20rem]">
							<Image
								src={URL.createObjectURL(media.file)}
								alt="photo"
								fill
							/>
						</div>
					) : (
						<video width="320" height="240" controls>
							<source
								src={URL.createObjectURL(media.file)}
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
					)}
					<button
						className="absolute top-3 right-4"
						onClick={() => setAsMainMedia(media)}
					>
						{index === 0 ? (
							<Image
								src={"/assets/star-active.svg"}
								alt="star"
								width={30}
								height={30}
							/>
						) : (
							<Image
								src={"/assets/star.svg"}
								alt="star"
								width={30}
								height={30}
							/>
						)}
					</button>
				</article>
			))}
		</>
	);
};

export default MediaCard;
