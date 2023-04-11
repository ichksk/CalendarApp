import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeView } from 'src/views/pages/home';
import { SettingsView } from 'src/views/pages/settings';

import { Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';

const TabIcon = (props) => {
  const name = props.focused ? props.name : props.name+"-outline"
  const color = "black"
  const size = 24
  return <Ionicons name={name} color={color} size={size}/>
}

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="カレンダー"
            component={HomeView}
            options={{
              tabBarShowLabel:false,
              headerStyle:{
                shadowOpacity:0,
                backgroundColor:null,
              },
              headerTitleAlign:"left",

              tabBarIcon: ({focused}) => <TabIcon focused={focused} name="calendar"/>,
            }}/>
          <Tab.Screen
            name="設定"
            component={SettingsView}
            options={{
              tabBarShowLabel:false,
              headerStyle:{
                shadowOpacity:0,
              },
              tabBarIcon: ({focused}) => <TabIcon focused={focused} name="settings"/>
            }}
            />
        </Tab.Navigator>
      </NavigationContainer>

      <StatusBar/>
    </>
  );
}