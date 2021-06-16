import ChargeUI from './Charge.presenter';
import { useContext, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { CREATE_POINT } from './Charge.queries';

import { GlobalContext } from '../../../../pages/_app';
import { setComma } from '../../../commons/libraries/validations';
import { useMutation } from '@apollo/client';

export default function ChargePage() {
    const { setChargeModal, userInfo, setUserInfo } = useContext(GlobalContext)
    const [ point, setPoint ] = useState(0);
    const [ createPoint ] = useMutation(CREATE_POINT);

    useEffect( () => {
        setPoint(0);

    }, [point < 0])

    const pointRef = useRef<HTMLInputElement>();
    // 결제하기
    const charge = (event) => {
        event.preventDefault();

        if(point < 100) {
            pointRef.current.focus();
            
            alert('포인트 충전은 100원 이상부터 가능합니다.')
            return;

        } else {
            if(window.confirm(setComma(point) + ' 포인트 충전을 진행하시겠습니까?')) {
                // setChargeModal(false);

                // @ts-ignore
                const IMP = window.IMP;
                IMP.init("imp89386405"); 
                
                IMP.request_pay({ // param
                    pg: "html5_inicis",
                    pay_method: "card",
                    // merchant_uid: "ORD20180131-312321312",
                    name: "포인트 충전 ( " + setComma(point) + " P )",
                    amount : point,
                    buyer_email: userInfo?.email,
                    buyer_name: userInfo?.name,
                    buyer_tel: "010-4242-4242",
                    buyer_addr: "서울특별시 강남구 신사동",
                    buyer_postcode: "01181",
                    m_redirect_url : "/"

                }, 
                async (rsp) => { // callback
                    if (rsp.success) {
                        await createPoint({
                            variables : {
                                impUid : rsp.imp_uid
                            },
                            // context : {
                            //     headers : {
                            //         authorization : 
                            //             "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGMzMWFkZGFiZjNkODAwMjk3YmE0MGMiLCJwZXJtaXNzaW9uIjowLCJpYXQiOjE2MjM4MjE4ODgsImV4cCI6MTYyMzkwODI4OCwic3ViIjoiYWNjZXNzVG9rZW4ifQ.it0ajxqHh_Ehm9hWh6fxxyttLVSvqLMOrPV_v2Iget_eDsIatBIaGbcAixIZ3PB33yGr-Akw08QL6TrxZ94STg"
                            //     }
                            // }
                        })

                        alert(setComma(point) + ' 포인트가 충전되었습니다.');

                        // 포인트 최신화하기
                        const copyUserInfo = { ...userInfo };
                        console.log(copyUserInfo)
                        
                        copyUserInfo.userPoint.amount = Number(copyUserInfo.userPoint.amount) + Number(point);
                        setUserInfo(copyUserInfo);

                        setChargeModal(false);

                    } else {
                        alert(rsp.error_msg)
                        return;
                    }

                });
            }
        }
    }

    return(
        <>
            <Head>
                <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
                <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
            </Head>

            <ChargeUI 
                setChargeModal={setChargeModal}
                userInfo={userInfo}
                point={point}
                setPoint={setPoint}
                charge={charge}
                pointRef={pointRef}
                setComma={setComma}
            />
        </>
    )
}