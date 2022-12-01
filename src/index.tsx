import { requireNativeComponent, ViewProps } from 'react-native';
const AVRoutePicker = requireNativeComponent('AVRoutePicker');

export interface AVRoutePickerViewProps extends ViewProps {
  color?: string;
  activeColor?: string; // The color when AirPlay is active
}

export default (AVRoutePicker as any) as React.ComponentType<
  AVRoutePickerViewProps
>;
