// Cible : Créer ComposantA, ComposantB, ComposantC

import { ComponentA } from "../ComponentA/ComponentA";
import ComponentB from "../ComponentB/ComponentB";
import ComponentC from "../ComponentC/ComponentC";

// Structure actuelle : A( B C B ) et A( C B )
export default function ServiceManager() {
  return (
    <section className="exo-1">
      {/* Premier Bloc : A( B C B ) */}
      <ComponentA>
        <ComponentB/>
        <ComponentC/>
        <ComponentB/>
      </ComponentA>

      <br />

      {/* Deuxième Bloc : A( C B ) */}
      <ComponentA>
        <ComponentC/>
        <ComponentB/>
      </ComponentA>
    </section>
  );
}

// Note: ComponentA est un bonus de 20%. 
// Vous pouvez faire seulement les composantes enfant.
