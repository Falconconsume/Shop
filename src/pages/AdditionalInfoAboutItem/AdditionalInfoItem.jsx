import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import style from './AdditionalInfoItem.module.scss'
import { ways } from '../../data/data'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Color from '../components/Colors/ColorsSquare'
import ButtonBrown from '../../components/BrownButton/ButtonBrown'
import ClothesCards from '../Clothes/Underpants/components/ClothesCards'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../store/slices/binSlice'
import { toast, ToastContainer } from 'react-toastify'
import { useSpring, animated } from 'react-spring'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function AdditionalInfoItem() {
    const {
        flex,
        blockInfoItem,
        title,
        price,
        button,
        info,
        listCharacteristics,
        drop,
        dropContent,
        active,
        img,
        similar,
    } = style
    const dispatch = useDispatch()
    const cardItems = useSelector((state) => state.cart)

    const { id } = useParams()
    const [activeContain, setActiveContain] = useState(false)
    const [activeType, setActiveType] = useState(false)
    const [cardSaving] = useLocalStorage('cards')



    const product = ways.find((e) => e.id === Number(id))
    function handleDropListContain(e) {
        setActiveContain(!activeContain)
        e.stopPropagation()
    }

    const addToCard = () => {
        try {
            const existingItem = cardItems.find(
                (cartItem) => cartItem.id === Number(id)
            )

            if (existingItem) {
                toast.success('Цей товар вже у вашому кошику')
            } else {
                const updatedCardItems = [...cardItems, product]
                cardSaving(updatedCardItems)
                dispatch(addItem(product))
                toast.success('Товар доданий до кошика')
            }
        } catch (error) {
            console.error('Error in addToCard:', error)
        }
    }

    function handleDropListFacture(e) {
        setActiveType(!activeType)
        e.stopPropagation()
    }

    return (
        <>
            <Header />
            <Container maxWidth="lg" breakPoint="lg">
                <div className={flex}>
                    <img src={product.image} className={img} alt="" />
                    <div className={blockInfoItem}>
                        <h2 className={title}>{product.title}</h2>
                        <p>{product.description}</p>
                        <p className={price}>{product.price}</p>
                        <div className={flex}>
                            <Color />
                            {!product.disabled && (
                                <li onClick={addToCard}>
                                    <ButtonBrown
                                        content="Додати до кошика"
                                        className={button}
                                    />
                                </li>
                            )}
                        </div>
                        <p className={info}>Характеристики</p>
                        <ul className={listCharacteristics}>
                            {product.characteristics.map((e = [], index) => {
                                return <li key={index}>{e}</li>
                            })}
                        </ul>
                        {product.contain && (
                            <div onClick={handleDropListContain}>
                                <p className={drop}>
                                    Склад{' '}
                                    <span>{activeContain ? '-' : '+'}</span>
                                </p>
                                <div
                                    className={`${dropContent} ${activeContain ? active : ''}`}
                                >
                                    {product.contain}
                                </div>
                            </div>
                        )}
                        {product.facture && (
                            <div onClick={handleDropListFacture}>
                                <p className={drop}>
                                    Тип <span>{activeType ? '-' : '+'}</span>
                                </p>
                                <div
                                    className={`${dropContent} ${activeType ? active : ''}`}
                                >
                                    {product.facture}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <ClothesCards
                    className={similar}
                    item="Схожі товари"
                    category="similar"
                />
                <ToastContainer />
            </Container>
            <Footer />
        </>
    )
}
