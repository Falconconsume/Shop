import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Filter from './Filter/Filter'
import style from './Shop.module.scss'
import { Container } from '@mui/material'
import MainPart from './MainPart/MainPart'
import ClothesCards from '../Clothes/Underpants/components/ClothesCards'

export default function Shop() {
    const { filter, flex, flexCards } = style
    return (
        <div>
            <Header />
            <Container maxWidth="lg" breakPoint="lg">
                <div className={flex}>
                    <aside className={filter}>
                        <Filter />
                    </aside>
                    <main className={flexCards}>
                        <MainPart />
                        <ClothesCards category="default" active={false} />
                    </main>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
