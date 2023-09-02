import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-[90vh] flex-col items-center justify-center ">
      <div className='text-center space-y-5'>
        <h1 className='text-2xl font-semibold'>Counter App By Redux</h1>
        <p className='text-xl'>0</p>
        <div className='flex gap-5'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Increment</button>
          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Decrement</button>
        </div>
      </div>
    </main>
  )
}
