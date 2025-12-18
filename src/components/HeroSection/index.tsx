import { FaTiktok, FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa6";
import { SocialLink } from "../SocialLink";

export function HeroSection() {
    return (
        <section className="
            relative flex flex-col items-center justify-center
            px-6 py-20 text-white
            bg-linear-to-b from-orange-500
        ">
            <div className="absolute inset-0 -z-10" />

            <img
                src="/images/Logo_Mr_Pumpking.png"
                alt="Logo Mr Pumpking"
                className="w-[260px] md:w-[420px]
                           pixelated
                           drop-shadow-[4px_4px_0_#000]"
            />


            <p className="
                mt-4 max-w-2xl text-center
                text-sm md:text-base
                text-zinc-200
            ">
                Olá, seja bem vindo, eu sou o Marcos, mais conhecido nas redes como Mr. Pumpking.
                Faço lives diariamente de jogos variados, com foco principal em Minecraft.
                Lives, entreterimento e caos cuidadosamente organizados para entretenimento
                de qualidade duvidosa, porém constante.
            </p>

            <div className="
    group mt-6 flex items-end gap-6 px-6 py-3
    rounded-2xl
    bg-white/10 backdrop-blur-md
    border border-white/20
">
                <SocialLink href="https://www.twitch.tv/mrpumpkingbr" icon={<FaTwitch />} />
                <SocialLink href="http://instagram.com.br/_mrpumpkingbr" icon={<FaInstagram />} />
                <SocialLink href="https://www.tiktok.com/@_mrpumpkingoficial" icon={<FaTiktok />} />
                <SocialLink href="https://www.youtube.com/@mrpumpkingbr" icon={<FaYoutube />} />

            </div>

            <hr className="
                mt-12 w-3/4
            " />
        </section>
    );
}
