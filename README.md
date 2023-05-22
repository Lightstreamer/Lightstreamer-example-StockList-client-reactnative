# Lightstreamer - Stock-List Demo - React Native Client

<!-- START DESCRIPTION lightstreamer-example-stocklist-client-reactnative -->

This project contains a demo application showing the integration between the Lightstreamer Client Library and React Native.

![screenshot](screen_stocklist_large.png)<br>

## Details

This app, compatible with iPhone and Android, is a React Native version of [Stock-List iOS Client](https://github.com/Lightstreamer/Lightstreamer-example-StockList-client-ios).<br>

This app uses the [Lightstreamer Web Client Library](https://www.npmjs.com/package/lightstreamer-client-web) to handle the communications with Lightstreamer Server. A simple user interface is implemented to display real-time market data for ten stocks generated by a feed simulator.<br>

If you want to go deeper into React Native, check out the [React Native site](https://reactnative.dev).

## Build iOS

A full Xcode project specification, ready for compilation of the app sources, is provided. Please recall that you need a valid iOS Developer Program membership to run or debug your app on a test device.

Before you can build this demo, you need to install various required tools.

### Requirements

This guide assumes OS X, which is needed for iOS development.

* Install *Xcode* 10.0 or higher. It can be installed from the App Store.

* Install [Node.js](https://nodejs.org/en/download/stable) version 14.0 or newer (it includes *npm* as well).

* Install [Ruby](https://www.ruby-lang.org) version 2.7.6 or newer. Since macOS 13.2 is shipped with Ruby 2.6.10, which is not what is required by the latest version of React Native, we suggest to install the proper version of Ruby in your system by means of a Ruby version manager. Some common Ruby version managers are:

  * [rbenv](https://github.com/rbenv/rbenv)
  * [RVM](https://rvm.io/)
  * [chruby](https://github.com/postmodern/chruby)
  * [asdf-vm](https://github.com/asdf-vm) with the [asdf-ruby](https://github.com/asdf-vm/asdf-ruby) plugin

* Install the latest version of [Cocoapods](https://cocoapods.org/).

All the following commands need to be typed on a command line window.

* Install *watchman*, for instance with [Homebrew](http://brew.sh) by doing:

```sh
$ brew install watchman
```

* Go into the folder *Lightstreamer-example-StockList-client-reactnative* and get the dependencies with the command:

```sh
$ npm install
```

* Go into the folder *Lightstreamer-example-StockList-client-reactnative/ios* and run the following command
to install Ruby's [Bundler](https://bundler.io/) (a Ruby gem that helps managing the Ruby dependencies of the project) and the iOS dependencies:

```sh
$ bundle install
$ bundle exec pod install
```

### Compile and Run

* Open the file *ios/ReactDemo.xcworkspace* with Xcode

* Set the IP address of your local Lightstreamer Server in the constant `SERVER_ADDRESS`, defined in `components/Constants.js`.

* Follow the installation instructions for the Data and Metadata adapters required by the demo, detailed in the [Lightstreamer - Stock-List Demo - Java Adapter](https://github.com/Lightstreamer/Lightstreamer-example-StockList-adapter-java) project.

Done this, the app should run correctly on your test device and connect to your server.

## Build Android

Before you can build this demo, you need to install various required tools.

### Requirements

* Install [Node.js](https://nodejs.org/en/download/stable) version 14.0 or newer (it includes *npm* as well).

* Install Java Development Kit 11 or newer.

* Install [Android Studio](https://developer.android.com/studio/index.html). While on Android Studio installation wizard, make sure the following items are checked:

  * Android SDK
  * Android SDK Platform
  * Android Virtual Device

### Compile and Run

* Set the IP address of your local Lightstreamer Server in the constant `SERVER_ADDRESS`, defined in `components/Constants.js`.

* Follow the installation instructions for the Data and Metadata adapters required by the demo, detailed in the [Lightstreamer - Stock-List Demo - Java Adapter](https://github.com/Lightstreamer/Lightstreamer-example-StockList-adapter-java) project.

* Start an Android emulator

* Run the following commands from the project folder:

  * `npx react-native start`

  * `npx react-native run-android`

Done this, the app should run correctly on your test device and connect to your server.

## See Also

### Lightstreamer Adapters Needed by This Demo Client

* [Lightstreamer - Stock- List Demo - Java Adapter](https://github.com/Lightstreamer/Lightstreamer-example-Stocklist-adapter-java)
* [Lightstreamer - Reusable Metadata Adapters- Java Adapter](https://github.com/Lightstreamer/Lightstreamer-example-ReusableMetadata-adapter-java)

### Related Projects

* [Lightstreamer - Stock-List Demos - HTML Clients](https://github.com/Lightstreamer/Lightstreamer-example-Stocklist-client-javascript)
* [Lightstreamer - Stock-List Demo - iOS Client](https://github.com/Lightstreamer/Lightstreamer-example-StockList-client-ios)
* [Lightstreamer - Stock-List Demo with APNs Push Notifications - iOS Client](https://github.com/Lightstreamer/Lightstreamer-example-MPNStockList-client-ios)
* [Lightstreamer - Stock-List Demo - Android Client](https://github.com/Lightstreamer/Lightstreamer-example-AdvStockList-client-android)
* [Lightstreamer - Basic Stock-List Demo - OS X Client](https://github.com/Lightstreamer/Lightstreamer-example-StockList-client-osx)
* [Lightstreamer - Basic Stock-List Demo - Electron Client](https://github.com/Lightstreamer/Lightstreamer-example-StockList-client-electron)
* [Lightstreamer - Basic Stock-List Demo - HTML (React) Client](https://github.com/Lightstreamer/Lightstreamer-example-StockList-client-react)

## Lightstreamer Compatibility Notes

* Compatible with [Lightstreamer Client Web SDK](https://www.npmjs.com/package/lightstreamer-client-web) 9.0.0 or newer.
* For Lightstreamer Server version 7.3.2 or greater.
* For a version of the demo compatible with Lightstreamer Client Web 8.0, check out this [tag](https://github.com/Lightstreamer/Lightstreamer-example-StockList-client-reactnative/releases/tag/for-client-8.x).
