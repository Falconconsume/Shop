import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { IoLocation } from 'react-icons/io5'
import style from './Contacts.module.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ReversedSection from './ButtonGroups/ReversedSection'

export default function Contacts() {
    const { title, container, flexList, listOfTelephonce } = style
    return (
        <div>
            <Header />
            <div className={container}>
                <div>
                    <h6 className={title}>КОНТАКТИ</h6>
                    <ul>
                        <h6 className={flexList}>
                            {<FaPhoneAlt />}Зателефонувати нам
                        </h6>
                        <ul className={listOfTelephonce}>
                            <a tel="+38 (000) 000 00 00">+38 (000) 000 00 00</a>
                            <a tel="+38 (000) 000 00 00">+38 (000) 000 00 00</a>
                            <a tel="+38 (000) 000 00 00">+38 (000) 000 00 00</a>
                        </ul>
                        <h6 className={flexList}>
                            {<MdEmail />} Електронна пошта
                        </h6>
                        <span>support@support.com.ua</span>
                        <h6 className={flexList}>
                            {<IoLocation />} Адреса офісу
                        </h6>
                        <span>м. Київ, вул. Київська</span>
                    </ul>
                </div>
                <ReversedSection />
            </div>
            <Footer />
        </div>
    )
}
