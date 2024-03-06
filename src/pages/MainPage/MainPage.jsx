import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import style from './Header.module.scss'
import Slider from '../../components/Slider/Slider'
import MiddlePart from '../../components/Middle-part/Middle-part'

export default function MainPage() {
    const { container, header, slider } = style
    return (
        <div className={container}>
            <Header className={header} />
            <Slider className={slider} />

            <MiddlePart />
            <Footer />
        </div>
    )
}
