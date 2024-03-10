import React from 'react'
import style from './ClothesCards.module.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'

export default function FavoriteIcons({ desiredProductLove }) {
    const { colorForIcon, favoriteColorClick } = style
    return (
        <>
            <FavoriteIcon
                sx={{ color: 'red', fontSize: '25px' }}
                onClick={desiredProductLove}
                className={colorForIcon && favoriteColorClick}
            />
        </>
    )
}
