import IssuesList from "../components/IssuesList";
import LabelList from "../components/LabelList";
import { useState } from "react";
export default function Issues() {
  const [selected, setSelected] = useState([]);
  const toggle = (label) => {
    setSelected((labels) => {
      if (labels.includes(label)) {
        return labels.filter((l) => l !== label);
      } else {
        return [...labels, label];
      }
    });
  };
  return (
    <div>
      <main>
        <section>
          <h1>Issues</h1>
          <IssuesList selected={selected} />
        </section>
        <aside>
          <LabelList selected={selected} onToggle={toggle} />
        </aside>
      </main>
    </div>
  );
}
