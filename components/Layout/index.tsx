import Navbar from "./Navbar"
import Footer from "./Footer"
import GoogleAnalytics from "./GoogleAnalytics"

const Layout = ({ children }: any) => {
    return (
        <div className="bg-main">
            <Navbar />
            {children}
            <Footer />
            <GoogleAnalytics />
        </div>
    )
}
export default Layout