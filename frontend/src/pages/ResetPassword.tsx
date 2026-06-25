import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useAuth } from '@/contexts/AuthContext'

const ResetPassword = () => {
    const navigate = useNavigate()
    const { resetPassword } = useAuth()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        otp: "",
        email: "",
        newPassword: "",
        confirmNewPassword: ""
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        const res = await resetPassword(formData.otp, formData.email, formData.newPassword, formData.confirmNewPassword);
        if (res.success) {
            toast.success(res.message);
            setFormData({
                otp: "",
                email: "",
                newPassword: "",
                confirmNewPassword: ""
            })
            navigate("/login")
        } else {
            toast.error(res.message);
        }
        setIsLoading(false);
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <section className="w-full flex-1 flex flex-col items-center justify-center px-4 py-5">
                <div className="w-full max-w-md">
                    <Card className="border-border shadow-2xl shadow-green-900/5 bg-card rounded-[2rem] sm:p-2 overflow-hidden hover:shadow-green-900/10 transition-all duration-500">
                        <CardHeader className='space-y-3 text-center pb-8 pt-8'>
                            <CardTitle className="text-3xl font-extrabold tracking-tight">Reset Password</CardTitle>
                            <CardDescription className="text-muted-foreground text-sm font-medium">
                                Enter the 6-digit code sent to your email to reset password
                            </CardDescription>
                        </CardHeader>
                        <CardContent className='pb-8'>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-6">
                                    {/* OTP */}
                                    <div className="grid gap-2 group">
                                        <Label htmlFor="otp" className="text-sm font-semibold text-foreground/80 group-focus-within:text-green-600 transition-colors">
                                            OTP
                                        </Label>
                                        <Input
                                            id="otp"
                                            name='otp'
                                            value={formData.otp}
                                            type="text"
                                            placeholder=""
                                            onChange={handleChange}
                                            required
                                            className="h-12 rounded-xl bg-secondary/30 border-transparent transition-all duration-300 hover:border-green-500/50 focus-visible:bg-background focus-visible:border-green-500 focus-visible:ring-4 focus-visible:ring-green-500/10 shadow-inner"
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="grid gap-2 group">
                                        <Label htmlFor="email" className="text-sm font-semibold text-foreground/80 group-focus-within:text-green-600 transition-colors">Email</Label>
                                        <Input
                                            id="email"
                                            name='email'
                                            value={formData.email}
                                            type="email"
                                            placeholder=""
                                            onChange={handleChange}
                                            required
                                            className="h-12 rounded-xl bg-secondary/30 border-transparent transition-all duration-300 hover:border-green-500/50 focus-visible:bg-background focus-visible:border-green-500 focus-visible:ring-4 focus-visible:ring-green-500/10 shadow-inner"
                                        />
                                    </div>
                                    {/* New Password */}
                                    <div className="grid gap-2 group">
                                        <Label htmlFor="newPassword" className="text-sm font-semibold text-foreground/80 group-focus-within:text-green-600 transition-colors">
                                            New Password
                                        </Label>
                                        <div className='relative'>
                                            <Input
                                                id="newPassword"
                                                name='newPassword'
                                                value={formData.newPassword}
                                                type={showPassword ? "text" : "password"}
                                                placeholder=''
                                                onChange={handleChange}
                                                className="pr-12 h-12 rounded-xl bg-secondary/30 border-transparent transition-all duration-300 hover:border-green-500/50 focus-visible:bg-background focus-visible:border-green-500 focus-visible:ring-4 focus-visible:ring-green-500/10 shadow-inner tracking-widest placeholder:tracking-normal"
                                                required
                                            />
                                            <Button variant="ghost" type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-1 top-1 h-10 w-10 p-0 rounded-lg hover:bg-green-500/10 text-muted-foreground hover:text-green-600 transition-colors'>
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </Button>
                                        </div>
                                    </div>
                                    {/* New Confirm Password */}
                                    <div className="grid gap-2 group">
                                        <Label htmlFor="confirmNewPassword" className="text-sm font-semibold text-foreground/80 group-focus-within:text-green-600 transition-colors">
                                            Confirm Password
                                        </Label>
                                        <div className='relative'>
                                            <Input
                                                id="confirmNewPassword"
                                                name='confirmNewPassword'
                                                value={formData.confirmNewPassword}
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder=''
                                                onChange={handleChange}
                                                className="pr-12 h-12 rounded-xl bg-secondary/30 border-transparent transition-all duration-300 hover:border-green-500/50 focus-visible:bg-background focus-visible:border-green-500 focus-visible:ring-4 focus-visible:ring-green-500/10 shadow-inner tracking-widest placeholder:tracking-normal"
                                                required
                                            />
                                            <Button variant="ghost" type='button' onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='absolute right-1 top-1 h-10 w-10 p-0 rounded-lg hover:bg-green-500/10 text-muted-foreground hover:text-green-600 transition-colors'>
                                                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </Button>
                                        </div>
                                    </div>
                                    <Button type="submit" disabled={isLoading} className="w-full h-12 mt-2 rounded-xl cursor-pointer font-bold bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                                        {isLoading ? <Loader2 className='animate-spin w-5 h-5' /> : "Submit"}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ResetPassword
