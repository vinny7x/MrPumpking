import type React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type ButtonProps = {
    href: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
};

export function Button({ href, children, icon }: ButtonProps) {
    return (
        <a
            href={href}
            target="_blank"
            className="
        inline-flex items-center gap-2
        px-4 py-2
        rounded-xl
        bg-orange-500 text-white
        font-medium
        shadow-sm
        transition
        hover:bg-orange-600
        hover:shadow-md
        active:scale-95
        focus:outline-none
        focus:ring-2 focus:ring-orange-400 focus:ring-offset-2
      "
        >
            {icon && <span className="text-lg">{icon}</span>}
            <span className="flex gap-2 items-center">{children} <FaExternalLinkAlt size={8} />
            </span>
        </a>
    );
}
