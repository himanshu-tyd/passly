"use client";

import { PasswordEntry } from "./PasswordSection";
import PasswordSection from "./PasswordSection";

interface VaultListProps {
  items: PasswordEntry[];
  onCopy: (username: string, title: string) => void;
}

export default function VaultList({ items, onCopy }: VaultListProps) {
  // for now we render a single section called "All items"; later this could
  // split into categories or more complex grouping.
  return (
    <PasswordSection
      title="All Items"
      items={items}
      onCopy={(id) => {
        const entry = items.find((i) => i.id === id);
        if (entry) onCopy(entry.username, entry.title);
      }}
    />
  );
}
