
import Breadcrumb from "../components/Breadcrumb"
import Main from "../components/section/Main"
import Tab from "../components/Tab";
import Table from "../components/Table";

import Download from "../components/Download";
import Select from "../components/Select";


function MyPage() {

    return (

        <Main>

            <div className="myPageWrap">
                <div className="container">
                    <div className="myPage">

                        <Breadcrumb />
                        <Tab />
                        <Tab />
                        <Table />

                    </div>
                </div>
            </div>

        </Main>

    )
}

export default MyPage