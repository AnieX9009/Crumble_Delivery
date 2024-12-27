import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import  { store } from './src/components/redux/store'; // Adjust the path if needed

// Import Screens
import LogInEmpty from './src/pages/logInEmpty';
import Register from './src/pages/register';
import Verificationcode from './src/pages/verificationcode';
import PersonalInfo from './src/pages/personalInfo';
import Home from './src/pages/home';
import Personal from './src/pages/personal';
import Profile from './src/pages/profile';
import Notification from './src/pages/notification';
import Editprofile from './src/pages/Editprofile';
import Orderdetails from './src/pages/Orderdetails';
import Tracking from './src/pages/tracking';

// Import the `Order` type from the correct file
import { Order } from './src/components/redux/types';  // Adjust the path if needed
import History from './src/pages/history';

// Define the parameter list for navigation
export type RootStackParamList = {
  LogInEmpty: undefined;
  Register: undefined;
  Verificationcode: undefined;
  PersonalInfo: undefined;
  Home: undefined;
  Profile: undefined;
  Personal: undefined;
  Notification: undefined;
  Editprofile: undefined;
  Orderdetails: { order: Order }; 
  Tracking: { order: Order };  // Use the Order type here
  History: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    // Wrap the entire app with Redux Provider for state management
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LogInEmpty" component={LogInEmpty} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Verificationcode" component={Verificationcode} />
          <Stack.Screen name="PersonalInfo" component={PersonalInfo} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Personal" component={Personal} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Editprofile" component={Editprofile} />
          <Stack.Screen name="Orderdetails" component={Orderdetails} />
          <Stack.Screen name="Tracking" component={Tracking} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
