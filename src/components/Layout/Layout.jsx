import { AppBar } from "components/AppBar/AppBar"
import { Wrapper } from "./Layout.styled"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Loader } from "utils/loader"


export const Layout = () => {
    return (
        <Wrapper>
            <AppBar />{' '}
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Wrapper>
    );
};