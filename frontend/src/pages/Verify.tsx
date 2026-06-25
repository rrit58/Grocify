import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useAuth } from '@/contexts/AuthContext'

const Verify = () => {
    const navigate = useNavigate()
    const { verifyEmail } = useAuth()
    const [otp, setOtp] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e: any) => {
        const { value } = e.target;
        setOtp(value)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        const email = sessionStorage.getItem('verify_email') || ""
        const res = await verifyEmail(email, otp);
        if (res.success) {
            toast.success(res.message);
            sessionStorage.removeItem("verify_email");
            setOtp("")
            navigate("/")
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
                        <CardHeader className='space-y-3 text-center pb-3 pt-8'>
                            <CardTitle className="text-3xl font-extrabold tracking-tight">Verify Your Email</CardTitle>
                            <CardDescription className="text-muted-foreground text-md font-bold">
                                <div className='flex items-center gap-3 justify-center flex-col'>
                                    <p>
                                        We have sent a 6-digit code to
                                    </p>
                                    <span className='font-bold text-green-600'>{sessionStorage.getItem('verify_email')}</span>
                                </div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-6">
                                    {/* OTP */}
                                    <div className="grid gap-2 group">
                                        <Input
                                            id="otp"
                                            name='otp'
                                            value={otp}
                                            type="text"
                                            placeholder=""
                                            onChange={handleChange}
                                            required
                                            className="h-12 rounded-xl bg-secondary/30 border-transparent transition-all duration-300 hover:border-green-500/50 focus-visible:bg-background focus-visible:border-green-500 focus-visible:ring-4 focus-visible:ring-green-500/10 shadow-inner"
                                        />
                                    </div>
                                    <Button type="submit" disabled={isLoading} className="w-full h-12 mt-2 rounded-xl cursor-pointer font-bold bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                                        {isLoading ? <Loader2 className='animate-spin w-5 h-5' /> : "Verify"}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex-col gap-6 mt-3 mb-3 pb-8">
                            <p className='text-center text-md font-medium text-muted-foreground'>Didn't receive the code?</p>
                            <Button variant="outline" type="button" disabled={isLoading} className="w-36 h-12 cursor-pointer rounded-xl font-bold transition-all duration-300 hover:bg-secondary/50 hover:scale-[1.02] active:scale-[0.98] border-border/80 shadow-sm hover:border-foreground/20">
                                Resend Code
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Verify
