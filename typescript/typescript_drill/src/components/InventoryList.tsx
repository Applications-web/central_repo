import React from 'react';

export type Item = { 
  id: number; 
  name: string; 
  category: "Hardware" | "Software";
  // TODO 3: Add an optional 'price' property (number)
  // TODO 4: Add an optional 'brand' property (string)
};

interface InventoryProps {
  items: Item[];
}

export const InventoryList = ({ items }: InventoryProps) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {items.map(item => (
        <li key={item.id} style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
          <strong>{item.name}</strong>
          
          {/* TODO 5: Use the && operator to display the price only if it exists */}
          {/* Example: {item.price && <span> - ${item.price}</span>} */}

          <span style={{ fontSize: '0.8em', marginLeft: '10px', color: '#666' }}>
            {item.category.toUpperCase()}
          </span>
        </li>
      ))}
    </ul>
  );
};