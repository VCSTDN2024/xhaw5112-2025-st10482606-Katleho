import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Input: React.FC<InputProps> = ({ label, ...props }) => {
    return (
        <div className="mb-4">
            {label && <label className="block text-sm font-medium mb-1">{label}</label>}
            <input
            {...props}
            className={'w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 ${props.className || ""}'}
            />
        </div>
    );
};