import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface AuthHeaderProps {
  showBackButton?: boolean;
  showAuthButtons?: boolean;
}

export const AuthHeader = ({ showBackButton = false, showAuthButtons = true }: AuthHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button 
          onClick={() => navigate('/')}
          className="text-2xl font-bold text-paypal-blue hover:text-paypal-blue-hover transition-colors"
        >
          PayPal
        </button>
        
        {showAuthButtons && (
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
        )}
      </div>
    </header>
  );
};