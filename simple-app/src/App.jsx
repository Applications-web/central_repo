import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Calling your FastAPI endpoint
    fetch('http://127.0.0.1:8000/items')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div className="flex h-screen items-center justify-center text-xl font-mono">
      Loading CSV Data...
    </div>
  );

  if (error) return (
    <div className="flex h-screen items-center justify-center text-red-500 font-bold">
      Error: {error}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <header className="max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          User Inventory
        </h1>
        <p className="text-slate-500 mt-2">
          Syncing {items.length} records from <code>MOCK_DATA.csv</code>
        </p>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="h-48 bg-slate-100 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`${item.first_name} profile`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h2 className="text-lg font-bold text-slate-800">
                    {item.first_name} {item.last_name}
                  </h2>
                  <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">
                    ID: {item.id}
                  </span>
                </div>
                <p className="text-sm text-slate-600 truncate mb-4">
                  {item.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;