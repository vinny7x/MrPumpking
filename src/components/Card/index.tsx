type CardProps = {
    href: string;
    image: string;
    alt: string;
};

export function Card({ href, image, alt }: CardProps) {
    return (
        <div
            className="
                w-[350px] md:w-[450px]
                rounded-2xl
                overflow-hidden
                border-2 border-orange-400/30
                transition-all duration-300
                hover:scale-105
                hover:border-orange-400
                hover:shadow-[0_0_20px_rgba(251,146,60,0.85)]
            "
        >
            <a href={href} target="_blank">
                <img
                    src={image}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </a>
        </div>
    );
}
