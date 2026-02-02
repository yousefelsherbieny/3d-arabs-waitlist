"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowLeft, Sparkles } from "lucide-react"
import { WaitlistModal } from "./waitlist-modal"

export function HeroSection() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pt-20 pb-10">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto h-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-right space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-900/30 border border-violet-500/30 text-violet-300 text-sm font-medium">
                            <Sparkles className="w-4 h-4" />
                            <span>الكورس قادم بعد العيد</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter text-white">
                            احترف تصميم <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-l from-violet-400 to-purple-600 text-glow">
                                الأزياء الرقمية
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl ms-auto leading-relaxed">
                            من تصميم الملابس 3D في Marvelous Designer لحد استخدامها في الألعاب، الأفلام، والبراندات الحقيقية.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-md ms-auto lg:ms-auto">
                            <WaitlistModal>
                                <Button size="lg" className="w-full sm:w-auto gap-2 group text-lg h-14 px-8">
                                    انضم للقائمة
                                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                                </Button>
                            </WaitlistModal>
                        </div>

                        <p className="text-sm text-gray-500">
                            * احصل على خصم خاص ومشروع مجاني عند الإطلاق.
                        </p>
                    </motion.div>

                    {/* Visual Content (Placeholder for 3D Cloth) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[400px] md:h-[600px] w-full bg-transparent rounded-2xl overflow-hidden border border-white/5 shadow-2xl group"
                    >
                        {/* Placeholder for an image or video */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-black/80 flex items-center justify-center">
                            <div className="text-center p-6 border border-violet-500/30 rounded-xl bg-black/40 backdrop-blur-sm">
                                <p className="text-violet-300 font-mono text-sm mb-2">3D CLOTH SIMULATION</p>
                                <p className="text-gray-400 text-xs">Place heavy 3D visuals/Reels here</p>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute top-10 right-10 w-20 h-20 bg-pink-500/20 blur-xl rounded-full animate-pulse" />
                        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500/20 blur-xl rounded-full animate-pulse delay-700" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
