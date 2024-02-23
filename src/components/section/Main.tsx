import Header from './Header';
import Footer from './Footer';
import Sidemenu from './Sidemenu';

function Main(props: any) {

  return (
    <>
      <Header />
      <main id='main'>
        <Sidemenu />
        <h1 className='tit'>
          body
        </h1>
      </main>
      <Footer />
    </>
  )

}

export default Main