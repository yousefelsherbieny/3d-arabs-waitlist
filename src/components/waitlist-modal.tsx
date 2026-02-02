"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Loader2, Send } from "lucide-react"

interface WaitlistModalProps {
    children: React.ReactNode
}

export function WaitlistModal({ children }: WaitlistModalProps) {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            // Using FormSubmit.co to send emails without backend
            const response = await fetch("https://formsubmit.co/ajax/yousefelsherbieny547@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: "New Waitlist Signup! 🎉",
                    _template: "table",
                    ...formData
                })
            });

            if (response.ok) {
                alert(`شكراً ليك يا ${formData.name}! تم تسجيلك بنجاح.`)
                setOpen(false)
                setFormData({ name: "", email: "", phone: "", age: "" })
            } else {
                alert("حصل مشكلة صغيرة، حاول تاني!")
            }
        } catch (error) {
            console.error(error)
            alert("تأكد من اتصالك بالإنترنت.")
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-md bg-zinc-950 border-white/10 text-right" dir="rtl">
                <DialogHeader className="text-right">
                    <DialogTitle className="text-2xl font-bold text-white mb-2">انضم لقائمة الانتظار</DialogTitle>
                    <DialogDescription className="text-gray-400">
                        سجل بياناتك عشان نبعتلك (مشروع مجاني) وتكون أول واحد يعرف وقت خصم الإطلاق.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="grid gap-4 py-4">

                    <div className="grid gap-2">
                        <Label htmlFor="name" className="text-gray-300">الاسم بالكامل</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="مثال: يوسف الشربيني"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-white/5 border-white/10"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email" className="text-gray-300">البريد الإلكتروني</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="name@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-white/5 border-white/10"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="phone" className="text-gray-300">رقم الهاتف (واتساب)</Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="010xxxxxxx"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-white/5 border-white/10"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="age" className="text-gray-300">السن</Label>
                        <Input
                            id="age"
                            name="age"
                            type="number"
                            placeholder="22"
                            required
                            value={formData.age}
                            onChange={handleChange}
                            className="bg-white/5 border-white/10"
                        />
                    </div>

                    <DialogFooter className="mt-4 sm:justify-start gap-2">
                        <Button type="submit" className="w-full gap-2" disabled={loading}>
                            {loading ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    جاري التسجيل...
                                </>
                            ) : (
                                <>
                                    تأكيد الانضمام
                                    <Send className="w-4 h-4" />
                                </>
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
