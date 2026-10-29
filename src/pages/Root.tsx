import { Outlet } from "react-router-dom"
import Header from "../components/Layout/Header/Header"
import Footer from "../components/Layout/Footer/Footer"

// import type { NavItemInterface } from '../;
const Root = () => {
    return (
        <>
            <Header />
            <main >
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Root
