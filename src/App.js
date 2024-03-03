import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './pages/Blog/Blog'
import Contacts from './pages/Contacts/Contacts'
import { ErrorPage } from './pages/ErrorPage/Error'
import InfoAboutShopForBuyers from './pages/InfoAboutShopForBuyers/InfoAboutShopForBuyers'
import MainPage from './pages/MainPage/MainPage'
import Shop from './pages/Shop/Shop'
import UsersDesiredItems from './pages/UsersDesiredItems/UsersDesiredItems'
import Orders from './pages/Orders/Orders'
import Bicini from './pages/Clothes/Bicini/Bicini'
import News from './pages/Clothes/News/News'
import Pyjamas from './pages/Clothes/Pyjamas/Pyjamas'
import Body from './pages/Clothes/Body/Body'
import Sales from './pages/Clothes/Sales/Sales'
import Underpants from './pages/Clothes/Underpants/Underpants'
import AboutUs from './pages/AboutUs/AboutUs'
import DeliveryPayment from './pages/DeliveryPayment/DeliveryPayment'
import { Axios } from 'axios'
import { Default } from '../src/pages/SortItemsPages/Default/Default.jsx'
import { FromCheapToExpensive } from './pages/SortItemsPages/FromCheapToExpensive/FromCheapToExpensive'
import { FromExpensiveToCheap } from './pages/SortItemsPages/FromExpensiveToCheap/FromExpensiveToCheap'
import { NewItems } from './pages/SortItemsPages/News/NewItems'
import { PopularItems } from './pages/SortItemsPages/Popular/PopularItems'
import { SalesItems } from './pages/SortItemsPages/Sales/SalesItems'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<MainPage />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route
                        path="/InfoForUsers"
                        element={<InfoAboutShopForBuyers />}
                    />
                    <Route path="/blogs" element={<Blog />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/desired" element={<UsersDesiredItems />} />
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/orders" element={<Orders />} />
                    {/* Clothes */}
                    <Route path="/bicini" element={<Bicini />} />
                    <Route path="/body" element={<Body />} />
                    <Route path="/news" element={<News />} />
                    <Route
                        path="/pyjamas"
                        element={<Pyjamas />}
                        loader={<Axios />}
                    />
                    <Route
                        path="/sales"
                        element={<Sales />}
                        loader={<Axios />}
                    />
                    <Route
                        path="/underpants"
                        element={<Underpants />}
                        loader={<Axios />}
                    />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/delivery" element={<DeliveryPayment />} />
                    <Route path="/default" element={<Default />} />
                    <Route
                        path="/fromCheapToExpensive"
                        element={<FromCheapToExpensive />}
                    />
                    <Route
                        path="/fromExpensiveToCheap"
                        element={<FromExpensiveToCheap />}
                    />
                    <Route path="/newItems" element={<NewItems />} />
                    <Route path="/popular" element={<PopularItems />} />
                    <Route path="/salesItems" element={<SalesItems />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
