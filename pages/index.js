import Link from 'next/link';
import { Row, Col, Menu, Card } from 'antd';

export default function Home() {
  return (
    <>
    <header style={{ backgroundColor: '#1f1f1f' }}>
        <Row style={{flexFlow: 'nowrap', height: '64px', backgroundColor: '#1f1f1f', color: 'white', padding: '0 1rem' }}>
          <Col span={6} style={{ display: 'flex', alignItems: 'center'}}>
            <span style={{fontSize: '2rem'}}>Productly</span>
          </Col>
          <Col span={18} style={{ display: 'flex', justifyContent: 'right', alignItems: 'center'}}>
            <Link href={`/admin`}>
              <a>Log In</a>
            </Link>
          </Col>
        </Row>
    </header>
    <main>
      <section style={{ backgroundColor: 'white' }}>
        <Card 
          bordered={false}
          style={{ minHeight: '75vh', maxWidth: '1200px', margin: 'auto' }}
          className='grid-center'
        >
          <h1>Welcome, New User, this is the login page.</h1>
          <p>Please click Log In to go to your dashboard.</p>
          <p>Authentication coming soon.</p>
        </Card>
      </section>
    </main>
    <footer 
      style={{ backgroundColor: '#1f1f1f' }}
    >
      <Card 
        bordered={false}
        style={{ minHeight: '25vh', backgroundColor: '#1f1f1f', color: 'white' }}
      >
        <p>
          Developer Contact:{' '}
          <a href='mailto:markodevo14@gmail.com'>markodevo14@gmail.com</a>
        </p>
        <p>
          Github:{' '}
          <a 
            href='https://github.com/markoco14'
            target='_about'
            rel='noopenner noreferrer'
          >
            Markoco14
          </a>
        </p>
      </Card>
    </footer>

    </>
  );
}