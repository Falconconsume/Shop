import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Filter from './Filter/Filter'
import style from './Shop.module.scss'
import { Container } from '@mui/material'
import MainPart from './MainPart/MainPart'

export default function Shop() {
    const { filter, flex } = style
    return (
        <div>
            <Header />
            <Container maxWidth="lg" breakPoint="lg">
                <div className={flex}>
                    <aside className={filter}>
                        <Filter />
                    </aside>
                    <main>
                        <MainPart />
                    </main>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
