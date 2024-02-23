import { Link } from '@mui/material';

function Footer(props: any) {

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

    return (
        <footer id='footer'>
            <div className='container'>
                <div className='footer'>

                    <Logo imageSrc='' altText='' />

                    <h1 className='tit'>
                        footer
                    </h1>
                </div>
            </div>
        </footer>
    )

}

export default Footer