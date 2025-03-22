console.log("shit loaded");

import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Props } from "../navigation/props";
const ApplicationForm: React.FC<Props> = ({ navigation }) => {
    return (
        <>
            <Text>Saved Jobs</Text>
            <TouchableOpacity onPress={() => navigation.navigate('JobFinder')}>
                <Text>Job Finder</Text>
            </TouchableOpacity>

        </>
    )
}
export default ApplicationForm;     