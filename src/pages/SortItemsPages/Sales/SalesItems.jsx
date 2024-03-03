import React from 'react'
import ClothesCards from '../../Clothes/Underpants/components/ClothesCards'
import Header from '../../../components/Header/Header'
import { Container } from '@mui/material'
import Filter from '../../Shop/Filter/Filter'
import Footer from '../../../components/Footer/Footer'
import style from '../Sort.module.scss'

export function SalesItems() {
    return (
        <>
            <Header />
            <Container maxWidth="lg" breakPoint="lg">
                <div className={style.flexFilter}>
                    <div className={style.filter}>
                        <Filter />
                    </div>
                    <ClothesCards item="Акційні" category="sales" />
                </div>
            </Container>
            <Footer />
        </>
    )
}
