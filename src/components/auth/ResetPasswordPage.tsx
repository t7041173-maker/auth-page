import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      setIsSubmitted(true);
    }
  };

  // Password strength indicators
  const hasMinLength = formData.password.length >= 8;
  const hasUppercase = /[A-Z]/.test(formData.password);
  const hasLowercase = /[a-z]/.test(formData.password);
  const hasNumber = /\d/.test(formData.password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);
  const passwordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword.length > 0;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-paypal-blue mb-2">PayPal</h1>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader className="space-y-1 pb-4 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-normal">
                Password Reset Successfully
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-paypal-gray">
                Your password has been reset successfully. You can now log in with your new password.
              </p>

              <Button 
                className="w-full h-12 bg-paypal-blue hover:bg-paypal-blue-hover text-white font-medium rounded-lg transition-colors mt-6"
                onClick={() => navigate('/login')}
              >
                Continue to Login
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
            <CardTitle className="text-2xl font-normal">
              Create new password
            </CardTitle>
            <p className="text-paypal-gray text-sm">
              Choose a strong password for your account
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  New password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a new password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="h-12 pr-10 border-border focus:border-paypal-blue focus:ring-paypal-blue"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-paypal-gray hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                
                {formData.password && (
                  <div className="space-y-2 text-xs">
                    <p className="text-paypal-gray">Password must contain:</p>
                    <div className="space-y-1">
                      <div className={`flex items-center ${hasMinLength ? 'text-green-600' : 'text-paypal-gray'}`}>
                        <div className={`w-3 h-3 rounded-full mr-2 ${hasMinLength ? 'bg-green-600' : 'bg-gray-300'}`} />
                        At least 8 characters
                      </div>
                      <div className={`flex items-center ${hasUppercase ? 'text-green-600' : 'text-paypal-gray'}`}>
                        <div className={`w-3 h-3 rounded-full mr-2 ${hasUppercase ? 'bg-green-600' : 'bg-gray-300'}`} />
                        One uppercase letter
                      </div>
                      <div className={`flex items-center ${hasLowercase ? 'text-green-600' : 'text-paypal-gray'}`}>
                        <div className={`w-3 h-3 rounded-full mr-2 ${hasLowercase ? 'bg-green-600' : 'bg-gray-300'}`} />
                        One lowercase letter
                      </div>
                      <div className={`flex items-center ${hasNumber ? 'text-green-600' : 'text-paypal-gray'}`}>
                        <div className={`w-3 h-3 rounded-full mr-2 ${hasNumber ? 'bg-green-600' : 'bg-gray-300'}`} />
                        One number
                      </div>
                      <div className={`flex items-center ${hasSpecialChar ? 'text-green-600' : 'text-paypal-gray'}`}>
                        <div className={`w-3 h-3 rounded-full mr-2 ${hasSpecialChar ? 'bg-green-600' : 'bg-gray-300'}`} />
                        One special character
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm new password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your new password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="h-12 pr-10 border-border focus:border-paypal-blue focus:ring-paypal-blue"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-paypal-gray hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                
                {formData.confirmPassword && (
                  <div className={`flex items-center text-xs ${passwordsMatch ? 'text-green-600' : 'text-red-500'}`}>
                    <div className={`w-3 h-3 rounded-full mr-2 ${passwordsMatch ? 'bg-green-600' : 'bg-red-500'}`} />
                    {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
                  </div>
                )}
              </div>

              <Button 
                className="w-full h-12 bg-paypal-blue hover:bg-paypal-blue-hover text-white font-medium rounded-lg transition-colors"
                type="submit"
                disabled={!hasMinLength || !hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar || !passwordsMatch}
              >
                Reset Password
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResetPasswordPage;