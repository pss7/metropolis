import Tab from "../components/Tab"
import Breadcrumb from "../components/Breadcrumb"
import Main from "../components/section/Main"

function MyPage() {
    return (

        <Main>

            <div className="myPageWrap">
                <div className="container">
                    <div className="myPage">

                        <Breadcrumb />
                        <Tab />

                    </div>
                </div>
            </div>

        </Main>

    )
}

export default MyPage