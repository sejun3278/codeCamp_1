import { useRouter } from "next/router";

const TokenTest1Page = () => {
    const router = useRouter();

    const move = () => {
        router.push('/tokentest/tokentest2');
    }

    return <button onClick={move}> 회원전용 페이지로 이동하기 </button>
};

export default TokenTest1Page;