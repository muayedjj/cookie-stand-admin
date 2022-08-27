import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      
      <Head>
        <title>Cookie Stand Admin Panel</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="p-4 mb-5 shadow bg-violet-800 md:px-6 md:py-8">
        <h1 className="text-3xl font-bold text-gray-300">
          Cookie Stand Admin
        </h1>        
      </header>
      
      <main className='flex flex-col'>
        <div>
        <form className="flex-col w-3/4 p-2 py-5 mx-auto my-auto font-bold text-gray-200 rounded-lg bg-violet-700 text-align">
            <h1 className="flex justify-center p-3 mb-5 text-2xl ">
              Create a Cookie Stand
            </h1 >
            
            <div className="flex justify-center p-4 my-3">
              <label htmlFor='Loc' className="mr-1 ">Location</label>
              <input type="text" className="w-full rounded-lg" placeholder=" Amman" name="Loc" id="Loc" required />
            </div >

            <div className="flex justify-center p-2 mb-5">
              <div className="mr-3 ">
                <label htmlFor='MinCustomerPHour' className="mb-2 text-sm">Minimum Customers Per Hour</label>
                <input type="number" className="block w-full p-1 mr-1 rounded-lg text-smfocus:ring-blue-500 focus:border-blue-500" placeholder="2" name="MinCustomerPHour" id="MinCustomerPHour" required/>
              </div>
              
              <div className="mr-3">
                <label htmlFor='MaxCustomerPHour' className="mb-2 text-sm">Maximum Customers Per Hour</label>
                <input type="number" className="block w-full p-1 mr-1 rounded-lg text-smfocus:ring-blue-500 focus:border-blue-500" placeholder="4" name="MaxCustomerPHour" id="MaxCustomerPHour" required/>
              </div>

              <div className="mr-3">
                <label htmlFor='AvgCookiePSale' className="mb-2 text-sm">Average Cookie Per Sale</label>
                <input type="float" className="block w-full p-1 mr-1 rounded-lg text-smfocus:ring-blue-500 focus:border-blue-500" placeholder="2.5" name="AvgCookiePSale" id="AvgCookiePSale" required/>
              </div>

              <div className="w-1/4">
                <button type="submit" className="block w-full h-full my-1 font-bold text-gray-800 rounded-lg bg-violet-400">
                  Create
                </button>
              </div>
              
            </div>            







            
          </form>
        </div>
        
        <div className='flex mx-auto my-5'>
          <p>Report Table Coming Soon</p>
        </div>
        
        <div className="flex mx-auto my-5" >
          <p className='mx-auto'> {`{Location: , minCustomers:, maxCustomers: ,avgCustomer:}`}  </p>
        </div>
        
      </main>

      <footer className="p-4 px-6 py-8 shadow bg-violet-800">
        <p className='text-gray-300'>@2021</p>
      </footer>
      
    </div>
  )
}
