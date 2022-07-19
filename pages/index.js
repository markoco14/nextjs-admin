import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome, New User, this is the login page.</h1>
      <p>Click the link below to log in to your dashboard.</p>
      <p>Authentication coming soon.</p>
      <Link href={`/admin`}>
        <a>Log In</a>
      </Link>
    </>
  );
}