import styled from '@emotion/styled';

const Wrapper = styled.div`
    min-width : 360px;
    width : 100%;
`

const widthoutNavigation = [
    '/board',
    '/query'
]

import Headers from '../../../commons/utils/layout/Header.container';
import { useRouter } from 'next/router';
import { createContext, useState } from 'react';

export const LayoutContext = createContext({
    text : ""
})

const Layout = ({ children }) => {
    const router = useRouter()
    const isNavigation = !widthoutNavigation.includes(router.pathname)

    const [ text, settest ] = useState("테스트")

    const value = {
        text
    }

    return(
        <LayoutContext.Provider value={value}>
            <Wrapper>
                {/* <Headers /> */}
            </Wrapper>
        </LayoutContext.Provider>
    )
}

export default Layout