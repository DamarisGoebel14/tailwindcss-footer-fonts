import Head from 'next/head'

export default function Home() {
  return (
      <div>
          <Head>
            <title>Tailwindcss with Conne</title>
            <link rel="icon" href="/favicon.ico" />
              <link rel="stylesheet" href="https://use.typekit.net/zun3eyu.css"/>
          </Head>
          <footer className="bg-gray-400 pt-10">
              <div className="container mx-auto bg-red-400" id="big-container">
                  <div className="grid grid-cols-4 gap-4">
                      <div className="flex justify-center">
                          <div className="font-headline">Hallo ich bin Degular Display</div>
                      </div>
                      <div className="flex justify-center">
                            <div className="font-default">Hallo ich bin Roboto</div>
                      </div>
                      <div className="flex justify-center">
                          <div className="font-button">Hallo ich bin PT Mono</div>
                      </div>
                      <div className="flex justify-center">
                            <div className="font-default font-bold">Hallo ich bin Roboto Bold</div>
                      </div>
                  </div>
              </div>
          </footer>
      </div>
  )
}
