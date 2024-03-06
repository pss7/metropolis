import Table from "../components/Table";
import Breadcrumb from "../components/Breadcrumb";
import Main from "../components/section/Main";
import Tab from "../components/Tab";
import Title from "../components/Title";


function Home01() {

    return (
        <>
            <Table />
        </>
    )

}

function Home02() {

    return (
        <>
            <Table />
        </>
    )

}

function Home() {
    return (
        <Main>
            <div className="container">
                <div className='main'>


                    {/* <Breadcrumb /> */}
     


                    <Title className="titleText3" level={3} text="한국관광콘텐츠랩에 오신 걸 환영합니다." />


                    <div className="layoutWrap">
                        <Home01 />
                        <Home02 />
                    </div>

                    <Tab />

                </div>
            </div>
        </Main>
    )
}

export default Home