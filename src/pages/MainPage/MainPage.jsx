import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import style from './Header.module.scss'

export default function MainPage() {
	const {container} = style;
	return (
		<div className={container}>
			<Header/>
			<Footer/>
		</div>
	)
}