# Standrised Frontend Base project setup

This template contains the base module for an expo project setup with expo-router v2. This base module establishes the foundation and is designed to integrate all the epxo project features.

## Overview

The base module provides the core setup necessary for a minimal expo application. It includes a expo-router configuration with graphql apollo client setup and sets the stage for integrating additional modules via an automated process.

## Features

- Expo project setup with expo router v2

## How to run:

### Pre requisites

- node
- xcode

## Structure

- `app` : all the routes will be created here.
  - `\_layout` This will the starting of the application. This will contain all the `expo router`, `Apollo client` setup.
    - `[...missing].tsx` This file will be responsible for showing the UI if any route is not available.
    - `+html.tsx` This contains all the meta information regarding the application. We can also pass all the scripts here.
    - `.... routes` All the routes that will be available will have a separate file with `Example.tsx`. You can read more about this on [https://docs.expo.dev/router/introduction/](expo-router documentation)
- `__tests__` : Jest test cases framework has been setup. If you want to run the tests, you can write your tests in this directory and run using the command `yarn or npm test`
- `assets` : assets used in the project will be kept here
- `components` : all the components will go here. If the components are common, add in components folder directly or create specific folder to keep the components . For e.g. assets/auth/abc.png
- `.env` : This will contain all the env variables required in the application
- `app.json` : This contains expo related configuration for the app.
- `tsconfig.json` : this will contain all the typescript configurations. You can set paths in individual modules.
- `node_modules/`: Directory for installed NPM dependencies.
- `package.json`: Configuration file for NPM packages and scripts.
- `README.md`: Documentation for the base module.

### How to run the base-fe template

Steps to run the project:

1. `yarn install` or `npm install`
2. Create a `.env`file with all the variables present in the`.env.example` file.
3. To run the project in ios prebuild environment: `npm run ios`
4. To run the project in android prebuild environment: `npm run android`
5. To run the project in web prebuild environment: `npm run web`.
6. To run the project in expo go: `npm start` and then select the device. This is just a sandbox, some features might not work in this environment.

### How to commit:

Run `npm run format` and `npm run lint` and then commit.
