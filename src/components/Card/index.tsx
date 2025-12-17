
type CardProps = {
    href: string;
    image: string;
    alt: string;
};

export function Card({ href, image, alt }: CardProps) {
    return (
            <div className="w-[350px] md:w-[450px] transform transition-transform duration-300 hover:scale-105 rounded-2xl border-2 overflow-hidden">
                <a href={href} target="_blank">
                    <img src={image} alt={alt}     className="w-full h-full object-cover"/>
                </a>
            </div>
        );
}