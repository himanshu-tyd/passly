"use client";

import { useEffect, useMemo, useState } from "react";
import AddFAB from "../components/manager/AddFAB";
import ManagerNav from "../components/manager/ManagerNav";
import ManagerHeader from "../components/manager/ManagerHeader";
import SearchBar from "../components/manager/SearchBar";
import FilterChips from "../components/manager/FilterChips";
import VaultList from "../components/manager/VaultList";
import AddPasswordModal from "../components/manager/AddPasswordModal";
import { PasswordEntry } from "../components/manager/PasswordSection";
import useSavePassword from "../../hooks/useSavePassword";
import usePasswords from "../../hooks/usePasswords";



export default function ManagerPage() {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { savePassword, loading, error, success } = useSavePassword();
  const { items, loading: loadingPasswords, error: fetchError, refresh } = usePasswords();

  const filteredItems = useMemo((): PasswordEntry[] => {
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.username.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, items]);


 

  const handleCopy = (username: string, title: string) => {
    navigator.clipboard.writeText(username);
    console.log(`Copied ${title} username to clipboard`);
  };

  const handleSavePassword = async (data: any) => {
    try {
      // transform modal data into backend payload
      const payload = {
        username: data.username,
        platform_name: data.website,
        password: data.password,
        email: data.email,
        notes: data.notes,
      }
      await savePassword(data);
      console.log("Password saved successfully:", payload);
      setIsModalOpen(false);
      // refresh list after saving
      refresh();
    } catch (err) {
      console.error("Failed to save password:", error);
    }
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
          {loadingPasswords ? (
            <p className="text-center py-12">Loading...</p>
          ) : fetchError ? (
            <p className="text-center py-12 text-red-400">{fetchError}</p>
          ) : filteredItems.length > 0 ? (
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
        onSave={handleSavePassword}
      />
    </div>
  );
}
