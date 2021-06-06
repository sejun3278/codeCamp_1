import styled from '@emotion/styled';

export const Wrapper = styled.div`
    min-width : 360px;
    width : 100%;
`

export const DivGrid = styled.div`
    display : grid;
    grid-template-columns : 25% 50% 25%;

    @media (max-width : 800px) {
        grid-template-columns : 20% 60% 20%;
    }

    @media (max-width : 600px) {
        grid-template-columns : 10% 80% 10%;
    }
`

export const TitleDiv = styled.div`
    height : 120px;
    text-align : center;
    line-height : 90px;
    font-size : 18px;
    font-weight : bold;
`

export const HalfGrid = styled.div`
    display : grid;
    grid-template-columns : 50% 50%;
    
`

export const InputTitle = styled.div`
    font-weight : bold;
    height : 30px;
    font-size : 14px;
`

export const InputContents = styled.input`
    width : 100%;
    height : 40px;
    line-height : 40px;
    padding-left : 10px;
`

export const TextAreaContents = styled.textarea`
    height : 480px !important;
    resize : none;
    width : 100%;
    padding : 10px;
    margin-bottom : 20px;
`

export const HostDiv = styled.div`

`

export const HostNumberDiv = styled.div`
    float : left;
    width : 80px;
`
export const InputDiv = styled.div`
    min-height : 100px;

    input[type=text], input[type=password], textarea {
        border : solid 2px #bdbdbd;
        background-color : #ffffff;
        box-sizing : border-box;
        height : 40px;
    }
`

export const HostNumberInput = styled.input`
    width : 70px;
    line-height : 30px;
    height : 33px !important;
    text-align: center;
`

export const HostNumberButton = styled.input`
    line-height : 27px;
    background-color: black;
    color: white;
    font-size : 12px;
    cursor: pointer;
`

export const ImageDiv = styled.div`
    min-width : 160px;
    height : 100px;
`

export const ImageDivs = styled.div`
    float : left;
    width : 65px;
    background-color: #BDBDBD;
    height : 70px;
    margin-right : 25px;

`

export const ImageContents = styled.div`
	width: 78px;
	height: 78px;
	background-color: #bdbdbd;
	margin-right: 24px;
	outline: none;
	border: none;
	cursor: pointer;
    text-align: center;
    font-size : 13px;
`

export const ImageAdd = styled.input`
    width : 78px;
    height : 78px;
    opacity : 0;
    cursor: pointer;
    /* display : none; */
`

export const ImageShowDiv = styled.div`
    width : 78px;
    text-align : center;
    /* position : absolute; */
    margin-top : -60px;
    font-size : 13px;

    img {
        width : 78px;
        height : 78px;
        margin-top : -20px;
    }
`

export const SetMainDiv = styled.div``
export const SetMain = styled.div`
    float : left;
    width : 90px;
`
export const SelectMain = styled.input`
    cursor: pointer;
`

export const SelectLabel = styled.label`
    font-size : 12.5px;
    font-weight : bold;
    cursor: pointer;
`

export const SubmitDiv = styled.div`
    text-align : center;
    height : 100px;
`

export const Sumbit = styled.input({
        width : 150,
        height : 40,
        fontWeight : 'bold',
        fontFamily : "Noto Sans CJK KR"
    },
    props => ({ backgroundColor : props.color, borderColor : props.color })
)

export const UploadButton = styled.button`
	width: 78px;
	height: 78px;
	background-color: #bdbdbd;
	margin-right: 24px;
	outline: none;
	border: none;
	cursor: pointer;
`;

export const ImageRemoveBtn = styled.img`
    cursor: pointer;
    position : absolute;
    width : 20px !important;
    height : 20px !important;
    margin-left : 58px;
`