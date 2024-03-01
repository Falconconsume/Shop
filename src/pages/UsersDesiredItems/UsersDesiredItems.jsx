import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import style from './UserDesiredItems.module.scss'
import ProductPage from '../../components/Product-page/Product-page'

export default function UsersDesiredItems() {
    const { container, title } = style
    return (
        <div>
            <Header />
            <div className={container}>
                <div classname={title}>
                    <h1>Обране</h1>
                    <p>Ваш список порожній</p>
                    <ProductPage />
                </div>
            </div>
            <Footer />
        </div>
    )
}
