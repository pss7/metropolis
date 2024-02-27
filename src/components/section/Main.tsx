import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';
import Breadcrumb from '../Breadcrumb';


function Main(props: any) {

  return (
    <>
      <Header />
      <SideMenu />
      <main id='main'>
    



        {

          props.children


        }

      </main>
      <Footer />
    </>
  )

}

export default Main