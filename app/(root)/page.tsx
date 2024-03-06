import Posts from "@/components/home/Posts";
import TopBar from "@/components/home/TopBar";

const Home = () => {
	return (
		<>
			<TopBar />
			<section className="main-container">
				<Posts />
			</section>
		</>
	);
};

export default Home;
