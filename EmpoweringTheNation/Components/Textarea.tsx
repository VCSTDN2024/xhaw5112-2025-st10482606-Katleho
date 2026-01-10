import React from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, ...props }) => {
    return (
        <div className="mb-4">
            {label && <label className="block text-sm font-medium mb-1">{label}</label>}
            <textarea
            {...props}
            className={'w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500 ${props.className || ""}'}
            />
        </div>
    );
};