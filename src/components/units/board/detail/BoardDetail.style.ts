import styled from '@emotion/styled';

export const Wrapper = styled.div`
    min-width : 360px;
    width : 100%;
`

export const DivGrid = styled.div`
    margin-top : 70px;
    display : grid;
    grid-template-columns : 25% 50% 25%;

    @media (max-width : 1000px) {
        grid-template-columns : 15% 70% 15%;
    }

    @media (max-width : 600px) {
        grid-template-columns : 10% 80% 10%;
    }
`

export const PageWrapper = styled.div`
    margin-top : 40px;


`

export const PageWrapperGrid = styled.div`
    display : grid;
    grid-template-columns : 10% 80% 10%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);

    @media (max-width : 1000px) {
        display : block;
        box-shadow : none;
    }
`

export const MainDiv = styled.div`
`

export const WriterInfoDiv = styled.div({
    borderBottom : 'solid 1px',
    display : 'grid',
    gridTemplateColumns : '80% auto',
    paddingBottom : '15px'
},
    props => ({ borderColor : props.color })
)

export const WriterInfo = styled.div`
    margin-top : 40px;
`

export const WriterThumbnailDiv = styled.div`
    float : left;
`

export const WriterThumbnail = styled.img`
    width : 46.67px;
    height : 46.67px;
`

export const WriterNameDiv = styled.div`
    margin-left : 60px;
`

export const WriterName = styled.div`
    font-weight : bold;
    overflow:hidden; 
    text-overflow:ellipsis; 
    white-space:nowrap;
`

export const WriterDate = styled.div({
    fontSize : '13px',
    height : '20px',
    lineHeight : '25px'
},
    props => ({ color : props.color })
)

export const BoardContentsDiv = styled.div`
    margin-top : 60px;

`

export const BoardTitle = styled.div`
    font-size : 19px;
    font-weight : bold;
    font-family : 'Noto Sans CJK KR';
    word-spacing : -0.7px;
` 

export const BoardContents = styled.div`
    margin-top : 25px;
    font-size : 13px;
`

export const BoardYoutubeDiv = styled.div`
    margin-top : 100px;
    text-align : center;
`

export const BoardYoutube = styled.iframe`
    width : 100%;
    min-height : 300px;
`

export const BoardLikeAndDislikeDiv = styled.div`
    height : 100px;
    text-align : center;
    margin-top : 150px;

    div {
        width : 60px;
        display : inline-block;
    }
`

export const BoardLikeDiv = styled.div`
    
`

export const BoardDislikeDiv = styled.div`
    img {
        transform:rotate(0deg);
        -moz-transform: scaleX(-1); 
        -o-transform: scaleX(-1); 
        -webkit-transform: scaleX(-1); 
        transform: scaleX(-1);  
    }
`

export const BoardLikeAndDislikeIcon = styled.img`
    width : 20px;
    height : 18px;
    cursor: pointer;
`

export const BoardLikeAndDislikeCount = styled.div({
    fontSize : '13px'
},
    props => ({ color : props.color })
)

export const BoradOptionDiv = styled.div`

    text-align : center;
    margin-top : 50px;

    input[type=button] {
        display : inline-block;
        width : 120px;
        border : 1px solid #BDBDBD;
        height : 40px;
        line-height : 40px;
        margin : 0px 15px;
        background-color : white;
        font-weight : bold;
        font-size : 14px;
        box-sizing: border-box;
        border-radius : 5px;
        cursor: pointer;

        @media (max-width : 375px) {
            margin : 0px 5px;
        }
    }
`

export const BoardImagesDiv = styled.div`
    width : auto;
    /* height : 480px; */
    margin-top : 40px;
`

export const BoardImage = styled.div`
    width : 100%;
    margin : 10px 0px;
    text-align : center;

    img {
        max-width : 100%;
        border : solid 1px #ababab;

        /* width : 100%; */
        /* height : auto */
    }

`