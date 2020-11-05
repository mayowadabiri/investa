import Footer from "../containers/footer"
import Header from "../containers/header"

const Layout = ({children}) =>{
    return(
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default Layout