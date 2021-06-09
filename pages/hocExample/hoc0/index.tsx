const Container = () => {
    return(
        <>
            <div> 컴테이너 입니다. </div>
            <Presenter aaa="aaaProps" />
        </>
    )
};

const Presenter = (props) => {
    return <div> 프레젠터 입니다. props : {props} </div>
}

export default Container;