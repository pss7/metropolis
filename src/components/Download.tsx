import { FaRegFileWord } from "react-icons/fa";
import { RiFileExcel2Line } from "react-icons/ri";
import { FaRegFilePdf } from "react-icons/fa";

function Download() {

    return (
        <div className="downLoadBtnWrap">
            <ul className="downLoadBtn">
                <li>
                    <button className="word">
                        <FaRegFileWord />
                        <span className="blind">
                            워드 다운로드
                        </span>
                    </button>
                </li>
                <li>
                    <button className="excel">
                        <RiFileExcel2Line />
                        <span className="blind">
                            엑셀 다운로드
                        </span>
                    </button>
                </li>
                <li>
                    <button className="pdf">
                        <FaRegFilePdf />
                        <span className="blind">
                            pdf 다운로드
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    )

}

export default Download