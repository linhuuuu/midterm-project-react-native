import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking, Image, useWindowDimensions } from "react-native";
import { useContext } from "react";
import { Context } from "../navigation and context/Context";
import { JobListNavigationProp } from "../navigation and context/NavTypes";
import { useNavigation } from "@react-navigation/native";
import RenderHtml from "react-native-render-html";
import { styles } from "../styles/styles";

const JobDetails = () => {
    const navigation = useNavigation<JobListNavigationProp>();
    const { jobs, focusID, setFocusID, removeJobs, saveJobs, savedJobs, isDarkMode } = useContext(Context);
    const { width } = useWindowDimensions();

    const job = jobs.find((job) => job.id === focusID);

    if (!job) {
        return (
            <View style={[styles.container, isDarkMode && styles.darkContainer]}>
                <Text style={[styles.detail, isDarkMode && styles.darkDetail]}>Job not found</Text>
            </View>
        );
    }

    const handleApply = () => {
        if (focusID) {
            setFocusID(focusID);
            navigation.navigate("ApplicationForm");
        }
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


    const htmlStyles = {
        p: {
            color: isDarkMode ? "#fff" : "#000",
        },
        a: {
            color: isDarkMode ? "#81b0ff" : "#007BFF",
        },
        h1: {
            color: isDarkMode ? "#fff" : "#000",
        },
        h2: {
            color: isDarkMode ? "#fff" : "#000",

        },
        ul: {
            color: isDarkMode ? "#fff" : "#000",
        },
        li: {
            color: isDarkMode ? "#fff" : "#000"
        },
    };


    return (
        <View style={[isDarkMode && styles.darkContainer, { flex: 1 }]}>
            <View style={[styles.headerContainer, isDarkMode && styles.darkHeaderContainer]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={[styles.savedJobsText, isDarkMode && styles.darkSavedJobsText]}>Go Back</Text>
                </TouchableOpacity>

                <View style={styles.actionsContainer}>
                    <TouchableOpacity onPress={() => savedJobs.includes(job.id) ? removeJobs(job.id) : saveJobs(job.id)}>
                        <Text style={[styles.savedJobsText, isDarkMode && styles.darkSavedJobsText]}>
                            {savedJobs.includes(job.id) ? "Remove" : "Save"}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleApply()}>
                        <Text style={[styles.savedJobsText, isDarkMode && styles.darkSavedJobsText, { marginLeft: 20 }]}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={[styles.detail, isDarkMode && styles.darkDetail, { margin: 0 }]}>{job.mainCategory}</Text>
                <Text style={[styles.header, isDarkMode && styles.darkHeader]}>{job.title}</Text>
                <View style={styles.headerRow}>
                    <Image source={{ uri: job.companyLogo }} style={styles.logo}></Image>
                    <Text style={[styles.subtitle, isDarkMode && styles.darkSubtitle, { flex: 1, marginLeft: 10 }]}>
                        {job.companyName}
                    </Text>
                    <TouchableOpacity
                        style={[styles.linkButton, isDarkMode && styles.darkLinkButton]}
                        onPress={() => Linking.openURL(job.applicationLink)}
                    >
                        <Text style={styles.linkButtonText}>Link</Text>
                    </TouchableOpacity>
                </View>

                <Text style={[styles.detail, isDarkMode && styles.darkDetail]}>
                    Salary: {formatSalary(job.minSalary)} - {formatSalary(job.maxSalary)}
                </Text>

                <Text style={[styles.detail, isDarkMode && styles.darkDetail]}>Job Type: {job.jobType}</Text>
                <Text style={[styles.detail, isDarkMode && styles.darkDetail]}>Work Model: {job.workModel}</Text>
                <Text style={[styles.detail, isDarkMode && styles.darkDetail]}>Seniority Level: {job.seniorityLevel}</Text>
                <Text style={[styles.detail, isDarkMode && styles.darkDetail]}>Locations: {job.locations.join(", ")}</Text>

                <View style={styles.tagsContainer}>
                    <View style={styles.tagsRow}>
                        {job.tags.map((tag, index) => (
                            <View key={index} style={[styles.tagCircle, isDarkMode && styles.darkTagCircle]}>
                                <Text style={styles.tagText}>{tag}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <RenderHtml
                    contentWidth={width}
                    source={{ html: job.description || "<p>No description available.</p>" }}
                    tagsStyles={htmlStyles}
                    
                />
            </ScrollView>
        </View>
    );
};

export default JobDetails;