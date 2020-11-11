import Head from 'next/head'

export default function Home() {
  return (
      <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className="container mx-auto bg-gray-200 my-3">


      <div className="max-w-sm rounded overflow-hidden shadow-lg my-10">
        <img className="w-full" src="https://images.unsplash.com/photo-1605034050580-fc9da340f199?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Sunset in the mountains"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
      </div>


      <div className="bg-red-400 p-4 my-10">
        <span className="block text-white text-center bg-red-800 px-4 py-2">1</span>
        <span className="block text-white text-center bg-red-800 px-4 py-2 mt-2">2</span>
        <span className="block text-white text-center bg-red-800 px-4 py-2 mt-2">3</span>
      </div>


      <div className="flex flex-row bg-gray-200">
        <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
        <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
        <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>

    </div>
          </>
  )
}
