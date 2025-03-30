import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import JobList from "../components/JobList";
import { NavProps } from "../navigation and context/NavTypes";
import { useContext } from "react";
import { Context } from "../navigation and context/Context";
import { styles } from "../styles/styles";

const ApplicationForm = ({ navigation }: NavProps) => {
    const { savedJobs, isDarkMode } = useContext(Context);

    return (
        <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer, {paddingTop:0}]}>
            <View style={[styles.headerContainer, isDarkMode && styles.darkHeaderContainer]}>
                <Text style={[styles.header, isDarkMode && styles.darkHeader]}>Saved Jobs</Text>
                <TouchableOpacity onPress={() => navigation.navigate("JobFinder")}>
                    <Text style={[styles.savedJobsText, isDarkMode && styles.darkSavedJobsText]}>Go back</Text>
                </TouchableOpacity>
            </View>

          
            {savedJobs.length === 0 ? (
                <View style={[styles.noJobsContainer, isDarkMode && styles.darkNoJobsContainer]}>
                    <Text style={[styles.noJobsText, isDarkMode && styles.darkNoJobsText]}>No jobs saved yet.</Text>
                </View>
            ) : (
                <JobList screenType="SavedJobs" />
            )}
        </SafeAreaView>
    );
};

export default ApplicationForm;