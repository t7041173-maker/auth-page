import React from 'react';
import { Text as RNText, StyleSheet, TextStyle } from 'react-native';

interface TextProps {
  children: React.ReactNode;
  variant?: 'title' | 'subtitle' | 'body' | 'caption';
  style?: TextStyle;
}

export const Text: React.FC<TextProps> = ({ 
  children, 
  variant = 'body', 
  style 
}) => {
  return (
    <RNText style={[styles[variant], style]}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  body: {
    fontSize: 16,
    color: '#374151',
  },
  caption: {
    fontSize: 14,
    color: '#6B7280',
  },
});