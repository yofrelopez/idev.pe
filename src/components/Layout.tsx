import Head from "next/head"
import Navbar from "./Navbar"

interface LayoutProps {
    children: React.ReactNode
    title?: string
}

const Layout: React.FC<LayoutProps> = ({title, children}) => {
  return (
    <div className="min-h-screen flex flex-col relative">
        <Head>
            <title>{ title? title + "Idev" : 'Idev - We Develop Your Ideas' }</title>
            <meta name="description" content="At Idev, we turn your ideas into innovative digital solutions. If you can imagine it, we can create it." />
            <link rel="icon" href="/f/favicon.ico" />

        </Head>
        
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto " >
                <Navbar />
            </div>
        </header>

        <div className="flex-grow mb-14 flex p-4 relative bg-black items-center justify-center">
            <div className="container mx-auto text-slate-400">
                {children}

            </div>
        </div>

        <footer className="fixed bottom-0 left-0 w-full bg-blue-800 text-white p-4">
            <div className="container mx-auto ">
                <p>&copy; {new Date().getFullYear()} Idev. All rights reserved..</p>

            </div>
        </footer>
    </div>
    
  )
}

export default Layout