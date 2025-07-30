import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-paypal-gray-light flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-paypal-blue mb-4">PayPal UI Demo</h1>
          <p className="text-xl text-paypal-gray">Beautiful authentication pages inspired by PayPal's design</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-paypal-blue">Login Page</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-paypal-gray text-sm mb-4">
                Clean login form with email/password and OAuth options
              </p>
              <Button 
                className="w-full bg-paypal-blue hover:bg-paypal-blue-hover text-white"
                onClick={() => window.location.href = '/login'}
              >
                View Login
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-paypal-blue">Sign Up Page</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-paypal-gray text-sm mb-4">
                Registration form with validation and OAuth integration
              </p>
              <Button 
                className="w-full bg-paypal-blue hover:bg-paypal-blue-hover text-white"
                onClick={() => window.location.href = '/signup'}
              >
                View Sign Up
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-paypal-blue">Forgot Password</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-paypal-gray text-sm mb-4">
                Password recovery flow with email verification
              </p>
              <Button 
                className="w-full bg-paypal-blue hover:bg-paypal-blue-hover text-white"
                onClick={() => window.location.href = '/forgot-password'}
              >
                View Forgot Password
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-paypal-blue">Reset Password</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-paypal-gray text-sm mb-4">
                Password reset form with strength indicators
              </p>
              <Button 
                className="w-full bg-paypal-blue hover:bg-paypal-blue-hover text-white"
                onClick={() => window.location.href = '/reset-password'}
              >
                View Reset Password
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-paypal-blue">OTP Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-paypal-gray text-sm mb-4">
                6-digit code verification with auto-focus
              </p>
              <Button 
                className="w-full bg-paypal-blue hover:bg-paypal-blue-hover text-white"
                onClick={() => window.location.href = '/otp'}
              >
                View OTP
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-paypal-blue">OAuth Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-paypal-gray text-sm mb-4">
                Google & GitHub OAuth buttons in all forms
              </p>
              <Button 
                variant="outline"
                className="w-full border-paypal-blue text-paypal-blue hover:bg-paypal-blue-light"
                disabled
              >
                Integrated in Pages
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-paypal-gray">
            All pages feature PayPal's signature white and blue color scheme with responsive design
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
