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
import { Eye, EyeOff } from 'lucide-react-native';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardHeader, CardContent } from '../components/ui/Card';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>PayPal</Text>
          <Text style={styles.subtitle}>Create your account</Text>
        </View>

        <View style={styles.content}>
          <Card style={styles.card}>
            <CardHeader>
              <Text style={styles.cardTitle}>Sign up for PayPal</Text>
            </CardHeader>
            <CardContent>
              <View style={styles.form}>
                <View style={styles.nameRow}>
                  <View style={styles.nameInput}>
                    <Text style={styles.label}>First name</Text>
                    <Input
                      placeholder="First name"
                      value={formData.firstName}
                      onChangeText={(value) => handleInputChange('firstName', value)}
                    />
                  </View>
                  <View style={styles.nameInput}>
                    <Text style={styles.label}>Last name</Text>
                    <Input
                      placeholder="Last name"
                      value={formData.lastName}
                      onChangeText={(value) => handleInputChange('lastName', value)}
                    />
                  </View>
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Email address</Text>
                  <Input
                    placeholder="Enter your email"
                    value={formData.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Password</Text>
                  <View style={styles.passwordContainer}>
                    <Input
                      placeholder="Create a password"
                      value={formData.password}
                      onChangeText={(value) => handleInputChange('password', value)}
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

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Confirm password</Text>
                  <View style={styles.passwordContainer}>
                    <Input
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChangeText={(value) => handleInputChange('confirmPassword', value)}
                      secureTextEntry={!showConfirmPassword}
                      style={styles.passwordInput}
                    />
                    <TouchableOpacity
                      onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                      style={styles.eyeButton}
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} color="#6B7280" />
                      ) : (
                        <Eye size={20} color="#6B7280" />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.termsContainer}>
                  <TouchableOpacity
                    onPress={() => handleInputChange('agreeToTerms', !formData.agreeToTerms)}
                    style={styles.checkbox}
                  >
                    <View style={[styles.checkboxBox, formData.agreeToTerms && styles.checkboxChecked]} />
                  </TouchableOpacity>
                  <Text style={styles.termsText}>
                    I agree to PayPal's{' '}
                    <Text style={styles.termsLink}>User Agreement</Text>
                    {' '}and{' '}
                    <Text style={styles.termsLink}>Privacy Policy</Text>
                  </Text>
                </View>

                <Button
                  title="Sign Up"
                  onPress={() => {}}
                  disabled={!formData.agreeToTerms}
                  style={styles.signupButton}
                />

                <View style={styles.divider}>
                  <View style={styles.dividerLine} />
                  <Text style={styles.dividerText}>or</Text>
                  <View style={styles.dividerLine} />
                </View>

                <Button
                  title="Sign up with Google"
                  variant="outline"
                  onPress={() => {}}
                  style={styles.socialButton}
                />

                <Button
                  title="Sign up with GitHub"
                  variant="outline"
                  onPress={() => {}}
                  style={styles.socialButton}
                />

                <View style={styles.loginPrompt}>
                  <Text style={styles.loginPromptText}>
                    Already have an account?{' '}
                    <Text
                      style={styles.loginLink}
                      onPress={() => navigation.navigate('Login' as never)}
                    >
                      Log in
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
    paddingHorizontal: 20,
    paddingVertical: 32,
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0070f3',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 32,
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
  nameRow: {
    flexDirection: 'row',
    gap: 12,
  },
  nameInput: {
    flex: 1,
    gap: 8,
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
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginTop: 8,
  },
  checkbox: {
    marginTop: 2,
  },
  checkboxBox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 3,
    backgroundColor: '#ffffff',
  },
  checkboxChecked: {
    backgroundColor: '#0070f3',
    borderColor: '#0070f3',
  },
  termsText: {
    flex: 1,
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  termsLink: {
    color: '#0070f3',
    fontWeight: '500',
  },
  signupButton: {
    marginTop: 8,
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
  loginPrompt: {
    alignItems: 'center',
    paddingTop: 16,
  },
  loginPromptText: {
    fontSize: 14,
    color: '#6B7280',
  },
  loginLink: {
    color: '#0070f3',
    fontWeight: '500',
  },
});

export default SignupScreen;