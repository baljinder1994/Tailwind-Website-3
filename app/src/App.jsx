import { useState } from 'react'


function App() {
  const[isOpen,setIsOpen]=useState(false)

  const toggleMenu=() =>{
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className='bg-[#1c080c] text-white'>
        <div className='container mx-auto flex justify-between items-center py-3 px-4'>
          <div className='flex items-center space-x-4'>
          <span className='text-sm'>
            <i className='fas fa-phone-alt mr-2'></i>+1234 56 78 908
          </span>
          <span className='text-sm'>
            <i className='fas fa-clock mr-2'></i>-Fri 9:00 Am - 6:00 Pm
          </span>
          <span className='text-sm'>
            <i className='fas fa-map-marker mr-2'></i>30 N India Ste R, Punjab
          </span>
          </div>
          <div className='flex items-center space-x-4'>
            <i className='fab fa-facebook'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-youtube'></i>
            <i className='fab fa-pinterest'></i>
          </div>
        </div>
      </header>

      {/*Navbar*/}

      <nav className='absolute w-full z-10 text-white'>
        <div className='container mx-auto flex justify-between items-center py-4'>
          <div className='text-2xl font-bold'>BaL</div>

          <div className='md:hidden'>
            <button onClick={toggleMenu}><i className='fas fa-bars'></i></button>
          </div>

            <ul className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-8
            absolute md:static left-0 w-full md:w-auto 
            bg-[#1c080c] md:bg-transparent p-4 md:p-0 z-20 md:top-auto top-16
            `}>
            <li className='hover:text-red-500 cursor-pointer'>Home</li>
            <li className='hover:text-red-500 cursor-pointer'>Home</li>
            <li className='hover:text-red-500 cursor-pointer'>Home</li>
            <li className='hover:text-red-500 cursor-pointer'>Home</li>
            <li className='hover:text-red-500 cursor-pointer'>Home</li>
            <li className='hover:text-red-500 cursor-pointer'>Home</li>
            
          </ul>
          <button className='hidden md:block bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full'>Let's Talk</button>
        </div>
      </nav>

      <div 
       className='relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white'
      style={{backgroundImage:'url(hero.jpg)'}}>
        <div className='absolute inset-0 bg-[#1c080c] bg-opacity-50'></div>
          <div className='relative z-10 text-center max-w-lg'>
            <h2 className='text-4xl md:text-5xl font-bold'>Drive with <span className='text-red-500'>Confidence </span>&<br/>
             Repair with <span className='text-red-500'>Care</span></h2>
             <p className='mt-4'>
             Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.
             </p>
             <button className='mt-6 bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-full'>Contact Us</button>
         
             </div>
      </div>

      <div className='bg-[#1c080c] text-white px-20'>
        <div className='flex justify-center space-x-4 pt-16'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            <div  className='bg-[#1c080c] p-6 rounded-lg border border-gray-400'>
              <div  className='text-4xl  mb-4 text-center'>🔧</div>
              <h3 className='text-2xl font-bold text-center'>General Service</h3>
              <p className='text-gray-400 mt-2'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
            </div>
            <div  className='bg-[#1c080c] p-6 rounded-lg border border-gray-400'>
              <div  className='text-4xl  mb-4 text-center'>🔧</div>
              <h3 className='text-2xl font-bold text-center'>General Service</h3>
              <p className='text-gray-400 mt-2'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
            </div>
            <div  className='bg-[#1c080c] p-6 rounded-lg border border-gray-400'>
              <div  className='text-4xl  mb-4 text-center'>🔧</div>
              <h3 className='text-2xl font-bold text-center'>General Service</h3>
              <p className='text-gray-400 mt-2'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-center pt-16 space-y-8 bg-[#1c080c] md:space-x-8 md:space-y-0 px-6 md:px-20 '>
        <div className='w-full md:w-1/3 grid grid=cols-2 gap-4'>
          <div className='col-span-1'>
            <img src="img2.jfif" className='rounded-lg w-full h-48 object-cover'></img>
          </div>
          <div className='col-span-1'>
            <img src="img2.jfif" className='rounded-lg w-full h-48 object-cover'></img>
          </div>
          <div className='col-span-2'>
            <img src="hero.jpg" className='rounded-lg w-full h-48 object-cover'></img>
          </div>
        </div>

        <div className='w-full md:w-1/2 text-center md:text-left'>
          <h4 className='text-red-500 uppercase font-bold'>About Our Copmany</h4>
          <h2 className='text-3xl md:text-4xl font-bold text-white mt-2'>Restoring Your Drive One Repair At A Time</h2>
          <p className='text-gray-400 mt-4'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
          <p className='text-gray-400 mt-4'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
          <p className='text-gray-400 mt-4'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
          <p className='text-gray-400 mt-4'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
          <button className='bg-red-500 text-white px-6 py-2 mt-6 rounded-lg'>Learn More</button>
        </div>
      </div>

      <div className='bg-[#1c080c] text-white py-16'>
         <div className='text-center max-w-5xl mx-auto px-4 mb-12'>
          <h4 className='text-red-500 font-semibold uppercase mb-2'>Why Choose Us</h4>
          <h2 className='text-4xl sm:text-5xl font-bold'><span className='text-white-500'>You Can Trust</span> <span className='text-red-500'>Performance</span>
          <span className='text-white'>You Can Feel Frees</span>
          </h2>
          <p className='text-gray-400 mt-4'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
         </div>

         <div className='flex justify-center space-x-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4'>
            <div className='bg-[#2a1b1f] p-6 rounded-lg shadow-lg'>
              <img src="img2.jfif" className='rounded-lg mb-4 object-cover h-40 w-full'></img>
              <h3 className='text-2xl font-bold text-white mb-2'>Engine Diagnosis</h3>
              <p className='text-gray-400 mt-4'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
              <a href="#" className='text-red-500 hover:text-red-600 font-semibold'>Red More</a>
            </div>
            <div className='bg-[#2a1b1f] p-6 rounded-lg shadow-lg'>
              <img src="img.png" className='rounded-lg mb-4 object-cover h-40 w-full'></img>
              <h3 className='text-2xl font-bold text-white mb-2'>Engine Diagnosis</h3>
              <p className='text-gray-400 mt-4'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
              <a href="#" className='text-red-500 hover:text-red-600 font-semibold'>Red More</a>
            </div>
            <div className='bg-[#2a1b1f] p-6 rounded-lg shadow-lg'>
              <img src="hero.jpg" className='rounded-lg mb-4 object-cover h-40 w-full'></img>
              <h3 className='text-2xl font-bold text-white mb-2'>Engine Diagnosis</h3>
              <p className='text-gray-400 mt-4'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
              <a href="#" className='text-red-500 hover:text-red-600 font-semibold'>Red More</a>
            </div>
          </div>
         </div>
         <div className='text-center pt-16'>
          <h4 className='text-red-500 font-semibold uppercase mb-2'>Our Process</h4>
          <h2 className='text-4xl sm:text-5xl font-bold'><span className='text-white font-bold'>Where</span><span className=' font-bold text-red-500'>Reliability</span></h2>
         <button className='bg-red-500 text-white px-6 py-2 mt-6 rounded-full'>See All</button>
         </div>
      </div>

      <div className='bg-[#2a1b1f] text-white py-12 px-6'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center'>
          <div className='flex justify-center'>
            <img src="img.png" className='rounded-lg'></img>
          </div>

          <div>
            <h3>Why Choose Us</h3>
            <h2 className='text-4xl md:text-5xl font-semibold mb-4'>Service You <span className='italic text-red-500'>Can Trust</span> <span className='italic'>You</span><span> Feel</span></h2>
           <p className='text-gray-400 mb-8'>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
         
           <div className='flex items-start space-x-4 mb-6'>
            <div className='bg-red-500 p-4 rounded-full'>
              <img src="img.png" className='h-10 w-10'></img>
            </div>
            <div>
              <h4 className='text-xl font-semibold mb-2'>We Amaze Clients</h4>
              <p>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
            </div>
           </div>
           <div className='flex items-start space-x-4 mb-6'>
            <div className='bg-red-500 p-4 rounded-full'>
              <img src="img.png" className='h-10 w-10'></img>
            </div>
            <div>
              <h4 className='text-xl font-semibold mb-2'>We Amaze Clients</h4>
              <p>Start by creating a new Vite project if you don’t have one set up already. The most common approach is to use Create Vite.</p>
            </div>
           </div>
          </div>
        </div>
      </div>

      <div className='bg-[#2a1b1f] py-12 px-4'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 px-8 py-8 gap-8 items-center border border-gray-400'>
          <div className='bg-[#311f24] p-8 rounded-lg'>
            <h2 className='text-4xl font-semibold text-white mb-6'>Leave a message</h2>
            <form className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex items-center bg-[#2a1b1f] rounded-md px-4 py-2 border border-gray-600' >
                  <span className='text-gray-400 mr-2'>🔎</span>
                  <input type="text" className='w-full bg-transparent text-white '></input>
                </div>
                <div className='flex items-center bg-[#2a1b1f] rounded-md px-4 py-2 border border-gray-600' >
                  <span className='text-gray-400 mr-2'>🔎</span>
                  <input type="text" className='w-full bg-transparent text-white '></input>
                </div>
                <div className='flex items-center bg-[#2a1b1f] rounded-md px-4 py-2 border border-gray-600' >
                  <span className='text-gray-400 mr-2'>🔎</span>
                  <input type="text" className='w-full bg-transparent text-white '></input>
                </div>
                <div className='flex items-center bg-[#2a1b1f] rounded-md px-4 py-2 border border-gray-600' >
                  <span className='text-gray-400 mr-2'>🔎</span>
                  <select className='w-full bg-transparent text-white '>
                    <option>Select Service</option>
                    <option>Service 1</option>
                    <option>Service 2</option>
                  </select>

                    </div>
                    <div className='flex items-center bg-[#2a1b1f] rounded-md px-4 py-2 border border-gray-600' >
                  <span className='text-gray-400 mr-2'>📩</span>
                  <textarea className='w-full bg-transparent text-white'></textarea>
                </div>
                <div className='text-center'>
                  <button className='bg-red-600 text-white font-bold px-8 py-2 rounded-md'>Submit Now</button>
                </div>
                
              </div>
            </form>
          </div>
          <div className='space-y-6'>
          <div className='bg-[#311f24] flex items-center p-6 rounded-lg'>
            <div className='bg-red-600 p-4 rounded-full mr-6' >
              <span className='text-2xl text-white '>📺</span>
            </div>
            <div >
              <h3 className='text-4xl font-bold text-white'>20+</h3>
              <p className='text-gray-400'>Years of Experience</p>
            </div>
          </div>
          <div className='bg-[#311f24] flex items-center p-6 rounded-lg'>
            <div className='bg-red-600 p-4 rounded-full mr-6' >
              <span className='text-2xl text-white '>📺</span>
            </div>
            <div >
              <h3 className='text-4xl font-bold text-white'>13k</h3>
              <p className='text-gray-400'>Completed Projects</p>
            </div>
          </div>
          <div className='bg-[#311f24] flex items-center p-6 rounded-lg'>
            <div className='bg-red-600 p-4 rounded-full mr-6' >
              <span className='text-2xl text-white '>📺</span>
            </div>
            <div >
              <h3 className='text-4xl font-bold text-white'>19k</h3>
              <p className='text-gray-400'>Satisfied Clients</p>
            </div>
          </div>
        </div>
        </div>
       
      </div>


     <footer className='bg-[#2a1b1f] py-4'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm'>
        <div className='mb-2 md:mb-0'>
          &#9400; 2024 Baljinder | All Rights Reserved
        </div>
        <div className='flex space-x-4'>
          <a href="#" className='hover:text-white'> Terms & Condition</a>
        </div>
      </div>
     </footer>
      
      
    </>
  )
}

export default App
