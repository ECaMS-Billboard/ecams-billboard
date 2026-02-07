import { Outlet } from "react-router-dom";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";

const MainLayout = () => {
    return(
        <>
            <Navigationbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;