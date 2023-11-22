## Created with Capacitor Create App

This app was created using [`npm init @capacitor/app`](https://github.com/ionic-team/create-capacitor-app),
and comes with a very minimal shell for building an app.

### Running this example

To run the provided example, run `npm start`.

If error ["Vite not found in vite.config.ts cannot run vite apps"](https://stackoverflow.com/a/75555136/4072641) appears, run `npm install --include=dev`.


### Building your web code

Once you are ready to test your web app on a mobile device, you'll need to [build your web app](https://capacitorjs.com/docs/basics/workflow#building-your-web-code) for distribution running `npm run build`.

## Android Support​

### Adding the Android Platform​

First, install the @capacitor/android package using `npm install @capacitor/android`.

Then, add the Android platform using `npx cap add android`.

### Sync your web code to your native project​

Once you've created your native projects, you can [sync your web application](https://capacitorjs.com/docs/basics/workflow#syncing-your-web-code-to-your-capacitor-project) to your native project using `npx cap sync`. This will copy your built web application, by default `www`, to your native project and install the native projects dependencies.

### Testing your Capacitor app​

First you need to have Android Studio installed.

Once you've synced over your web bundle to your native project, it is time to test your application on a mobile device. There are a few different ways to do this, but the easiest way is to use the built in Capacitor CLI commands.

To run a debug build of your Capacitor app on an Android device, use `npx cap run android`.

If you'd like more control over your native project you can quickly open the native IDEs using the Capacitor CLI.

To open the [Android Capacitor project in Android Studio](https://capacitorjs.com/docs/android#opening-the-android-project), use `npx cap open android`.

### Building your apk withou Android Studio

#### Prerequisites

Make sure you have JDK +17 installed, and [Android SDK Command-line Tools](https://developer.android.com/studio) downloaded.

After downloading command-line tools, you need to [install a SDK](https://developer.android.com/tools/sdkmanager?hl=pt-br). First rename `cmd-line-tools` folder to `latest` and put it inside folder structure `/path/to/android_sdk/cmdline-tools` of your choice. Then, to install android-33, for example, run `/path/to/android_sdk/cmdline-tools/latest/bin/sdkmanager "platform-tools" "platforms;android-33"`

[Accept the SDK licences](https://stackoverflow.com/a/70380627/4072641) running `/path/to/android_sdk/cmdline-tools/latest/bin/sdkmanager --licenses --sdk_root='/path/to/android_sdk/cmdline-tools/latest/'`

#### Building the apk

After adding the Android Platform, there will be an `android` folder inside your project's root folder. Create the `local.properties` file inside the android folder, with the content `sdk.dir = /path/to/android_sdk/cmdline-tools/latest/`.

To build your apk, enter `android` folder and run `./gradlew assembleDebug`. Then your apk will be at `android/app/build/outputs/apk/debug/app-debug.apk`.
