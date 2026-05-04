import React, { useState, useEffect } from 'react';

const TripleSetter = () => {
  const [score, setScore] = useState(0);

  const handlePowerUp = () => {
    // BUG : Mise en lot (Batching) de l'état. 
    // React utilise la valeur de 'score' au moment du clic pour les trois appels.
    // Résultat attendu : +3 | Résultat obtenu : +1.
    setScore(score => score + 1);
    setScore(score => score + 1);
    setScore(score + 1);
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>1. Défi : Le Triple Score</h3>
      <p>Score : {score}</p>
      <button onClick={handlePowerUp}>Augmenter le score</button>
    </div>
  );
};

const ProfileEditor = () => {
  const [user, setUser] = useState({ name: "Phil", role: "Enseignant" });

  const handleUpdate = (newName) => {
    // BUG : Mutation directe de l'état.
    // 'tempUser' pointe vers la même adresse mémoire que 'user'.
    // React ne détecte pas de changement de référence, donc il ne déclenche pas de rendu.
    const tempUser = user; 
    tempUser.name = newName; 
    setUser(tempUser);
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>2. Défi : Éditeur de Profil</h3>
      <p>Utilisateur : {user.name}</p>
      <input 
        placeholder="Nouveau nom"
        onChange={(e) => handleUpdate(e.target.value)} 
      />
    </div>
  );
};

const ChatBox = () => {
  const [text, setText] = useState("");
  const [messagePret, setMessagePret] = useState("");

  const handleSend = () => {
    // BUG : Décalage d'état (stale state). 'messagePret' ne sera mis à jour 
    // que lors du prochain rendu. L'alerte utilise l'ancienne valeur.
    setMessagePret(text); 

    alert("Serveur a reçu : " + messagePret);
    
    setText(""); 
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>3. Défi : Le Message à Retardement</h3>
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Tapez votre message..."
      />
      <button onClick={handleSend}>Envoyer</button>
      
      <p style={{fontSize: '0.8em', color: '#666'}}>
      </p>
    </div>
  );
};

const SearchDashboard = () => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({ type: 'tous' });

  // BUG : Boucle infinie de rendus.
  // L'objet { type: 'tous' } est recréé à chaque rendu (nouvelle référence).
  // useEffect détecte ce "nouveau" filtre, met à jour l'état, et recommence.
  // Regarder la console: les erreurs s'accumulent
  useEffect(() => {
    console.log("Recherche des résultats en cours...");
    setFilters({ type: 'tous' }); 
  }, [filters]); 

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>4. Défi : Tableau de Recherche</h3>
      <input 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Rechercher..." 
      />
      <p>Filtre actif : {filters.type}</p>
      <small>(Vérifiez la console pour voir la boucle infinie !)</small>
    </div>
  );
};

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Laboratoire de Débogage React</h1>
      <p>Utilisez les outils de développement (F12) pour inspecter l'état.</p>
      <hr />
      <TripleSetter />
      <ProfileEditor />
      <ChatBox/>
      <SearchDashboard />
    </div>
  );
}