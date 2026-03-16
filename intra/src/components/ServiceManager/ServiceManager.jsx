// Fichier: ServiceBuilder.jsx
// Objectif : Identifier et créer ComposantA, ComposantB et ComposantC
// Structure visuelle à décoder : A(BCB), A(BC), A(CC)
import './ServiceManager.css'

export default function ServiceBuilder() {
  return (
    <div className="container" style={{ padding: '30px' }}>

      {/* --- PREMIER BLOC : A ( B C B ) --- */}
      <div className="section-wrapper" style={{ border: '3px double #222', padding: '20px', marginBottom: '20px', borderRadius: '4px' }}>
        <h2 style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>Module Alpha</h2>

        {/* Composant B */}
        <div className="item-b" style={{ background: '#eee', padding: '10px', margin: '10px 0', borderLeft: '5px solid blue' }}>
          <strong style={{ color: 'blue' }}>[TYPE-B]</strong>
          <p>Données de contrôle actives</p>
        </div>

        {/* Composant C */}
        <div className="item-c" style={{ background: '#f9f9f9', padding: '10px', margin: '10px 0', border: '1px dashed #ccc' }}>
          <span style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>Source : Capteur Gamma-7</span>
        </div>

        {/* Composant B (Répété) */}
        <div className="item-b" style={{ background: '#eee', padding: '10px', margin: '10px 0', borderLeft: '5px solid blue' }}>
          <strong style={{ color: 'blue' }}>[TYPE-B]</strong>
          <p>Données de contrôle actives</p>
        </div>
      </div>

      {/* --- DEUXIÈME BLOC : A ( B C ) --- */}
      <div className="section-wrapper" style={{ border: '3px double #222', padding: '20px', marginBottom: '20px', borderRadius: '4px' }}>
        <h2 style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>Module Alpha</h2>

        {/* Composant B */}
        <div className="item-b" style={{ background: '#eee', padding: '10px', margin: '10px 0', borderLeft: '5px solid blue' }}>
          <strong style={{ color: 'blue' }}>[TYPE-B]</strong>
          <p>Données de contrôle actives</p>
        </div>

        {/* Composant C */}
        <div className="item-c" style={{ background: '#f9f9f9', padding: '10px', margin: '10px 0', border: '1px dashed #ccc' }}>
          <span style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>Source : Capteur Gamma-7</span>
        </div>
      </div>

      {/* --- TROISIÈME BLOC : A ( C C ) --- */}
      <div className="section-wrapper" style={{ border: '3px double #222', padding: '20px', marginBottom: '20px', borderRadius: '4px' }}>
        <h2 style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>Module Alpha</h2>

        {/* Composant C */}
        <div className="item-c" style={{ background: '#f9f9f9', padding: '10px', margin: '10px 0', border: '1px dashed #ccc' }}>
          <span style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>Source : Capteur Gamma-7</span>
        </div>

      </div>

    </div>
  );
}