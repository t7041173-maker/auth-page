import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react-native';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardHeader, CardContent } from '../components/ui/Card';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <ArrowLeft size={24} color="#0070f3" />
          </TouchableOpacity>
          <Text style={styles.logo}>PayPal</Text>
          <View style={styles.placeholder} />
        </View>

        <View style={styles.content}>
          <Text style={styles.subtitle}>Log in to your account</Text>

          <Card style={styles.card}>
            <CardHeader>
              <Text style={styles.cardTitle}>Log in to your account</Text>
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

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Password</Text>
                  <View style={styles.passwordContainer}>
                    <Input
                      placeholder="Enter your password"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!showPassword}
                      style={styles.passwordInput}
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                      style={styles.eyeButton}
                    >
                      {showPassword ? (
                        <EyeOff size={20} color="#6B7280" />
                      ) : (
                        <Eye size={20} color="#6B7280" />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>

                <Button
                  title="Log In"
                  onPress={() => {}}
                  style={styles.loginButton}
                />

                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword' as never)}
                  style={styles.forgotPassword}
                >
                  <Text style={styles.forgotPasswordText}>
                    Forgot your password?
                  </Text>
                </TouchableOpacity>

                <View style={styles.divider}>
                  <View style={styles.dividerLine} />
                  <Text style={styles.dividerText}>or</Text>
                  <View style={styles.dividerLine} />
                </View>

                <Button
                  title="Continue with Google"
                  variant="outline"
                  onPress={() => {}}
                  style={styles.socialButton}
                />

                <Button
                  title="Continue with GitHub"
                  variant="outline"
                  onPress={() => {}}
                  style={styles.socialButton}
                />

                <View style={styles.signupPrompt}>
                  <Text style={styles.signupPromptText}>
                    Don't have an account?{' '}
                    <Text
                      style={styles.signupLink}
                      onPress={() => navigation.navigate('Signup' as never)}
                    >
                      Sign up
                    </Text>
                  </Text>
                </View>
              </View>
            </CardContent>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    padding: 4,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0070f3',
  },
  placeholder: {
    width: 32,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 32,
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
  },
  card: {
    width: '100%',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#111827',
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
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    top: 12,
    padding: 4,
  },
  loginButton: {
    marginTop: 8,
  },
  forgotPassword: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#0070f3',
    fontWeight: '500',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#6B7280',
  },
  socialButton: {
    marginBottom: 12,
  },
  signupPrompt: {
    alignItems: 'center',
    paddingTop: 16,
  },
  signupPromptText: {
    fontSize: 14,
    color: '#6B7280',
  },
  signupLink: {
    color: '#0070f3',
    fontWeight: '500',
  },
});

export default LoginScreen;