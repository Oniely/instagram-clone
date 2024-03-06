import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TopBar from "@/components/shared/TopBar";
import BottomBar from "@/components/shared/BottomBar";
import LeftBar from "@/components/shared/LeftBar";
import RightBar from "@/components/shared/RightBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "The App",
	description: "Next.js 14",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<main className="flex">
						<LeftBar />
						<section className="w-full">
							<div>{children}</div>
						</section>
					</main>
					<BottomBar />
				</body>
			</html>
		</ClerkProvider>
	);
}
