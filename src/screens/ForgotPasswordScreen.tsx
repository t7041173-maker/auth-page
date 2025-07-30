import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Mail } from 'lucide-react-native';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardHeader, CardContent } from '../components/ui/Card';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.logo}>PayPal</Text>

          <Card style={styles.card}>
            <CardHeader>
              <View style={styles.iconContainer}>
                <Mail size={32} color="#0070f3" />
              </View>
              <Text style={styles.cardTitle}>Check your email</Text>
            </CardHeader>
            <CardContent>
              <Text style={styles.description}>
                We sent a password reset link to{'\n'}
                <Text style={styles.email}>{email}</Text>
              </Text>
              
              <Text style={styles.helpText}>
                Didn't receive the email? Check your spam folder or{' '}
                <Text
                  style={styles.link}
                  onPress={() => setIsSubmitted(false)}
                >
                  try a different email address
                </Text>
              </Text>

              <Button
                title="Back to Login"
                onPress={() => navigation.navigate('Login' as never)}
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
            <Text style={styles.cardTitle}>Forgot your password?</Text>
            <Text style={styles.description}>
              Enter your email address and we'll send you a link to reset your password.
            </Text>
          </CardHeader>
          <CardContent>
            <View style={styles.form}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Email address</Text>
                <Input
                  placeholder="Enter your email"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <Button
                title="Send Reset Link"
                onPress={handleSubmit}
                style={styles.button}
              />
            </View>

            <View style={styles.loginPrompt}>
              <Text style={styles.loginPromptText}>
                Remember your password?{' '}
                <Text
                  style={styles.loginLink}
                  onPress={() => navigation.navigate('Login' as never)}
                >
                  Back to Login
                </Text>
              </Text>
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
  email: {
    fontWeight: '500',
    color: '#111827',
  },
  helpText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },
  link: {
    color: '#0070f3',
    fontWeight: '500',
  },
  form: {
    gap: 16,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
  },
  button: {
    marginTop: 8,
  },
  loginPrompt: {
    alignItems: 'center',
    paddingTop: 24,
  },
  loginPromptText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  loginLink: {
    color: '#0070f3',
    fontWeight: '500',
  },
});

export default ForgotPasswordScreen;