import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div className='dark:bg-zinc-900'>
      <Outlet/>

      <div><Footer/></div>
    </div>
  )
}

export default RootLayout
