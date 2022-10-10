import HeadHome from '../../components/head';
import Features from '../../components/features';
import AboutUs from '../../components/aboutUs';
import Footer from '../../components/footer';

const Home = () => {
	return (
		<>
			<HeadHome />
			<main>
				<section id="body">
					<Features />
				</section>
				<AboutUs />
			</main>
			<Footer />
		</>
	);
};

export default Home;
