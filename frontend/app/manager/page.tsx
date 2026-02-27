"use client";

import { useMemo, useState } from "react";
import AddFAB from "../components/manager/AddFAB";
import ManagerNav from "../components/manager/ManagerNav";
import ManagerHeader from "../components/manager/ManagerHeader";
import SearchBar from "../components/manager/SearchBar";
import FilterChips from "../components/manager/FilterChips";
import VaultList from "../components/manager/VaultList";
import AddPasswordModal from "../components/manager/AddPasswordModal";
import { VAULT_ITEMS } from "../components/manager/vaultData";
import { PasswordEntry } from "../components/manager/PasswordSection";



export default function ManagerPage() {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = useMemo((): PasswordEntry[] => {
    return VAULT_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.username.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);


  const handleCopy = (username: string, title: string) => {
    navigator.clipboard.writeText(username);
    console.log(`Copied ${title} username to clipboard`);
  };

  return (
    <div className="bg-background-dark text-gray-100 font-sans antialiased min-h-screen flex flex-col transition-colors duration-200">
      <ManagerHeader />

      {/* Main */}
      {/* add extra top padding so content never scrolls beneath the header */}
      <main className="flex-1 px-4 pt-20 pb-24 bg-grid-pattern relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-primary/5 dark:bg-primary/5 blur-[100px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 max-w-md mx-auto">
          <SearchBar onSearch={setSearch} />
          <FilterChips />

          {/* list section */}
          {filteredItems.length > 0 ? (
            <VaultList items={filteredItems} onCopy={handleCopy} />
          ) : (
            <div className="text-center py-12">
              <span
                className="material-symbols-outlined text-gray-400 mx-auto mb-4 block"
                style={{ fontSize: 48 }}
              >
                search_off
              </span>
              <p className="text-gray-500 text-sm">
                No passwords found matching "{search}"
              </p>
            </div>
          )}
        </div>
      </main>

      {/* fab and bottom navigation */}
      <AddFAB onClick={() => setIsModalOpen(true)} />
      <ManagerNav />
      <div className="h-6 w-full bg-surface-light dark:bg-background-dark fixed bottom-0 z-50 pointer-events-none lg:hidden" />

      {/* Add password modal */}
      <AddPasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={(data) => {
          console.log("New password saved:", data);
          // TODO: Add to vault
        }}
      />
    </div>
  );
}
