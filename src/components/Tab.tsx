import { Link } from "react-router-dom";
import { tabList } from "../data/data";
import { useState } from "react";

function Tab() {

    const [tab, setTab] = useState(false);


    return (
        <>
            <div className="tabListWrap">
                <ul className="tabList">
                    {
                        tabList.map((tabList, key) => (
                            <li key={key}>
                                <Link to="#" onClick={() => {

                                }}>
                                    {tabList.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="tabContentWrap">
                <div className="tabContent">
                    내용1
                </div>
                <div className="tabContent">
                    내용2
                </div>
                <div className="tabContent">
                    내용3
                </div>
                <div className="tabContent">
                    내용4
                </div>
                <div className="tabContent">
                    내용5
                </div>
            </div>
        </>
    )

}

export default Tab