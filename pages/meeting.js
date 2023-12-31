import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Vale of Belvoir Writing Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="14 November 2023" />
        <p className="description">
          our meeting theme is "research" </p><p>
            words @ belvoirwriting.co.uk
        </p>
      </main>

      <Footer />
    </div>
  )
}