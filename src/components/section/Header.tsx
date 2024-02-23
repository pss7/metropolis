import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Link } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function Header(props: any) {


    function Menu() {

        return (
            <div id='menuWrap'>

                <IconButton sx={{ padding: 0 }}>
                    <MenuIcon sx={{ color: '#fff', }} />
                </IconButton>

            </div>
        )

    }

    function Logo({ imageSrc, altText }: { imageSrc: string; altText: string }) {

        return (
            <div id='logoWrap'>
                <div className="logoBox">
                    <h1>
                        <Link>
                            LOGO
                            <img src={imageSrc} alt={altText} />
                        </Link>
                    </h1>
                </div>
            </div>
        )

    }

    function Search() {

        return (

            <div id='searchWrap'>
                <div className='searchBox'>
                    <input
                        id='search'
                        type='search'
                        placeholder='검색'
                    />
                    <label>
                        <SearchIcon sx={{ color: '#fff', }} />
                    </label>
                </div>
            </div>

        )
    }

    function Movement() {

        return (
            <div id='linkWrap'>
                <a href='#' target='새 창 열림'>
                    <HelpOutlineIcon sx={{ color: '#fff', }} />
                </a>
            </div>
        )

    }

    function Alarm() {

        return (
          <div id='alarmWrap'>
            <a href='#'>
              <NotificationsActiveIcon sx={{ color: '#fff', }} />
            </a>
          </div>
        )
      
      }

    return (
        <header id='header'>
            <div className='container'>
                <div className='header'>

                    <Menu />
                    <Logo imageSrc='' altText=''></Logo>
                    <Search />
                    <Movement />
                    <Alarm />

                </div>
            </div>
        </header>
    )

}

export default Header