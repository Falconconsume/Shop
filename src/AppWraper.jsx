import React from 'react'
import App from './App'
import Slider from './components/Slider/Slider'
import MiddlePart from './components/Middle-part/Middle-part'

export default function AppWrapper() {
    return (
        <div>
            <App />
            <Slider />
            <MiddlePart />
        </div>
    )
}
