import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Shield, Zap, Globe } from 'lucide-react-native';
import { Button } from '../components/ui/Button';

const IndexScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>PayPal</Text>
          <View style={styles.headerButtons}>
            <Button
              title="Log In"
              variant="outline"
              onPress={() => navigation.navigate('Login' as never)}
              style={styles.headerButton}
            />
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate('Signup' as never)}
              style={styles.headerButton}
            />
          </View>
        </View>

        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>
            The safer, easier way to pay online
          </Text>
          <Text style={styles.heroSubtitle}>
            PayPal is the faster, safer way to send money, make an online payment, 
            receive money or set up a merchant account.
          </Text>
          
          <View style={styles.heroButtons}>
            <Button
              title="Sign Up for Free"
              size="lg"
              onPress={() => navigation.navigate('Signup' as never)}
              style={styles.heroButton}
            />
            <Button
              title="Log In"
              variant="outline"
              size="lg"
              onPress={() => navigation.navigate('Login' as never)}
              style={styles.heroButton}
            />
          </View>
        </View>

        {/* Features */}
        <View style={styles.features}>
          <View style={styles.feature}>
            <View style={styles.featureIcon}>
              <Shield size={32} color="#0070f3" />
            </View>
            <Text style={styles.featureTitle}>Secure</Text>
            <Text style={styles.featureDescription}>
              Your financial information is encrypted and secure
            </Text>
          </View>

          <View style={styles.feature}>
            <View style={styles.featureIcon}>
              <Zap size={32} color="#0070f3" />
            </View>
            <Text style={styles.featureTitle}>Fast</Text>
            <Text style={styles.featureDescription}>
              Send money in seconds to friends and family
            </Text>
          </View>

          <View style={styles.feature}>
            <View style={styles.featureIcon}>
              <Globe size={32} color="#0070f3" />
            </View>
            <Text style={styles.featureTitle}>Global</Text>
            <Text style={styles.featureDescription}>
              Available in over 200 countries worldwide
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2024 PayPal. All rights reserved.
          </Text>
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
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0070f3',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  headerButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  hero: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#111827',
    marginBottom: 16,
    lineHeight: 40,
  },
  heroSubtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: 32,
    lineHeight: 26,
    paddingHorizontal: 20,
  },
  heroButtons: {
    gap: 16,
    width: '100%',
    alignItems: 'center',
  },
  heroButton: {
    width: '80%',
    maxWidth: 300,
  },
  features: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    gap: 32,
  },
  feature: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  featureIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EBF8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6B7280',
    lineHeight: 24,
  },
  footer: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default IndexScreen;