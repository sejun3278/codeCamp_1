import { useCallback } from 'react';
import { useMemo, useState } from 'react';
import PresenterPage from './presenter';

const Container = () => {
    // useMemo : 변수를 기억함 (렌더링 되어도 변수값은 변경되지 않는다.)
    // let useMemoTest = useMemo( () => Math.random(), [])
    // console.log(useMemoTest)

    const [ count, setCount ] = useState(0);

    // useCallback : 함수를 기억함 
    const onClickCountState = useCallback( () => {
        // 함수에 useCallback 을 사용하면 setState 는 작동하지 않는다 = 렌더되지 않는다.
        console.log(count)
        setCount(count + 1)

        // 추천하는 방법은 prev 를 사용한다.
        // setCount(prev => prev + 1)

        console.log(count) // 위에서 setState 를 하더라도 값은 기존 값 (변경 전 값) 을 출력한다.
    }, []) // 의존성 배열에 해당 값을 넣어줄 때에만 함수가 새로 쓰여진다.

    console.log('컨테이너 렌더링');

    return(
        <>
            <div> 카운트 : {count} </div>
            <button onClick={() => setCount(prev => prev + 1)}> 카운트 + </button>
            <div> 컨테이너 (부모) 입니다.</div>
            <PresenterPage
            />
        </>
    )
}

export default Container