# react-native-tutorial

learning react native with expo following this tutorial
<https://www.youtube.com/watch?v=0-S5a0eXPoc>

## creating the project

```bash
npx create-expo-app --template
```

select blank template and name the app my-app

## running the app on a physical iOS device

Install the expo client from the App Store on your iOS device  
Run the following command in your terminal.
Connect your physical device to the same internet connection your dev machine is running on.

```bash
npm run start
```

Scan the QR Code presented in the terminal and expo will run your app on your device
To pull up the developer menu shake your device

## running the app on an iOS device emulator

Install xcode to run the iOS emulator.  
Run xcode and select your iOS device.  
Run the following command in your terminal.

```bash
npm run start
```

Select the iOS option. This will launch your app in your running iOS device.  
To pull up the developer menu type CMD+d

## running the app on an Andriod device emulator

Install Andriod Studio from <https://developer.android.com/studio>  
Follow the steps here <https://docs.expo.dev/workflow/android-studio-emulator/>
Open Andriod Studio and run your Andriod device

Run the following command in your terminal.

```bash
npm run start
```

Select the Andriod option. This will launch your app in your running Andriod device.
To pull up the developer menu type CMD+m

## publishing the app to expo

I followed this guide to set up my environment to publish to expo <https://docs.expo.dev/eas-update/getting-started/>

Run the following to setup publishing with eas

```bash
## install and configure expo updates
npx expo install expo-updates
eas update:configure
## type in your expo username and password

eas build:configure

## publish preview to dev
npm run publish-dev

## publish a preview to expo
npm run publish-preview
```
