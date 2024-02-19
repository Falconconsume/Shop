import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Filter from './Filter/Filter'
import style from './Shop.module.scss'

export default function Shop() {
    const { container, filter } = style
    return (
        <div>
            <Header />
            <div className={container}>
                <aside className={filter}>
                    <Filter />
                </aside>
				<main>
					
				</main>
            </div>
            <Footer />
        </div>
    )
}
