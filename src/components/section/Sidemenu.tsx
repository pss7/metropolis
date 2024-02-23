import { Link } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function Sidemenu() {

    function Nav() {

        return (
            <nav>
                <h1 className='tit'>
                    side
                    <br />
                    menu
                </h1>
                <ul>
                    <li>
                        <Link>
                            1
                        </Link>
                    </li>
                    <li>
                        <Link>
                            2
                        </Link>
                    </li>
                    <li>
                        <Link>
                            3
                        </Link>
                    </li>
                </ul>
            </nav>
        )

    }

    return (
        <section id="sideMenuWrap">

            <Link>
                <Nav />
                <KeyboardDoubleArrowRightIcon />
            </Link>

        </section>
    )

}

export default Sidemenu