import {
    HeaderCategoryDiv, HeaderCategory
} from './LayoutNavigation.style';

export default function LayoutNavigationUI({
    router,
    moveUrl
}) {
    return(
        <HeaderCategoryDiv>
            <HeaderCategory 
                style={(router.route.includes('/board') || router.route === "/") ? { 'color' : 'black' } : undefined}
                onClick={() => moveUrl('/')}
            > 
                자유게시판 
            </HeaderCategory>
            <HeaderCategory
                style={router.route.includes('/market') ? { 'color' : 'black' } : undefined}
                onClick={() => moveUrl('/market')}
            > 
                중고마켓 
            </HeaderCategory>
            <HeaderCategory
                id='noneBorder'
                style={router.route.includes('/myPage') ? { 'color' : 'black' } : undefined}
                onClick={() => moveUrl('/myPage')}
            > 
                마이페이지 
            
            </HeaderCategory>
        </HeaderCategoryDiv>
    )
}