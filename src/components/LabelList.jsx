import { useLabelQuery } from "../api/hooks";

export default function LabelList({ selected, onToggle }) {
  const labels = useLabelQuery();
  if (labels.isLoading) return "loading...";

  return (
    <>
      <h3>Label</h3>
      <div className={"issues-list"}>
        {labels.data.map((label) => (
          <button
            key={label.id}
            onClick={() => onToggle(label.id)}
            className={`${label.color} ${
              selected.includes(label.id) ? "selected" : ""
            }`}
          >
            {label.name}
          </button>
        ))}
      </div>
    </>
  );
}
