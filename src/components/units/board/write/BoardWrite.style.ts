import styled from '@emotion/styled';

export const Wrapper = styled.div`
    min-width : 360px;
    width : 100%;
`

export const DivGrid = styled.div`
    margin-top : 70px;
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

    b {
        color : #bababa;
        margin-left : 5px;
    }
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
    min-height : 130px;

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

export const AddImageDiv = styled.div`
    display : inline-block;
    width : 80px;
    height : 80px;
    margin-right : 7px;

    label {
        text-align : center;
        display: inline-block; 
        /* padding: .5em .75em;  */
        height : 70px;
        width : 70px;
        /* line-height: normal;  */
        vertical-align: middle; 
        background-color: #BDBDBD; 
        cursor: pointer; 
        border: 1px solid #ebebeb; 
        border-bottom-color: #e2e2e2; 
        border-radius: .25em;
        
        @media (max-width : 425px) {
            width : 100%;
        }
    }

    input[type=file] { 
        /* 파일 필드 숨기기 */ 
        position: absolute; 
        width: 1px; 
        height: 1px; 
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip:rect(0,0,0,0);
        border: 0;
    }
`

export const ShowThumbImage = styled.img`
    width : 70px;
    height : 70px;

`

export const ShowThumbDiv = styled.div`
    display : inline-block;
    height : 70px;
    width : 70px;
    margin-right : 13px;
    background-repeat : no-repeat;
    background-size : cover;

    label {
        text-align : center;
        display: inline-block; 
        /* padding: .5em .75em;  */
        height : 70px;
        width : 70px;
        /* line-height: normal;  */
        /* vertical-align: middle;  */
        background-color: #BDBDBD; 
        cursor: pointer; 
        border: 1px solid #ebebeb; 
        border-bottom-color: #e2e2e2; 
        border-radius: .25em;
        
        @media (max-width : 425px) {
            width : 100%;
        }
    }

    input[type=file] { 
        /* 파일 필드 숨기기 */ 
        position: absolute; 
        width: 1px; 
        height: 1px; 
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip:rect(0,0,0,0);
        border: 0;
    }
`;


export const ImageAddDiv = styled.div`

`
export const ImageDiv = styled.div`
    float : left;
    width : 78px;
    height : 78px;
    margin-right : 15px;
    background-size : cover;
    background-repeat : no-repeat;

    label {
        text-align : center;
        display: inline-block;
        /* padding: .5em .75em;  */
        height : 78px;
        width : 78px;
        /* line-height: normal;  */
        vertical-align: middle; 
        background-color: #BDBDBD; 
        cursor: pointer; 
        border: 1px solid #ebebeb; 
        border-bottom-color: #e2e2e2; 
        border-radius: .25em;
        
        @media (max-width : 425px) {
            width : 100%;
        }
    }

    input[type=file] { 
        /* 파일 필드 숨기기 */ 
        position: absolute; 
        width: 1px; 
        height: 1px; 
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip:rect(0,0,0,0);
        border: 0;
    }
`


export const AddImageShowDiv = styled.div`
    margin-top : 15px;
    font-size : 14px;
`

export const RemoveImageIcon = styled.img`

`

export const ContentsDiv = styled.div`

`