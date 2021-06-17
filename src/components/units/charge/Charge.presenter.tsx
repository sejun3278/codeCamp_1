import { 
    ChargeMainDiv, ChargeCloseDiv, ChargeTitle, ChargeBillDiv, ChargeSelectPriceDiv, ChargeSelectListDiv, ChargeSelect, ChargeSubmit
    
    // ChargeBillGridDiv, ChargeBillTitleDiv, ChargeBillPrice, ChargeBillInput, 

} from './Charge.style';

export default function ChargeUI({
    setChargeModal,
    userInfo,
    setPoint,
    point,
    charge,
    setComma,
    openSelect,
    setOpenSelect
}) {
    return(
        <ChargeMainDiv>
            <ChargeCloseDiv>
                <img alt='' src='/images/close.png' title='포인트 충전 닫기'
                     onClick={() => setChargeModal(false)}
                />
            </ChargeCloseDiv>
            <ChargeTitle>
                <img alt='' src='/images/chargeIcon.png'/>
                <p> 충전하실 금액을 선택해주세요! </p>
            </ChargeTitle>

            {/* <form onSubmit={}> */}
                <div>
                    <ChargeBillDiv>
                        <ChargeSelectPriceDiv
                            onClick={() => setOpenSelect(!openSelect)}
                        >
                            <div style={{ 'float' : 'left' }}> 
                                {point === 0 ? '포인트 선택' : setComma(point) + ' P' }
                            </div>
                            <div style={{ 'float' : 'right' }}> 
                                <img alt='' src='/images/chargeSelectIcon.png'
                                    style={ openSelect ? { 'transform' : 'rotate(180deg)' } : undefined }
                                /> 
                            </div>
                        </ChargeSelectPriceDiv>

                        {openSelect &&
                            <ChargeSelectListDiv>
                                {new Array(100, 500, 2000, 5000).map( (selecPoint, key) => {
                                    return(
                                        <ChargeSelect key={key}
                                            onClick={() => point !== selecPoint ? setPoint(selecPoint) : charge()}
                                            id={point === selecPoint ? 'selectPoint' : undefined}
                                            style={key === 3 ? { 'borderBottom' : 'none'  } : undefined}
                                        >
                                            {setComma(selecPoint)} P
                                        </ChargeSelect>
                                    )
                                })}
                            </ChargeSelectListDiv>
                        }

                    <ChargeSubmit type='button' value='충전하기'
                        onClick={charge}
                        style={point >= 100 ? { 'backgroundColor' : 'black' } : undefined}
                        title={point < 100 ? "100 포인트 이상부터 결제가 가능합니다." : "포인트 충전"}
                    />

                    </ChargeBillDiv>
                </div>


            {/* </form> */}
        </ChargeMainDiv>
    )
}