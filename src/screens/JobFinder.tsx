console.log("shit loaded");

import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Props } from "../navigation/props";
import FetchJobs from "../components/JobFetch";
const ApplicationForm: React.FC<Props> = ({ navigation }) => {
    return (
        <>
            <Text>Job Finder</Text>
            <FetchJobs/>
            <TouchableOpacity onPress={() => navigation.navigate('ApplicationForm')}>
                <Text>Application Form</Text>
            </TouchableOpacity>

        </>
    )
}
export default ApplicationForm;     