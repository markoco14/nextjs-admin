import Link from "next/link";

export default function Home() {
  return (
    <>
    <header>
      <div className="container flex navbar">
        <span className="logo">Logo</span>
        <nav>
          <ul role="list">
            <li>
              <Link href={`/admin`}>
                <a>Log In</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <section className="section bg-white welcome">
        <div className="container">
          <h1>Welcome, New User, this is the login page.</h1>
          <p>Please click Log In to go to your dashboard.</p>
          <p>Authentication coming soon.</p>
        </div>
      </section>
    </main>
    <footer className="footer">
      <div className="container">
        <p>
          Developer Contact:{" "}
          <a href="mailto:markodevo14@gmail.com">markodevo14@gmail.com</a>
        </p>
        <p>
          Github:{" "}
          <a 
            href="https://github.com/markoco14"
            target="_about"
            rel="noopenner noreferrer"
          >
            Markoco14
          </a>
        </p>
      </div>
    </footer>

    </>
  );
}