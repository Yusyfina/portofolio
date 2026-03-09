import React from "react";

export default function GlowButton({ children, onClick, type = "button", className = "" }) {
    return (
        <div className={`group relative w-full sm:w-auto ${className}`}>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-50 blur transition duration-500 group-hover:opacity-100" />
            <button
                type={type}
                onClick={onClick}
                className="relative flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-wide text-primary transition-all duration-300 active:scale-95 group-hover:-translate-y-0.5 group-hover:bg-transparent"
            >
                {children}
            </button>
        </div>
    );
}
