
export default function Hero() {
  return (
    <section style={{ padding: '4rem', backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', textAlign: 'center' }}>
      <h1>Empowering the Silenced to Lead</h1>
      <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
        LeadWise Foundation is dismantling systemic barriers through advocacy, education, and one-on-one empowerment.
        We champion voices that systems have ignored—especially women, marginalized communities, and underrepresented talent in tech and education.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/donate" style={{ margin: '0 1rem', padding: '0.75rem 1.5rem', backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>Donate Now</a>
        <a href="/get-involved" style={{ margin: '0 1rem', padding: '0.75rem 1.5rem', backgroundColor: 'var(--color-white)', color: 'var(--color-primary)', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>Get Involved</a>
      </div>
    </section>
  );
}
