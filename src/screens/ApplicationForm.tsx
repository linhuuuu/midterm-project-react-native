console.log("shit loaded");

import { SafeAreaView, View, Text, TouchableOpacity} from "react-native";
import { Props } from "../navigation/props";
const ApplicationForm: React.FC<Props> = ({navigation}) =>
    {
        return(
            <>
                <Text>Application Form</Text>
                <TouchableOpacity 
    onPress={() => navigation.navigate('Cart')} ></TouchableOpacity>

            </>
        )
    }   
    export default ApplicationForm ;     