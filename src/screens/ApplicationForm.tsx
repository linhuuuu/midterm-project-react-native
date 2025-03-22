import {Text, TouchableOpacity } from "react-native";
import { Props } from "../navigation/props";
import { SafeAreaView } from "react-native-safe-area-context";
import Form from "../components/Form";
const ApplicationForm: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text>Application Form</Text>
            <Form></Form>
            <TouchableOpacity onPress={() => navigation.navigate('SavedJobs')}>
                <Text>Saved Jobs</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}
export default ApplicationForm;     