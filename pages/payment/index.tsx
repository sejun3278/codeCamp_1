import { useState } from "react";
import Head from 'next/head';
import { gql, useMutation } from '@apollo/client'

const CREATE_POINT = gql`
    mutation createPointTransactionOfLoading($impUid : ID!) {
        createPointTransactionOfLoading(impUid : $impUid) {
            _id
            status
        }
    }
`

const Paymentpage = () => {
    const [ amount, _ ] = useState(200);
    const [ createPoint ] = useMutation(CREATE_POINT);

    const onclickPayment = () => {
        // @ts-ignore
        const IMP = window.IMP;
        IMP.init("imp89386405"); 

        IMP.request_pay({ // param
            pg: "html5_inicis",
            pay_method: "card",
            // merchant_uid: "ORD20180131-312321312",
            name: "노르웨이 회전 의자",
            amount,
            buyer_email: "gildong@gmail.com",
            buyer_name: "ㅁㄴㅇ",
            buyer_tel: "010-4242-4242",
            buyer_addr: "서울특별시 강남구 신사동",
            buyer_postcode: "01181",
            m_redirect_url : "/"

          }, 
          async (rsp) => { // callback
            if (rsp.success) {
                console.log(rsp)
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

                alert('성공')
            } else {
                alert('실패')
            }

          });
    }

    return(
        <>
            <Head>
                <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
                <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
            </Head>

            <div> 결제금액 : {amount} 원 </div>
            <button onClick={onclickPayment}>
                결제하기
            </button>
        </>
    )
}

export default Paymentpage;