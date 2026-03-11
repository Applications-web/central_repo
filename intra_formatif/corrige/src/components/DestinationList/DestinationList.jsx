export default function DestinationList({ items }) {
  // "items" sera passé par App.jsx (voir plus bas)
  return (
    <section className="exo-3">
      <h2>Destinations</h2>
      <ul>
        {items.map((item, index) =>
          <li key={index}>  {item.name} - {item.price} (Départ: {item.date})</li>
        )}
      </ul>
    </section>
  );
}

/* Note le index et le key sont un bonus de 20%.

<ul>
  {items.map(item =>
    <li>  {item.name} - {item.price} (Départ: {item.date})</li>
  )}
</ul>
*/