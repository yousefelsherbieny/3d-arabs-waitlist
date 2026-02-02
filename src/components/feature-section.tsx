"use client"

import { motion } from "framer-motion"
import { DollarSign, Globe, TrendingUp } from "lucide-react"

const features = [
    {
        icon: <Globe className="w-8 h-8 text-violet-400" />,
        title: "مجال مطلوب عالميًا",
        description: "شغلك مش محدود بمكان. تقدر تشتغل مع شركات ألعاب، موضة، وأفلام في أي مكان في العالم وأنت في مكانك."
    },
    {
        icon: <DollarSign className="w-8 h-8 text-green-400" />,
        title: "دخل بالدولار",
        description: "في سوق العمل الحر (Freelance)، أسعار تصميم الأزياء 3D مرتفعة جدًا لقلة المحترفين فيه."
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-pink-400" />,
        title: "فرص أكتر، منافسة أقل",
        description: "عكس الجرافيك ديزاين التقليدي، مجال الـ Digital Fashion لسه جديد والمحترفين فيه قليلين جدًا."
    }
]

export function FeatureSection() {
    return (
        <section id="features" className="py-20 bg-black/50 border-t border-white/5">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">ليه المجال ده <span className="text-violet-500">مهم دلوقتي؟</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        مجال تصميم الأزياء الرقمية هو المستقبل، ودي فرصتك تبدأ فيه بدري.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/30 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="mb-6 p-4 rounded-full bg-black/40 w-fit border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
