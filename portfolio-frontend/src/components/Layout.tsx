import React,{ReactNode} from "react";
import Navigation from "./Navigation";
import { MdCopyright } from "react-icons/md";

interface LayoutProps {
    children: ReactNode;  // any JSX content to be rendered within the layout component
}
const Layout = ({children}: LayoutProps) => {

    return (
        <>
        <Navigation />
        <main>
            {children}
        </main>
        <footer>
            <p>
                <MdCopyright />
                {new Date().getFullYear()}
                My Portfolio
            </p>
        </footer>
        </>
    );
}
export default Layout;