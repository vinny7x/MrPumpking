import { FaInstagram, FaPix, FaStar, FaTiktok, FaTwitch, FaYoutube } from "react-icons/fa6";
import { Link } from "../Link";
import { SiDiscord, SiGmail } from "react-icons/si";
import data from '../../data/links.json';

export function Footer() {
    return (
        <footer className="mt-8 bg-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <img
                        src="/images/Logo_Mr_Pumpking.png"
                        alt="Mr Pumpking"
                        className="w-32 mb-4"
                    />
                    <p className="text-sm text-slate-300">
                        Eu sou o Marcos.
                        entretenimento e caos cuidadosamente organizados para conteúdo de qualidade duvidosa, porém constante.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Links</h3>
                    <ul className="space-y-2 text-slate-300 text-sm">
                        <li><Link href={data.social.sub} icon={<FaStar />}  > Seja Sub</Link></li>
                        <li><Link href={data.social.donate} icon={<FaPix />}>Donate e LivePix</Link></li>
                        <li><Link href={data.social.discord} icon={<SiDiscord />}>Comunidade do Discord</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Redes</h3>
                    <ul className="space-y-2 text-slate-300 text-sm">
                        <li>
                            <Link href={data.redes.twitch} icon={<FaTwitch />}>
                                Twitch
                            </Link>
                        </li>
                        <li>
                            <Link href={data.redes.instagram} icon={<FaInstagram />}>
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link href={data.redes.tiktok} icon={<FaTiktok />}>TikTok</Link>
                        </li>
                        <li>
                            <Link href={data.redes.youtube} icon={<FaYoutube />}>
                                Youtube</Link>
                        </li>
                        <li>
                            <Link icon={<SiGmail />} href={data.social.email}>{data.social.email.slice(9)}</Link></li>

                    </ul>
                </div>

            </div>

            <div className="border-t border-slate-700 text-center text-sm text-slate-400 py-4">
                <p>© {new Date().getFullYear()} Mr Pumpking. Todos os direitos reservados.</p>
                <p>Feito com 💙 por <a className="hover:underline" href="https://github.com/Vinny7x">Vinny7x</a></p>

            </div>
        </footer>
    );
}
