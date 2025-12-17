import type React from "react";

type CardsContainerProps = {
    children: React.ReactNode
}

export function CardsContainer({children}:CardsContainerProps){
    return <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap gap-2 md:gap-4">
        {children}
    </div>
}