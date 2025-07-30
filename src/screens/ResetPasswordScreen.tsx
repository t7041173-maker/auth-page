import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Eye, EyeOff, Check } from 'lucide-react-native';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardHeader, CardContent } from '../components/ui/Card';

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
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
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.logo}>PayPal</Text>

          <Card style={styles.card}>
            <CardHeader>
              <View style={styles.iconContainer}>
                <Check size={32} color="#10B981" />
              </View>
              <Text style={styles.cardTitle}>Password Reset Successfully</Text>
            </CardHeader>
            <CardContent>
              <Text style={styles.description}>
                Your password has been reset successfully. You can now log in with your new password.
              </Text>

              <Button
                title="Continue to Login"
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
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.logo}>PayPal</Text>

          <Card style={styles.card}>
            <CardHeader>
              <Text style={styles.cardTitle}>Create new password</Text>
              <Text style={styles.description}>
                Choose a strong password for your account
              </Text>
            </CardHeader>
            <CardContent>
              <View style={styles.form}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>New password</Text>
                  <View style={styles.passwordContainer}>
                    <Input
                      placeholder="Create a new password"
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
                  
                  {formData.password && (
                    <View style={styles.requirements}>
                      <Text style={styles.requirementsTitle}>Password must contain:</Text>
                      <View style={styles.requirementsList}>
                        <View style={styles.requirement}>
                          <View style={[styles.indicator, hasMinLength && styles.indicatorValid]} />
                          <Text style={[styles.requirementText, hasMinLength && styles.requirementValid]}>
                            At least 8 characters
                          </Text>
                        </View>
                        <View style={styles.requirement}>
                          <View style={[styles.indicator, hasUppercase && styles.indicatorValid]} />
                          <Text style={[styles.requirementText, hasUppercase && styles.requirementValid]}>
                            One uppercase letter
                          </Text>
                        </View>
                        <View style={styles.requirement}>
                          <View style={[styles.indicator, hasLowercase && styles.indicatorValid]} />
                          <Text style={[styles.requirementText, hasLowercase && styles.requirementValid]}>
                            One lowercase letter
                          </Text>
                        </View>
                        <View style={styles.requirement}>
                          <View style={[styles.indicator, hasNumber && styles.indicatorValid]} />
                          <Text style={[styles.requirementText, hasNumber && styles.requirementValid]}>
                            One number
                          </Text>
                        </View>
                        <View style={styles.requirement}>
                          <View style={[styles.indicator, hasSpecialChar && styles.indicatorValid]} />
                          <Text style={[styles.requirementText, hasSpecialChar && styles.requirementValid]}>
                            One special character
                          </Text>
                        </View>
                      </View>
                    </View>
                  )}
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Confirm new password</Text>
                  <View style={styles.passwordContainer}>
                    <Input
                      placeholder="Confirm your new password"
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
                  
                  {formData.confirmPassword && (
                    <View style={styles.requirement}>
                      <View style={[styles.indicator, passwordsMatch && styles.indicatorValid]} />
                      <Text style={[styles.requirementText, passwordsMatch && styles.requirementValid]}>
                        {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
                      </Text>
                    </View>
                  )}
                </View>

                <Button
                  title="Reset Password"
                  onPress={handleSubmit}
                  disabled={!hasMinLength || !hasUppercase || !hasLowercase || !hasNumber || !hasSpecialChar || !passwordsMatch}
                  style={styles.button}
                />
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
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#D1FAE5',
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
  requirements: {
    marginTop: 8,
  },
  requirementsTitle: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  requirementsList: {
    gap: 4,
  },
  requirement: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#D1D5DB',
  },
  indicatorValid: {
    backgroundColor: '#10B981',
  },
  requirementText: {
    fontSize: 12,
    color: '#6B7280',
  },
  requirementValid: {
    color: '#10B981',
  },
  button: {
    marginTop: 8,
  },
});

export default ResetPasswordScreen;