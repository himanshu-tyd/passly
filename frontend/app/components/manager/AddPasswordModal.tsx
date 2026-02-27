"use client";

import { useState } from "react";
import WebsiteInput from "./WebsiteInput";
import CredentialsInput from "./CredentialsInput";
import CategorySelector from "./CategorySelector";
import NotesInput from "./NotesInput";

interface AddPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (data: PasswordData) => void;
}

export interface PasswordData {
  website: string;
  username: string;
  password: string;
  category: string;
  notes: string;
}

export default function AddPasswordModal({
  isOpen,
  onClose,
  onSave,
}: AddPasswordModalProps) {
  const [formData, setFormData] = useState<PasswordData>({
    website: "",
    username: "",
    password: "",
    category: "Logins",
    notes: "",
  });

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
    }
    // Reset form
    setFormData({
      website: "",
      username: "",
      password: "",
      category: "Logins",
      notes: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-center">
        <div className="w-full sm:max-w-md bg-background-dark rounded-t-2xl sm:rounded-2xl max-h-[90vh] overflow-y-auto pt-6 pb-32 sm:pb-6 border border-border-dark">
          {/* Header */}
          <div className="px-6 mb-8 border-b border-border-dark pb-6">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={onClose}
                className="p-2 -ml-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <span className="material-symbols-outlined text-gray-400 hover:text-gray-300">
                  close
                </span>
              </button>
              <h2 className="text-2xl font-bold text-white">Add Password</h2>
              <div className="w-10" />
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-mono">
              New Entry
            </p>
          </div>

          {/* Form */}
          <div className="px-6 space-y-6">
            <WebsiteInput
              value={formData.website}
              onChange={(v) =>
                setFormData({ ...formData, website: v })
              }
            />

            <CredentialsInput
              username={formData.username}
              password={formData.password}
              onUsernameChange={(v) =>
                setFormData({ ...formData, username: v })
              }
              onPasswordChange={(v) =>
                setFormData({ ...formData, password: v })
              }
            />

            <CategorySelector
              value={formData.category}
              onChange={(v) =>
                setFormData({ ...formData, category: v })
              }
            />

            <NotesInput
              value={formData.notes}
              onChange={(v) =>
                setFormData({ ...formData, notes: v })
              }
            />
          </div>

          {/* Save button */}
          <div className="fixed bottom-6 right-6 sm:static sm:mt-8 sm:flex sm:gap-3">
            <button
              onClick={onClose}
              className="hidden sm:flex sm:flex-1 px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="w-14 h-14 sm:w-auto sm:h-auto sm:flex-1 sm:px-6 sm:py-3 bg-white text-black rounded-full sm:rounded-xl shadow-lg sm:shadow-none flex items-center justify-center hover:scale-105 sm:hover:bg-gray-100 active:scale-95 sm:active:scale-95 transition-transform duration-200 font-semibold"
            >
              <span className="material-symbols-outlined sm:hidden font-semibold text-[28px]">
                check
              </span>
              <span className="hidden sm:inline">Save Password</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
