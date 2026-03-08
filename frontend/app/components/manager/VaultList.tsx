"use client";

import { PasswordEntry } from "./PasswordSection";
import PasswordSection from "./PasswordSection";

interface VaultListProps {
  items: PasswordEntry[];
}

export default function VaultList({ items }: VaultListProps) {
  return (
    <PasswordSection
      title="All Items"
      items={items}
    />
  );
}
