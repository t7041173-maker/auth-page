import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Lock, Check } from 'lucide-react-native';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardContent } from '../components/ui/Card';

const OTPScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(TextInput | null)[]>([]);

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

  const handleKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const otpString = otp.join('');
    if (otpString.length === 6) {
      setIsVerified(true);
    }
  };

  const handleResend = () => {
    setTimeLeft(60);
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  if (isVerified) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.logo}>PayPal</Text>

          <Card style={styles.card}>
            <CardHeader>
              <View style={styles.iconContainer}>
                <Check size={32} color="#10B981" />
              </View>
              <Text style={styles.cardTitle}>Verification Successful</Text>
            </CardHeader>
            <CardContent>
              <Text style={styles.description}>
                Your account has been verified successfully. You can now access your account.
              </Text>

              <Button
                title="Continue to Dashboard"
                onPress={() => navigation.navigate('Index' as never)}
                style={styles.button}
              />
            </CardContent>
          </Card>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>PayPal</Text>

        <Card style={styles.card}>
          <CardHeader>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login' as never)}
              style={styles.backButton}
            >
              <ArrowLeft size={20} color="#0070f3" />
            </TouchableOpacity>
            <View style={styles.iconContainer}>
              <Lock size={32} color="#0070f3" />
            </View>
            <Text style={styles.cardTitle}>Enter verification code</Text>
            <Text style={styles.description}>
              We sent a 6-digit code to your email address
            </Text>
          </CardHeader>
          <CardContent>
            <View style={styles.form}>
              <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    style={styles.otpInput}
                    value={digit}
                    onChangeText={(value) => handleChange(index, value)}
                    onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
                    keyboardType="numeric"
                    maxLength={1}
                    textAlign="center"
                  />
                ))}
              </View>

              <Button
                title="Verify Code"
                onPress={handleSubmit}
                disabled={otp.some(digit => !digit)}
                style={styles.button}
              />

              <View style={styles.resendContainer}>
                {!canResend ? (
                  <Text style={styles.timerText}>
                    Resend code in {timeLeft}s
                  </Text>
                ) : (
                  <TouchableOpacity onPress={handleResend}>
                    <Text style={styles.resendText}>
                      Resend verification code
                    </Text>
                  </TouchableOpacity>
                )}
                
                <Text style={styles.helpText}>
                  Didn't receive the code? Check your spam folder
                </Text>
              </View>
            </View>
          </CardContent>
        </Card>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 32,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0070f3',
    textAlign: 'center',
    marginBottom: 32,
  },
  card: {
    width: '100%',
  },
  backButton: {
    alignSelf: 'flex-start',
    padding: 4,
    marginBottom: 16,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EBF8FF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#111827',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  form: {
    gap: 24,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  otpInput: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: 8,
  },
  resendContainer: {
    alignItems: 'center',
    gap: 8,
  },
  timerText: {
    fontSize: 14,
    color: '#6B7280',
  },
  resendText: {
    fontSize: 14,
    color: '#0070f3',
    fontWeight: '500',
  },
  helpText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
});

export default OTPScreen;