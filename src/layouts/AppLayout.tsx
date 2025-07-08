import { Suspense } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import PageLoading from '../components/PageLoading'

const AppLayout = () => {
  return (
    <main className='flex flex-col min-h-screen max-w-[1980px] mx-auto'>
        <Navbar />
        <Suspense fallback={<PageLoading />}>
            <Outlet />
        </Suspense>

        <Footer />
    </main>
  )
}

export default AppLayout
