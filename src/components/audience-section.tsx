"use client"

import { motion } from "framer-motion"
import { Palette, Gamepad2, GraduationCap } from "lucide-react"
import Image from "next/image"

const audiences = [
    {
        icon: <Palette className="w-6 h-6" />,
        title: "المصممين والفنانين",
        description: "لو شغال جرافيك أو 3D وعايز تطور مهاراتك وتزود دخلك بمجال جديد."
    },
    {
        icon: <Gamepad2 className="w-6 h-6" />,
        title: "مطورين الألعاب",
        description: "لو عايز تصمم ملابس واقعية لشخصيات ألعابك باستخدام Unreal Engine."
    },
    {
        icon: <GraduationCap className="w-6 h-6" />,
        title: "المبتدئين والطلبة",
        description: "طلبة فنون جميلة وتطبيقية، أو أي حد شغوف بالموضة وعايز يبدأ صح."
    }
]

export function AudienceSection() {
    return (
        <section id="audience" className="py-20 bg-black">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">الكورس ده <span className="text-violet-500">مناسب لمين؟</span></h2>
                        <p className="text-gray-400 text-lg">
                            سواء كنت مبتدئ أو محترف، الكورس مصمم إنه ياخدك من الصفر للاحتراف بخطوات عملية.
                        </p>

                        <div className="space-y-4">
                            {audiences.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <div className="text-violet-400 mt-1">{item.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-white">{item.title}</h3>
                                        <p className="text-sm text-gray-400">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
                        <div className="absolute inset-0 bg-violet-600/20 blur-3xl rounded-full" />
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="aspect-[3/4] rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden transform translate-y-8 relative group">
                                <Image
                                    src="/placeholder-hoodie.png"
                                    alt="3D Hoodie Design"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                    <span className="text-white font-bold text-sm">Streetwear Hoodie</span>
                                </div>
                            </div>
                            <div className="aspect-[3/4] rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden relative group">
                                <Image
                                    src="/placeholder-pants.png"
                                    alt="3D Pants Design"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                    <span className="text-white font-bold text-sm">Techwear Pants</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
