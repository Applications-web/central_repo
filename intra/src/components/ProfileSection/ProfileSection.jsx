// Fichier : ServerStats.jsx
// ÉTAPE 1 : Sortir SERVER_CONFIG et le passer depuis le parent (App.jsx)
// ÉTAPE 2 : Transformer ce composant pour qu'il utilise les props

export default function ServerStats(props) {
  const SERVER_CONFIG = {
    id: "SRV-99-ALPHA",
    specs: {
      cpu: "8 Cores",
      ram: "32GB",
      storage: "1TB NVMe"
    },
    network: {
      ip: "192.168.1.105",
      status: "Online",
      lastBackup: "2026-03-14"
    },
    admin: "Alex Prof"
  };

  return (
    <div className="server-card" style={{ border: '2px solid #333', padding: '15px', fontFamily: 'monospace' }}>
      <h2 style={{ background: '#333', color: '#00ff00', padding: '5px' }}>
        SYSTEM LOG: {SERVER_CONFIG.id}
      </h2>

      <div className="specs-section">
        <h3>Spécifications :</h3>
        <ul>
          <li>Processeur : {SERVER_CONFIG.specs.cpu}</li>
          <li>Mémoire : {SERVER_CONFIG.specs.ram}</li>
          <li>Stockage : {SERVER_CONFIG.specs.storage}</li>
        </ul>
      </div>

      <div className="network-section" style={{ borderTop: '1px solid #ccc', marginTop: '10px' }}>
        <p><strong>IP Address :</strong> {SERVER_CONFIG.network.ip}</p>
        <p><strong>Status :</strong> {SERVER_CONFIG.network.status}</p>
        <p><strong>Dernier Backup :</strong> {SERVER_CONFIG.network.lastBackup}</p>
      </div>

      <footer style={{ marginTop: '15px', fontSize: '0.8rem', color: '#666' }}>
        Administrateur système : {SERVER_CONFIG.admin}
      </footer>
    </div>
  );
}