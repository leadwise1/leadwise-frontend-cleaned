
export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', padding: '2rem', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <strong>LeadWise Foundation</strong><br />
          EIN: XX-XXXXXXX<br />
          Frisco, TX<br />
          info@letsleadwise.org
        </div>
        <div>
          <strong>Quick Links</strong><br />
          <a href="/about" style={{ color: 'var(--color-white)', textDecoration: 'none' }}>About</a><br />
          <a href="/programs" style={{ color: 'var(--color-white)', textDecoration: 'none' }}>Programs</a><br />
          <a href="/donate" style={{ color: 'var(--color-white)', textDecoration: 'none' }}>Donate</a><br />
          <a href="/contact" style={{ color: 'var(--color-white)', textDecoration: 'none' }}>Contact</a>
        </div>
        <div>
          <strong>Connect</strong><br />
          <a href="https://www.linkedin.com/company/leadwise" style={{ color: 'var(--color-white)', textDecoration: 'none' }}>LinkedIn</a><br />
          <a href="https://twitter.com/letsleadwise" style={{ color: 'var(--color-white)', textDecoration: 'none' }}>Twitter/X</a><br />
          <a href="https://instagram.com/letsleadwise" style={{ color: 'var(--color-white)', textDecoration: 'none' }}>Instagram</a>
        </div>
      </div>
      <p style={{ marginTop: '1rem' }}>© 2025 LeadWise Foundation. All rights reserved. Registered 501(c)(3) in Texas.</p>
    </footer>
  );
}
