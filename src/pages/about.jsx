import React from 'react'
import Card from '../components/cards';

const about = () => {
  return (
    <div
      className='w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center text-white relative overflow-hidden'
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(160, 255, 143, 0.095) 0%, rgba(160, 255, 143, 0.032) 40%, transparent 70%),
          radial-gradient(circle at 80% 20%, rgba(160, 255, 143, 0.095) 0%, rgba(160, 255, 143, 0.032) 40%, transparent 70%),
          #000
        `,
      }}
    >
      <h1 className='text-6xl font-serif font-bold text-green-300 mb-8'>About</h1>     
      <p className='text-xl mb-8 text-neutral-300'>
        Building the future of <span className='font-semibold text-green-300'>technology education</span> and <span className='font-semibold text-green-300'>innovation</span>
      </p>
      <div className='w-1/2 h-1 rounded-full mb-8 bg-gradient-to-r from-green-300 to-orange-400'></div>
      <p className='text-2xl italic mb-8 mt-4 w-full font-light'>
        "We believe technology should be <span className='text-green-300 font-semibold'>accessible</span>, <span className='text-green-300 font-semibold'>collaborative</span>, and <span className='text-green-300 font-semibold'>transformative.</span><br />
        GeekRoom is where ambitious minds converge to shape tomorrow's innovations."
      </p>

      <button className="cursor-pointer mt-4 mb-8 flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-950/80 to-green-950/20 px-4 py-3 text-sm font-bold text-green-300 hover:from-green-950 transition-all">
      <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(160,255,143,0.7)]"></span>Join the Innovation
      </button>

      <span className='mb-8 text-gray-400'>Free workshops • Projects • Community</span>
      <div className='mt-56 w-full flex justify-center mb-36'>
        <Card />
      </div>
      
    </div>
  )
}

export default about