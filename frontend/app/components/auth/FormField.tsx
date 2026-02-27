"use client";

import { forwardRef, useState } from "react";

type FormFieldProps = {
  label: string;
  id: string;
  type?: "text" | "email" | "password";
  name: string;
  placeholder?: string;
  icon: string;
  error?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">;

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  (
    {
      label,
      id,
      type = "text",
      name,
      placeholder,
      icon,
      error,
      ...inputProps
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    return (
      <div className="w-full">
        <label
          htmlFor={id}
          className="block text-xs font-mono uppercase tracking-wider text-gray-500 mb-2 pl-1"
        >
          {label}
        </label>
        <div className="relative group">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
              {icon}
            </span>
          </span>
          <input
            ref={ref}
            id={id}
            name={name}
            type={inputType}
            placeholder={placeholder}
            className={`block w-full pl-10 py-3.5 border border-[#333] rounded-xl bg-[#181818] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-[#555] sm:text-sm transition-all shadow-sm ${isPassword ? "pr-10" : "pr-3"}`}
            {...inputProps}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((p) => !p)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-200 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                {showPassword ? "visibility" : "visibility_off"}
              </span>
            </button>
          )}
        </div>
        {error && (
          <p className="mt-1.5 text-xs text-red-400 font-mono pl-1">{error}</p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export default FormField;
