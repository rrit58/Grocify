import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import axios from 'axios'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoading(true);
        try {
            const res = await axios.post("/api/user/register", formData);
            if (res.data.success) {
                toast.success(res.data.message);
            }
        } catch (error: any) {
            toast.error(error.response?.data?.message || "An error occurred");
        }
        setFormData({
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
        setIsLoading(false);
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <section className="w-full flex-1 flex flex-col items-center justify-center px-4 py-5">
                <div className="w-full max-w-md">
                    <Card className="border-border shadow-2xl shadow-green-900/5 bg-card rounded-[2rem] sm:p-2 overflow-hidden hover:shadow-green-900/10 transition-all duration-500">
                        <CardHeader className='space-y-3 text-center pb-8 pt-8'>
                            <CardTitle className="text-3xl font-extrabold tracking-tight">Create an account</CardTitle>
                            <CardDescription className="text-muted-foreground text-sm font-medium">
                                Enter your details below to join Grocify
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-6">
                                    {/* Full Name */}
                                    <div className="grid gap-2 group">
                                        <Label htmlFor="fullName" className="text-sm font-semibold text-foreground/80 group-focus-within:text-green-600 transition-colors">Full Name</Label>
                                        <Input
                                            id="fullName"
                                            name='fullName'
                                            value={formData.fullName}
                                            type="text"
                                            placeholder="John Doe"
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
                                            placeholder="john@example.com"
                                            onChange={handleChange}
                                            required
                                            className="h-12 rounded-xl bg-secondary/30 border-transparent transition-all duration-300 hover:border-green-500/50 focus-visible:bg-background focus-visible:border-green-500 focus-visible:ring-4 focus-visible:ring-green-500/10 shadow-inner"
                                        />
                                    </div>
                                    {/* Password */}
                                    <div className="grid gap-2 group">
                                        <Label htmlFor="password" className="text-sm font-semibold text-foreground/80 group-focus-within:text-green-600 transition-colors">Password</Label>
                                        <div className='relative'>
                                            <Input
                                                id="password"
                                                name='password'
                                                value={formData.password}
                                                type={showPassword ? "text" : "password"}
                                                placeholder='••••••••'
                                                onChange={handleChange}
                                                className="pr-12 h-12 rounded-xl bg-secondary/30 border-transparent transition-all duration-300 hover:border-green-500/50 focus-visible:bg-background focus-visible:border-green-500 focus-visible:ring-4 focus-visible:ring-green-500/10 shadow-inner tracking-widest placeholder:tracking-normal"
                                                required
                                            />
                                            <Button variant="ghost" type='button' onClick={() => setShowPassword(!showPassword)} className='absolute right-1 top-1 h-10 w-10 p-0 rounded-lg hover:bg-green-500/10 text-muted-foreground hover:text-green-600 transition-colors'>
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </Button>
                                        </div>
                                    </div>
                                    {/* Confirm Password */}
                                    <div className="grid gap-2 group">
                                        <Label htmlFor="confirmPassword" className="text-sm font-semibold text-foreground/80 group-focus-within:text-green-600 transition-colors">Confirm Password</Label>
                                        <div className='relative'>
                                            <Input
                                                id="confirmPassword"
                                                name='confirmPassword'
                                                value={formData.confirmPassword}
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder='••••••••'
                                                onChange={handleChange}
                                                className="pr-12 h-12 rounded-xl bg-secondary/30 border-transparent transition-all duration-300 hover:border-green-500/50 focus-visible:bg-background focus-visible:border-green-500 focus-visible:ring-4 focus-visible:ring-green-500/10 shadow-inner tracking-widest placeholder:tracking-normal"
                                                required
                                            />
                                            <Button variant="ghost" type='button' onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='absolute right-1 top-1 h-10 w-10 p-0 rounded-lg hover:bg-green-500/10 text-muted-foreground hover:text-green-600 transition-colors'>
                                                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </Button>
                                        </div>
                                    </div>
                                    <Button type="submit" disabled={isLoading} className="w-full h-12 mt-2 rounded-xl font-bold bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                                        {isLoading ? <Loader2 className='animate-spin w-5 h-5' /> : "Register"}
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="flex-col gap-6 mt-4 pb-8">
                            <div className="relative w-full">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-border/60" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase tracking-wider">
                                    <span className="bg-card px-4 text-muted-foreground font-bold">Or continue with</span>
                                </div>
                            </div>
                            <Button variant="outline" type="button" disabled={isLoading} className="w-full h-12 rounded-xl font-bold transition-all duration-300 hover:bg-secondary/50 hover:scale-[1.02] active:scale-[0.98] border-border/80 shadow-sm hover:border-foreground/20">
                                <svg className="mr-3 h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                Sign up with Google
                            </Button>
                            <p className='text-center text-sm font-medium text-muted-foreground'>
                                Already have an account? <Link to="/login" className='font-bold text-green-600 hover:text-green-700 hover:underline transition-colors'>Sign in</Link>
                            </p>
                        </CardFooter>
                    </Card>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Register
