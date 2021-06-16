import { 
    ChargeMainDiv, ChargeCloseDiv, ChargeTitle, ChargeBillDiv, ChargeBillGridDiv, ChargeBillTitleDiv, ChargeBillPrice, ChargeBillInput, ChargeSubmit

} from './Charge.style';

export default function ChargeUI({
    setChargeModal,
    userInfo,
    setPoint,
    point,
    charge,
    pointRef,
    setComma
}) {
    return(
        <ChargeMainDiv>
            <ChargeCloseDiv>
                <img alt='' src='/images/close.png' title='포인트 충전 닫기'
                     onClick={() => setChargeModal(false)}
                />
            </ChargeCloseDiv>
            <ChargeTitle> <img alt='' src='/images/charge.png'/> 포인트 충전 </ChargeTitle>

            <form onSubmit={charge}>
            <ChargeBillDiv>
                <ChargeBillGridDiv>
                    <ChargeBillTitleDiv> 충전 전 포인트 </ChargeBillTitleDiv>
                    <ChargeBillPrice> {setComma(userInfo?.userPoint?.amount)} P </ChargeBillPrice>
                </ChargeBillGridDiv>

                <ChargeBillGridDiv>
                    <ChargeBillTitleDiv> 충전 할 포인트 </ChargeBillTitleDiv>
                    <ChargeBillPrice> + <ChargeBillInput type='number' ref={pointRef} min={0} onChange={ (e) => setPoint(Number(e.target.value))}/> P </ChargeBillPrice>
                </ChargeBillGridDiv>

                <ChargeBillGridDiv>
                    <ChargeBillTitleDiv> 충전 후 포인트 </ChargeBillTitleDiv>
                    <ChargeBillPrice> <b> {setComma(Number(userInfo?.userPoint?.amount) + point)} P </b> </ChargeBillPrice>
                </ChargeBillGridDiv>
            </ChargeBillDiv>

            <ChargeSubmit type='submit' value='포인트 충전'
                title={point < 100 ? "100 포인트 이상부터 결제가 가능합니다." : "포인트 충전"}
                style={point < 100 ? { 'color' : '#ababab', 'cursor' : 'not-allowed' } : { 'color' : 'black', 'backgroundColor' : '#FFD600' } }
            />
            </form>
        </ChargeMainDiv>
    )
}