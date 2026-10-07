import { Outlet } from "react-router-dom";
import { Header } from '../components/Header.jsx'

export function RootLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}