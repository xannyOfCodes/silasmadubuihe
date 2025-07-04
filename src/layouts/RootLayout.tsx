import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div>
      <Outlet/>

      <div><Footer/></div>
    </div>
  )
}

export default RootLayout
