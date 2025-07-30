import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'default',
  size = 'default',
  disabled = false,
  style,
  textStyle,
}) => {
  const buttonStyle = [
    styles.base,
    styles[variant],
    styles[`${size}Size`],
    disabled && styles.disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  default: {
    backgroundColor: '#0070f3',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#0070f3',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.5,
  },
  defaultSize: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  smSize: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  lgSize: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  defaultText: {
    color: '#ffffff',
  },
  outlineText: {
    color: '#0070f3',
  },
  ghostText: {
    color: '#0070f3',
  },
  disabledText: {
    opacity: 0.5,
  },
  defaultSizeText: {
    fontSize: 16,
  },
  smText: {
    fontSize: 14,
  },
  lgText: {
    fontSize: 18,
  },
});