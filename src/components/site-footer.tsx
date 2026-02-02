import { Github, Instagram, Linkedin, Send, Youtube } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { WaitlistModal } from "./waitlist-modal"

export function SiteFooter() {
    return (
        <footer className="py-10 bg-black border-t border-white/10 text-center">
            <div className="container px-4 md:px-6 flex flex-col items-center gap-6 mx-auto">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">جاهز تبدأ رحلتك؟</h3>
                    <p className="text-gray-400">انضم لقائمة الانتظار دلوقتي واحصل على الخصم.</p>
                    <WaitlistModal>
                        <Button variant="outline" className="gap-2 border-violet-500 text-violet-400 hover:bg-violet-950 hover:text-white">
                            سجل اهتمامك الآن
                            <Send className="w-4 h-4" />
                        </Button>
                    </WaitlistModal>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
                    {/* Instagram */}
                    <Link href="https://www.instagram.com/boudy.arts/" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-pink-600 hover:text-white transition-all text-gray-400">
                        <Instagram className="w-5 h-5" />
                    </Link>

                    {/* TikTok */}
                    <Link href="https://www.tiktok.com/@boudy.arts" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-black hover:shadow-[0_0_15px_rgba(255,0,80,0.5)] hover:text-white transition-all text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-music-2"
                        >
                            <path d="M9 18V5l12-2v13" />
                            <circle cx="6" cy="18" r="3" />
                            <circle cx="18" cy="16" r="3" />
                        </svg>
                    </Link>

                    {/* YouTube */}
                    <Link href="https://www.youtube.com/channel/UC57K-xB-EYiDxJ0w5jHcpxg" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-red-600 hover:text-white transition-all text-gray-400">
                        <Youtube className="w-5 h-5" />
                    </Link>

                    {/* LinkedIn */}
                    <Link href="https://www.linkedin.com/in/abdallah-hosny-68a8a4221" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white transition-all text-gray-400">
                        <Linkedin className="w-5 h-5" />
                    </Link>

                    {/* GitHub */}
                    <Link href="https://github.com/Abdallahemad900?tab=repositories" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-zinc-800 hover:text-white transition-all text-gray-400">
                        <Github className="w-5 h-5" />
                    </Link>

                    {/* Sketchfab */}
                    <Link href="https://sketchfab.com/abdallahemad800/models" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-blue-400 hover:text-white transition-all text-gray-400 group relative">
                        {/* Custom Sketchfab Icon SVG */}
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.007 0L1.765 5.86l10.242 5.86 10.24-5.86L12.007 0zM12.007 24l10.24-5.86V6.43l-10.24 5.86-10.24-5.86v11.71L12.007 24z" />
                        </svg>
                    </Link>
                </div>

                <p className="text-sm text-gray-600">
                    © 2026 3D Arabs. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
