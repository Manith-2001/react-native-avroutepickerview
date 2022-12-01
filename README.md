# react-native-avroutepickerview

iOS AVRoutePickerView for React Native. Provides a native AirPlay button and corresponding view for selecting the AV "route". Use this module to add native AirPlay functionality to your React Native app on iOS! Forked from `react-native-avroutepicker` when it was no longer building or working correctly.

## Installation

```sh
npm install react-native-avroutepickerview
```
or
```sh
yarn add react-native-avroutepickerview
```

On iOS, you'll then need to:
```sh
cd ios && pod install
```

**Note:** The iOS simulator won't show the pop-up UI when you click the picker,
at least in some versions of the simulator. The only reliable way to see the
sytsem picker menu is to run it on a device.

## Usage

```tsx
import AVRoutePickerView from 'react-native-avroutepickerview';

// ...

<AVRoutePicker color="white" activeColor="blue" />;
```

### Properties

| Name | Type | Description |
|------|------|-------------|
| color | string | (*optional*) Icon color when AirPlay is inactive. |
| activeColor | string | (*optional*) Icon color when AirPlay is active. |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
