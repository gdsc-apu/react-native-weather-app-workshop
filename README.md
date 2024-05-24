# React Native Weather App Setup

This guide will help you set up a React Native weather app using TailwindCSS. Follow the steps below to get your development environment ready.

## Step 1: Install Node.js and npm

First, you need to install Node.js and npm. Download the prebuilt installer from the [Node.js website](https://nodejs.org/en/download/prebuilt-installer) and follow the installation instructions.

## Step 2: Create a New Expo App

Open your terminal and run the following command to create a new Expo app using the template:

```shell
npx create-expo-app --template
```

## Step 3: Navigate to Your App Directory
Change to your app directory with the following command:

```shell
cd yourAppName
```

## Step 4: Install React Native Heroicons and React Native SVG

To use Heroicons in your app, install react-native-heroicons and react-native-svg:

```shell
npm install react-native-heroicons react-native-svg
```

## Step 5: Install React Native Progress
Next, install ```react-n
ative-progress``` to display progress indicators in your app:

```shell
npm install react-native-progress
```

## Step 6: Install Axios
Install `axios` to make HTTP requests to fetch weather data:

```shell
npm install axios
```

## Step 7: Set Up TailwindCSS with NativeWind
a. Install NativeWind

```shell
npm install nativewind
```

b. Install TailwindCSS
Install TailwindCSS as a development dependency:
```shell
npm install --save-dev tailwindcss@3.3.2
```

c. Initialize TailwindCSS
Run the following command to create a TailwindCSS configuration file:

```shell
npx tailwindcss init
```

d. Configure TailwindCSS
Replace the contents of `tailwind.config.js` with the following configuration:

```shell
// tailwind.config.js
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
e. Configure Babel
```

e. Configure Babel
Replace the contents of `babel.config.js` with the following configuration:

```shell
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"],
  };
};

```

## Step 8: Start the Expo Development Server
Finally, start the Expo development server with the following command:

```shell
npx expo start
```

If you need to use the tunnel option, use:

```shell
npx expo start --tunnel
```