import { memo } from "react";

const Presenter = () => {
    console.log('프레젠터 렌더링');

    return (
        <div>
            프레젠터 (자식) 입니다.
            {/* {count} */}
        </div>
    )
}

export default memo(Presenter);