import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-paypal-blue mb-2">PayPal</h1>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader className="space-y-1 pb-4 text-center">
              <div className="w-16 h-16 bg-paypal-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-paypal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <CardTitle className="text-2xl font-normal">
                Check your email
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-paypal-gray">
                We sent a password reset link to <br />
                <span className="font-medium text-foreground">{email}</span>
              </p>
              
              <p className="text-sm text-paypal-gray">
                Didn't receive the email? Check your spam folder or{" "}
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-paypal-blue hover:text-paypal-blue-hover font-medium"
                >
                  try a different email address
                </button>
              </p>

              <Button 
                className="w-full h-12 bg-paypal-blue hover:bg-paypal-blue-hover text-white font-medium rounded-lg transition-colors mt-6"
                onClick={() => window.location.href = '/login'}
              >
                Back to Login
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-paypal-blue mb-2">PayPal</h1>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-1 pb-4">
            <div className="flex items-center mb-4">
              <button 
                onClick={() => window.location.href = '/login'}
                className="text-paypal-blue hover:text-paypal-blue-hover"
              >
                <ArrowLeft size={20} />
              </button>
            </div>
            <CardTitle className="text-2xl font-normal">
              Forgot your password?
            </CardTitle>
            <p className="text-paypal-gray text-sm">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 border-border focus:border-paypal-blue focus:ring-paypal-blue"
                  required
                />
              </div>

              <Button 
                className="w-full h-12 bg-paypal-blue hover:bg-paypal-blue-hover text-white font-medium rounded-lg transition-colors"
                type="submit"
              >
                Send Reset Link
              </Button>
            </form>

            <div className="text-center pt-6">
              <p className="text-sm text-paypal-gray">
                Remember your password?{" "}
                <a 
                  href="/login" 
                  className="text-paypal-blue hover:text-paypal-blue-hover font-medium"
                >
                  Back to Login
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;