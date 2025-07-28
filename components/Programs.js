
export default function Programs() {
  return (
    <section style={{ padding: '3rem 2rem', textAlign: 'center' }}>
      <h2>What We Do</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        <div style={{ maxWidth: '250px' }}>
          <h3>Advocacy & Policy Change</h3>
          <p>We work to reform policies that marginalize underrepresented voices in leadership, tech, and education.</p>
        </div>
        <div style={{ maxWidth: '250px' }}>
          <h3>Career Access & Coaching</h3>
          <p>From resume help to mock interviews and industry mentorship, we remove entry barriers with real tools.</p>
        </div>
        <div style={{ maxWidth: '250px' }}>
          <h3>Skill-Building Workshops</h3>
          <p>We deliver hands-on training in leadership, public speaking, digital literacy, and emotional intelligence.</p>
        </div>
      </div>
    </section>
  );
}
