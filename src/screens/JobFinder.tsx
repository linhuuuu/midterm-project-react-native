import { SafeAreaView, View, Text, TouchableOpacity, Switch } from "react-native";
import JobList from "../components/JobList";
import SearchBar from "../components/SearchBar";
import { NavProps } from "../navigation and context/NavTypes";
import { useContext } from "react";
import { Context } from "../navigation and context/Context";
import { styles } from "../styles/styles";

const JobFinder = ({ navigation }: NavProps) => {
    const { searchQuery, setSearchQuery, savedJobs, isDarkMode, toggleDarkMode } = useContext(Context);

    return (
        <SafeAreaView style={[isDarkMode && styles.darkContainer,{flex:1}]}>
            <View style={[styles.headerContainer, isDarkMode && styles.darkHeaderContainer]}>
                <Text style={[styles.header, isDarkMode && styles.darkHeader]}>Job Finder</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SavedJobs")}>
                    <Text style={[styles.savedJobsText, isDarkMode && styles.darkSavedJobsText]}>
                        Saved Jobs ({savedJobs.length})
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.headerRow}> 
                <SearchBar
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                    placeholder="Search for jobs / company"
                    style={[isDarkMode && styles.darkInput]}
                />

                <View style={styles.switchContainer}>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isDarkMode ? "#fff" : "#000"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleDarkMode}
                        value={isDarkMode}
                    />
                </View>
            </View>
            <JobList screenType="JobFinder" />
        </SafeAreaView>
    );
};

export default JobFinder;


