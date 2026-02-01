import type React from "react";

type LinkProps = {
    href: string,
    icon?: React.ReactNode,
    children: string;
};

export function Link({ href, children, icon = '' }: LinkProps) {
    return <a href={href} className="hover:text-white hover:underline flex gap-2 items-center">
        {icon} {children}
    </a>;
}