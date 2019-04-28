/**
 * @format
 */
import React from "react";
import { Navigation } from "react-native-navigation";
import App from "./App";
import { Provider } from "redux";
import configureStore from "./src/store/configureStore";
import Authentication from "./src/screens/auth/Authentication";
const store = configureStore();
const appMain = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => Authentication, Provider, store);
Navigation.registerComponent(`example.Overlay`, () => App, Provider, store);

Navigation.events().registerAppLaunchedListener(() => {
  // Navigation.showOverlay({
  //   component: {
  //     name: "example.Overlay",
  //     options: {
  //       overlay: {
  //         interceptTouchOutside: true
  //       }
  //     }
  //   }
  // });
  Navigation.setRoot({
    root: {
      stack: {
        id: "AppId",
        children: [
          {
            component: {
              name: "navigation.playground.WelcomeScreen",
              options: {
                topBar: {
                  title: {
                    text: "Login"
                  }
                }
              }
            }
          }
        ]
      }
    }
  });
  // Navigation.setStackRoot(this.props.componentId, [
  //   {
  //     component: {
  //       name: "navigation.playground.WelcomeScreen",
  //       passProps: {
  //         text: "Root screen"
  //       },
  //       options: {
  //         animations: {
  //           setStackRoot: {
  //             enabled: true
  //           }
  //         }
  //       }
  //     }
  //   }
  // ]);
});
