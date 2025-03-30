import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ApplicationForm from "../screens/ApplicationForm";
import JobFinder from "../screens/JobFinder";
import SavedJobs from "../screens/SavedJobs";
import { JobsProvider } from "./Context";
import JobDetails from "../screens/JobDetails";
const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    return (
        <JobsProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}>

                    <Stack.Screen name="JobFinder" component={JobFinder} />
                    <Stack.Screen name="ApplicationForm" component={ApplicationForm} />
                    <Stack.Screen name="SavedJobs" component={SavedJobs} />
                    <Stack.Screen name="JobDetails" component={JobDetails} />

                </Stack.Navigator>
            </NavigationContainer>
        </JobsProvider>
    );
};

export default AppNavigator;