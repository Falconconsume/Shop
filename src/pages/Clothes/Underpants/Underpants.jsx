import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Filter from '../../Shop/Filter/Filter'
import ClothesCards from './components/ClothesCards'
import style from './Underpants.module.scss'
import { Container } from '@mui/material'

export default function Underpants() {
    const { filter, flexFilter } = style
    return (
        <div>
            <Header />
            <Container maxWidth="lg" breakPoint="lg">
                <div className={flexFilter}>
                    <div className={filter}>
                        <Filter />
                    </div>
                    <ClothesCards item="Трусики" category="underpants" />
                </div>
            </Container>
            <Footer />
        </div>
    )
}
