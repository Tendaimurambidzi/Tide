# TideApp

A social media app built with React Native, featuring a yellow theme, custom UI elements, horizontal swipe posts, media picker, and Firebase integration.

## Features

- **Yellow Theme**: Custom color scheme with yellow primary colors.
- **Custom UI**: 
  - Tide Home (lighthouse icon)
  - Cast Post (satellite icon)
  - Scan Search (telescope icon)
  - Harbour Profile (anchor icon)
- **Horizontal Swipe Posts**: Swipe through posts using Swiper.
- **Timestamps**: Display time ago for posts.
- **Media Picker**: Pick images from gallery or camera.
- **Firebase Placeholders**: Ready for Firebase auth and storage.
- **Semicircular Buttons**: Rounded buttons for actions.
- **Red Cancel/Close**: Red buttons for cancellation.

## Getting Started

### Prerequisites

- Node.js >= 20
- React Native development environment set up

### Installation

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start Metro:
   ```sh
   npm start
   ```

3. Run on Android:
   ```sh
   npm run android
   ```

4. Build APK:
   ```sh
   cd android
   ./gradlew assembleRelease
   ```

## Project Structure

- `src/screens/`: HomeScreen, CastScreen, ScanScreen, HarbourScreen
- `src/components/`: Post, MediaPicker
- `src/utils/`: colors.ts

## Dependencies

- React Navigation
- React Native Vector Icons
- React Native Image Picker
- Firebase
- React Native Swiper

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
