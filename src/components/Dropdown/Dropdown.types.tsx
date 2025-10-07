export interface DropdownProps {
  options: string[];
  selected?: string;
  onChange?: (value: string) => void;
  backgroundColor?: string;
  disabled?: boolean;
}

