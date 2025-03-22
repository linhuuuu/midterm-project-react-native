import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ApplicationForm from "../screens/ApplicationForm";
import JobFinder from "../screens/JobFinder";
import SavedJobs from "../screens/SavedJobs";
import { View, Text, SafeAreaView } from "react-native";

const Stack = createNativeStackNavigator();

const AppNavigator=() => { 
 
    return ( 

       <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name="JobFinder" component={ApplicationForm} /> 

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;