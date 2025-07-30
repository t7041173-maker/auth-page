import React from 'react';
import { TextInput, StyleSheet, TextInputProps, ViewStyle } from 'react-native';

interface InputProps extends TextInputProps {
  style?: ViewStyle;
}

export const Input: React.FC<InputProps> = ({ style, ...props }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor="#9CA3AF"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#ffffff',
    color: '#111827',
  },
});