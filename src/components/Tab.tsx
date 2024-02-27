import { Link } from "react-router-dom";
import { useState } from "react";
import ReportCard from "./ReportCard";
import Table from "./Table";

function Tab() {

    const tabData = [
        {
            id: 0,
            title: '일간',
            description: <ReportCard />
        },
        {
            id: 1,
            title: '주간',
            description: <Table />
        },
        {
            id: 2,
            title: '월간',
            description: <Table />
        },
        {
            id: 3,
            title: '분기',
            description: <Table />
        },
        {
            id: 4,
            title: '연간',
            description: <Table />
        },
    ]

    const [tabMenu, setTab] = useState(0);

    return (
        <>
            <div className="tabListWrap">
                <ul className="tabList">
                    {
                        tabData.map((tab, key) => (
                            <li key={key} >
                                <Link className={tabMenu === tab.id ? 'active' : ''} to="#" onClick={() => {
                                    setTab(tab.id)
                                }}>
                                    {tab.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <div className="tabContentWrap">
                    {
                        tabData.filter(tabData => tabMenu === tabData.id).map((tab) => (
                            <div className='tabcontent'>
                                {tab.description}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )

}

export default Tab