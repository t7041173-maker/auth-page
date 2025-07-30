import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-paypal-blue">PayPal</div>
          <div className="space-x-4">
            <Button 
              variant="outline"
              onClick={() => navigate('/login')}
              className="border-paypal-blue text-paypal-blue hover:bg-paypal-blue-light"
            >
              Log In
            </Button>
            <Button 
              onClick={() => navigate('/signup')}
              className="bg-paypal-blue hover:bg-paypal-blue-hover text-white"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            The safer, easier way to pay online
          </h1>
          <p className="text-xl text-paypal-gray mb-8 max-w-2xl mx-auto">
            PayPal is the faster, safer way to send money, make an online payment, receive money or set up a merchant account.
          </p>
          
          <div className="space-x-4 mb-16">
            <Button 
              size="lg"
              onClick={() => navigate('/signup')}
              className="bg-paypal-blue hover:bg-paypal-blue-hover text-white px-8 py-4 text-lg"
            >
              Sign Up for Free
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate('/login')}
              className="border-paypal-blue text-paypal-blue hover:bg-paypal-blue-light px-8 py-4 text-lg"
            >
              Log In
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-paypal-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-paypal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-paypal-gray">Your financial information is encrypted and secure</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-paypal-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-paypal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast</h3>
              <p className="text-paypal-gray">Send money in seconds to friends and family</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-paypal-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-paypal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global</h3>
              <p className="text-paypal-gray">Available in over 200 countries worldwide</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-paypal-gray-light py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-paypal-gray">© 2024 PayPal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;