import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cultura 2022</title>
        <meta name="description" content="CMRIT Cultura 2022" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className={styles.main}>

      <div className="navbar bg-base-100" id={styles.main_navbar}>
          <div className="flex-1">
            <a href='/'>
            <img src='/Cultura22.svg' width={150} height={48}/>
            </a>
          </div>
          <div className="flex-none gap-2">
            <ul className="menu menu-horizontal p-0">
              <li id={styles.nav_items}><a>Events</a></li>
              <li id={styles.nav_items}><a>Guests</a></li>
              <li id={styles.nav_items}><a>Sponsors</a></li>
              <li id={styles.nav_items}><a>About Us</a></li>
              <li id={styles.nav_items}><a>Gallery</a></li>
              <li id={styles.nav_items}>
                <div id={styles.nav_item_book_tickets}>
                  <p id={styles.book_ticket_txt}>Book Tickets</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}

      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
