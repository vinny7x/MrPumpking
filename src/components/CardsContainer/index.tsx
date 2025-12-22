import type React from "react";

type CardsContainerProps = {
    children: React.ReactNode;
};

export function CardsContainer({ children }: CardsContainerProps) {
    return (
        <div className="justify-center items-center flex">
            <div
                className="
               flex flex-col items-center justify-center
                    md:flex-row md:flex-wrap
                    gap-3 md:gap-4
                    p-4 md:p-6
                    rounded-2xl
                    bg-white/10
                    backdrop-blur-md
                    border border-white/20
                    shadow-lg shadow-black/20
                    w-full md:w-3/4 mx-4
            "
            >
                {children}
            </div>
        </div>
    );
}
