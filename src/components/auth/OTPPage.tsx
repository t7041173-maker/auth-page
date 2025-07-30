import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OTPPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isVerified, setIsVerified] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.slice(0, 6).split("");
    
    const newOtp = [...otp];
    pasteArray.forEach((char, index) => {
      if (index < 6 && /^\d$/.test(char)) {
        newOtp[index] = char;
      }
    });
    setOtp(newOtp);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join("");
    if (otpString.length === 6) {
      setIsVerified(true);
    }
  };

  const handleResend = () => {
    setTimeLeft(60);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  if (isVerified) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-paypal-blue mb-2">PayPal</h1>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader className="space-y-1 pb-4 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <CardTitle className="text-2xl font-normal">
                Verification Successful
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-paypal-gray">
                Your account has been verified successfully. You can now access your account.
              </p>

              <Button 
                className="w-full h-12 bg-paypal-blue hover:bg-paypal-blue-hover text-white font-medium rounded-lg transition-colors mt-6"
                onClick={() => navigate('/')}
              >
                Continue to Dashboard
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
                onClick={() => navigate('/login')}
                className="text-paypal-blue hover:text-paypal-blue-hover"
              >
                <ArrowLeft size={20} />
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-paypal-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-paypal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <CardTitle className="text-2xl font-normal">
                Enter verification code
              </CardTitle>
              <p className="text-paypal-gray text-sm mt-2">
                We sent a 6-digit code to your email address
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center space-x-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className="w-12 h-12 text-center text-lg font-semibold border border-border rounded-lg focus:border-paypal-blue focus:ring-2 focus:ring-paypal-blue focus:ring-opacity-20 outline-none transition-colors"
                  />
                ))}
              </div>

              <Button 
                className="w-full h-12 bg-paypal-blue hover:bg-paypal-blue-hover text-white font-medium rounded-lg transition-colors"
                type="submit"
                disabled={otp.some(digit => !digit)}
              >
                Verify Code
              </Button>

              <div className="text-center space-y-2">
                {!canResend ? (
                  <p className="text-sm text-paypal-gray">
                    Resend code in {timeLeft}s
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="text-sm text-paypal-blue hover:text-paypal-blue-hover font-medium"
                  >
                    Resend verification code
                  </button>
                )}
                
                <p className="text-xs text-paypal-gray">
                  Didn't receive the code? Check your spam folder
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OTPPage;