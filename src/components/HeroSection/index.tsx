import { FaTiktok, FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa6";
import { SocialLink } from "../SocialLink";

export function HeroSection() {
    return (
        <section
            className="
                relative flex flex-col items-center
                px-4 sm:px-6
                pt-8 sm:pt-12
                pb-16 sm:pb-20
                text-white
                bg-linear-to-b from-gray-500"
        >
            <img
                src="/images/Logo_site_1.png"
                alt="Logo Mr Pumpking"
                className="
                    w-[220px] sm:w-[280px] md:w-[420px]
                    pixelated
                    drop-shadow-[4px_4px_0_#000]
                "
            />

            <p
                className="
        mt-6
        max-w-sm sm:max-w-lg md:max-w-2xl
        text-center
        text-sm sm:text-base md:text-lg
        text-zinc-200
    "
            >
                Olá, seja bem-vindo(a). Eu sou o Marcos, mais conhecido nas redes como Mr. Pumpking.
                Faço lives diariamente de jogos variados, com foco principal em Minecraft.
                Lives, entretenimento e caos cuidadosamente organizados para conteúdo
                de qualidade duvidosa, porém constante.
            </p>

            <div
                className="
                    group
                    mt-8 sm:mt-10
                    flex items-center gap-4 sm:gap-6
                    px-4 sm:px-6
                    py-3
                    rounded-xl
                    bg-white/10 backdrop-blur-md
                    border border-white/20
                "
            >
                <SocialLink href="https://www.twitch.tv/mrpumpkingbr" icon={<FaTwitch />} />
                <SocialLink href="http://instagram.com.br/_mrpumpkingbr" icon={<FaInstagram />} />
                <SocialLink href="https://www.tiktok.com/@_mrpumpkingoficial" icon={<FaTiktok />} />
                <SocialLink href="https://www.youtube.com/@mrpumpkingbr" icon={<FaYoutube />} />
            </div>

            <hr
                className="
                    mt-10 sm:mt-12
                    w-3/4 sm:w-1/2
                    border-t border-white/20
                "
            />
        </section>
    );
}
