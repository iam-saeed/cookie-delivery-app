import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

const Layout = ({ children }) => {
return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
)
}

export default Layout;