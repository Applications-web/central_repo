// Fichier : DestinationList.jsx
// ÉTAPE 1 : Remplacer par un .map()
// ÉTAPE 2 : Utiliser l'index pour le rang (Destination #1)

export default function DestinationList({ items }) {

  return (
    <section className="exo-3-dark" style={{ padding: '30px', backgroundColor: '#121212', color: '#fff', borderRadius: '8px' }}>
      <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', color: '#f0f0f0' }}>🌐 Destinations</h2>

      {/* Container de la Grille */}
      <div className="dark-grid" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>

        {/* Destination 1 - À REFACTORER */}
        <div className="dark-card" style={{ background: '#1e1e1e', border: '1px solid #333', padding: '20px', width: '220px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase' }}>Rang #1</span>
            <span style={{ fontSize: '1.2rem' }}>✈️</span>
          </div>
          <h3 style={{ margin: '10px 0', color: '#fff', fontSize: '1.4rem' }}>{items[0].name}</h3>
          <p style={{ fontWeight: 'bold', color: '#4caf50', fontSize: '1.2rem', margin: '5px 0' }}>{items[0].price}</p>
          <p style={{ fontSize: '0.9rem', color: '#bbb' }}>📅 Départ : {items[0].date}</p>
        </div>

        {/* Destination 2 - À REFACTORER */}
        <div className="dark-card" style={{ background: '#1e1e1e', border: '1px solid #333', padding: '20px', width: '220px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase' }}>Rang #2</span>
            <span style={{ fontSize: '1.2rem' }}>✈️</span>
          </div>
          <h3 style={{ margin: '10px 0', color: '#fff', fontSize: '1.4rem' }}>{items[1].name}</h3>
          <p style={{ fontWeight: 'bold', color: '#4caf50', fontSize: '1.2rem', margin: '5px 0' }}>{items[1].price}</p>
          <p style={{ fontSize: '0.9rem', color: '#bbb' }}>📅 Départ : {items[1].date}</p>
        </div>

        {/* Destination 3 - À REFACTORER */}
        <div className="dark-card" style={{ background: '#1e1e1e', border: '1px solid #333', padding: '20px', width: '220px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase' }}>Rang #3</span>
            <span style={{ fontSize: '1.2rem' }}>✈️</span>
          </div>
          <h3 style={{ margin: '10px 0', color: '#fff', fontSize: '1.4rem' }}>{items[2].name}</h3>
          <p style={{ fontWeight: 'bold', color: '#4caf50', fontSize: '1.2rem', margin: '5px 0' }}>{items[2].price}</p>
          <p style={{ fontSize: '0.9rem', color: '#bbb' }}>📅 Départ : {items[2].date}</p>
        </div>

      </div>
    </section>
  );
}