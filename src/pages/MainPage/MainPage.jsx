import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import style from './Header.module.scss'
import CategoriesCard from "../../components/Categories-card/Categories-card";
import categories from "../../data/categories_data";


export default function MainPage() {
	const {container} = style;
	return (
		<div className={container}>
			<Header/>
			<CategoriesCard categories={categories}/>
			<Footer/>
		</div>
	)
}