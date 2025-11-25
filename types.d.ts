declare module '@expo/vector-icons' {
  import React from 'react';
  
  export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: any;
  }
  
  export const MaterialCommunityIcons: React.FC<IconProps>;
  export const FontAwesome: React.FC<IconProps>;
  export const Ionicons: React.FC<IconProps>;
}
