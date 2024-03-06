import React from 'react'

export default function AdditionalInfoItem({ selectedItem }) {
    return (
        <div>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
            <p>{selectedItem.price}</p>
            {/* Add more details as needed */}
        </div>
    )
}
