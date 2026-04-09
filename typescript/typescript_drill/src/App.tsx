import { StatusBadge } from './components/StatusBadge';
import { InventoryList, Item } from './components/InventoryList';
import { ContentCard } from './components/ContentCard';

function App() {
  const stock: Item[] = [
    { id: 101, name: "Mechanical Keyboard", category: "Hardware" },
    { id: 102, name: "IntelliJ IDEA License", category: "Software" },
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ textAlign: 'center' }}>CEGEP TS-React Lab</h1>

      {/* 1. Test the Union Logic */}
      <ContentCard title="Server 01" subtitle="Main Production Cluster">
        <StatusBadge state="success" />
      </ContentCard>

      {/* 2. Test the Array Handling */}
      <ContentCard title="Lab Inventory">
        <InventoryList items={stock} />
      </ContentCard>

      {/* 3. Test the Layout Pattern */}
      <ContentCard title="Custom Message">
        <p>This card has no subtitle, and it works perfectly!</p>
      </ContentCard>
    </div>
  );
}

export default App;