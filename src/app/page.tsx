export default function Home() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', color: '#333' }}>
      <header style={{ borderBottom: '3px solid #e11d48', paddingBottom: '10px', marginBottom: '30px' }}>
        <h1 style={{ color: '#e11d48', margin: 0 }}>JobHelper.co.za 🇿🇦</h1>
        <p style={{ color: '#666', marginTop: '5px' }}>Find your next job at Shoprite, Sasol, or Pick n Pay.</p>
      </header>
      <main>
        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
          <h2 style={{ marginTop: '0' }}>Shoprite: General Worker</h2>
          <p>Location: Nationwide | Requirements: Grade 12</p>
          <button style={{ background: '#e11d48', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Apply Now</button>
        </div>
      </main>
    </div>
  );
}
