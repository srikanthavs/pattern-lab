import { Plus } from "lucide-react";

interface AddSourceButtonProps {
  onClick: () => void;
}

export function AddSourceButton({ onClick }: AddSourceButtonProps) {
  return (
    <button className="add-source-btn" onClick={onClick}>
      <Plus size={18} /> Add new research source
    </button>
  );
}
