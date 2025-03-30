import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
   JobFinder: undefined; 
   ApplicationForm: undefined; 
   SavedJobs: undefined; 
   JobDetails: undefined; 
};

export type JobListNavigationProp = NativeStackNavigationProp<RootStackParamList, "JobFinder">;


export interface NavProps {
   navigation: NavigationProp<any>;
}