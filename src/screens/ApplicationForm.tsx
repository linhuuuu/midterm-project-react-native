import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Form from "../components/Form";
import { styles } from "../styles/styles";
import { NavProps } from "../navigation and context/NavTypes";
import { useContext } from "react";
import { Context } from "../navigation and context/Context";

const ApplicationForm = ({ navigation }: NavProps) => {
    const { isDarkMode } = useContext(Context);

    return (
        <SafeAreaView style={[ isDarkMode && styles.darkContainer, {flex:1}]}>
            <View style={[styles.headerContainer, isDarkMode && styles.darkHeaderContainer]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={[styles.savedJobsText, isDarkMode && styles.darkSavedJobsText]}>Go Back</Text>
                </TouchableOpacity>
            </View>
            <Form />
        </SafeAreaView>
    );
};

export default ApplicationForm;