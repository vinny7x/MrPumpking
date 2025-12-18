import type React from "react";

type SocialLinkProps = {
    icon: React.ReactNode
    href: string
}
export function SocialLink({icon, href}:SocialLinkProps) {
    return <a className="transition-transform duration-200 group-hover:scale-110 hover:scale-125" href={href} target="_blank">
        {icon}
    </a>;
}