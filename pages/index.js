import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Banner from '../components/banner/Banner';
import Navbar from '../components/nav/Navbar';
import Footer from '../components/footer/Footer';
import styles from '../styles/Home.module.css';
import { useCollection } from '../hooks/useCollection';
import { useAuthContext } from '../hooks/useAuthContext';
import Carousel from 'react-elastic-carousel';
import { CarouselContainer } from '../styles/slider';
import ShowCategories from '../components/showRecipes/ShowCategories';
import { db } from '../firebase/config';
import { getDocs, doc, collection, query } from 'firebase/firestore';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

const breakPoints = [
	{ width: 300, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1000, itemsToShow: 4 },
	{ width: 1200, itemsToShow: 5 },
	{ width: 1400, itemsToShow: 6 },
];

export const getServerSideProps = async () => {
	
	const querySnapshot = await getDocs(collection(db,'recipes'));
	let recipes= [];

	querySnapshot.forEach((doc) => {
		recipes.push({...doc.data(), id: doc.id})
	})

	return {
		props: { recipes: JSON.stringify(recipes) || null},
		
	};
	
};

export default function Home({recipes}) {
	//const { documents: recipesUser } = useCollection('recipes');
	
	const { user } = useAuthContext();
	const recipesReadable = JSON.parse(recipes)
  const recipesData = Array.from(recipesReadable);

	return (
		<div className={styles.container}>
			<Head>
				<title>pa'ella</title>
				<meta name='description' content='De recepten' />
				<link rel='icon' href='/images/favicon.ico' />
			</Head>

			<div className={styles.container}>
				<Navbar />
				<Banner imgUrl='/images/ellas.jpg' />
				<h1 className={styles.title}>Wat eten we vandaag?</h1>
				<div className={styles.image__container}></div>
				<div className={styles.list}>
					{(user && recipesData?.find(recipe => recipe.userId === user.uid)) && (
						<div>
							<h4 className={styles.section__title}>Mijn recepten</h4>
							<CarouselContainer className={styles.CarouselContainer}>
								<Carousel breakPoints={breakPoints}>
									{recipesData?.map(
										recipe =>
											recipe.userId === user.uid && (
												<li
													key={recipe.id}
													className={styles.recipe__listitems}
												><Link href={`/recipe-detail/${recipe.id}`}>
													<div>
														<h3 className={styles.recipe__title}>
															{recipe.title}
														</h3>
														<h4 className={styles.recipe__category}>
															{recipe.methodTime}
														</h4>
														<Image
															src={recipe.image}
															alt='Dish'
															width={200}
															height={150}
															objectFit='cover'
														></Image>
													</div></Link>
												</li>
											)
									)}
								</Carousel>
							</CarouselContainer>
						</div>
					)}
				</div>
				<ShowCategories
					title='Ontbijt'
					category='breakfast'
					CarouselContainer={CarouselContainer}
					recipesData={recipesData}
				/>
				<ShowCategories
					title='Salade'
					category='salad'
					recipesData={recipesData}
				/>
				<ShowCategories
					title='Soep'
					category='soup'
					recipesData={recipesData}
				/>
				<ShowCategories
					title='Voorgerecht'
					category='starter'
					recipesData={recipesData}
				/>
				<ShowCategories
					title='Snack'
					category='snack'
					recipesData={recipesData}
				/>
				<ShowCategories
					title='Maaltijd'
					category='dinner'
					recipesData={recipesData}
				/>
				<ShowCategories
					title='Dessert'
					category='dessert'
					recipesData={recipesData}
				/>
			</div>
			<Footer />
		</div>
	);
}
