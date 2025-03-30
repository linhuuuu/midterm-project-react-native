import React from "react";
import { View, Text, FlatList, RefreshControl, TouchableOpacity, Image } from "react-native";
import { useContext } from "react";
import { Context } from "../navigation and context/Context";
import { useNavigation } from "@react-navigation/native";
import { JobListNavigationProp } from "../navigation and context/NavTypes";
import { styles } from "../styles/styles";

interface JobListProps {
    screenType: "JobFinder" | "SavedJobs";
}

const JobList: React.FC<JobListProps> = ({ screenType }) => {
    const { jobs, onRefresh, refreshing, setFocusID, saveJobs, removeJobs, savedJobs, searchQuery, isDarkMode } = useContext(Context);
    const navigation = useNavigation<JobListNavigationProp>();

    const filteredSavedJobs =
        screenType === "SavedJobs"
            ? jobs.filter((job) => savedJobs.includes(job.id))
            : jobs;

    const filteredJobs = filteredSavedJobs.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleApply = (item: string) => {
        setFocusID(item);
        navigation.navigate("ApplicationForm");
    };

    const handleMore = (item: string) => {
        setFocusID(item);
        navigation.navigate("JobDetails");
    };

    const formatSalary = (salary?: number): string => {
        if (!salary) return "N/A";

        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 3,
            maximumFractionDigits: 3,
        }).format(salary);
    };

    return (
        <FlatList
            data={filteredJobs}
            keyExtractor={(item) => item.id}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            renderItem={({ item }) => (
                <View style={[styles.card, isDarkMode && styles.darkCard]}>
                    <View style={styles.headerRow}>
                        <Text style={[styles.salary, isDarkMode && styles.darkSalary]}>{item.mainCategory}</Text>
                        <TouchableOpacity
                            onPress={() => { savedJobs.includes(item.id) ? removeJobs(item.id) : saveJobs(item.id); }}
                            style={[styles.saveButton, isDarkMode && styles.darkSaveButton]}
                        >
                            <Text style={[styles.saveButtonText, isDarkMode && styles.darkSaveButtonText]}>
                                {savedJobs.includes(item.id) ? "Remove" : "Save"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.title, isDarkMode && styles.darkTitle]}>{item.title}</Text>

                    <View style={styles.headerRow}>
                        <Image source={{ uri: item.companyLogo }} style={styles.logo}></Image>
                        <Text style={[styles.companyName, isDarkMode && styles.darkCompanyName]}>{item.companyName}</Text>
                    </View>

                    <Text style={[styles.salary, isDarkMode && styles.darkSalary]}>
                        {formatSalary(item.minSalary)} - {formatSalary(item.maxSalary)}
                    </Text>

                    <View style={styles.actionsContainer}>
                        <TouchableOpacity onPress={() => handleMore(item.id)} style={[styles.actionButton, isDarkMode && styles.darkActionButton]}>
                            <Text style={styles.actionText}>More</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleApply(item.id)} style={[styles.actionButton, isDarkMode && styles.darkActionButton]}>
                            <Text style={styles.actionText}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            contentContainerStyle={styles.listContent}
        />
    );
};

export default JobList;