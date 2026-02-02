"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Box, Layers, MonitorPlay, Zap } from "lucide-react"

const modules = [
    {
        title: "Marvelous Designer",
        description: "تصميم الملابس من الصفر بمقاسات صحيحة واحترافية.",
        color: "text-yellow-400"
    },
    {
        title: "احتراف الـ Rendering",
        description: "إخراج صور وفيديوهات سينمائية تعرض شغلك بأفضل جودة.",
        color: "text-pink-400"
    },
    {
        title: "Blender & Animation",
        description: "تركيب اللبس على الشخصيات وعمل عروض أزياء (Fashion Shows).",
        color: "text-orange-400"
    },
    {
        title: "Unreal Engine Integration",
        description: "استخدام الملابس في الألعاب والسينما (CGI) بشكل تفاعلي.",
        color: "text-blue-400"
    },
    {
        title: "Project Files & Assets",
        description: "مكتبة كاملة من الخامات والملفات الجاهزة تبدأ بيها.",
        color: "text-green-400"
    }
]

export function CurriculumSection() {
    return (
        <section id="curriculum" className="py-20 bg-zinc-950/50 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/5 blur-[100px] rounded-full" />

            <div className="container px-4 md:px-6 relative z-10 mx-auto">
                <div className="text-center mb-16">
                    <span className="text-violet-400 font-medium mb-2 block">محتوى الكورس</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">هتتعلم إيه في <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-600">الكورس ده؟</span></h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {modules.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col p-6 rounded-xl bg-black border border-white/10 hover:border-violet-500/50 transition-colors"
                        >
                            <div className={`mb-4 ${item.color}`}>
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* Bonus Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col p-6 rounded-xl bg-gradient-to-br from-violet-900/20 to-black border border-violet-500/30 lg:col-span-1"
                    >
                        <div className="mb-4 text-violet-400">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">أدوات الـ AI</h3>
                        <p className="text-gray-400 text-sm">
                            شرح لأحدث أدوات الذكاء الاصطناعي اللي بتسرع شغلك 10 أضعاف.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
