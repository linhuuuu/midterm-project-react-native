import React from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { JobListNavigationProp } from "../navigation and context/NavTypes";
import { styles } from "../styles/styles";
import { useContext } from "react";
import { Context } from "../navigation and context/Context";

interface FormValues {
   name: string;
   email: string;
   contactno: string;
   why: string;
}

const validationSchema = Yup.object().shape({
   name: Yup.string().required("Name is required"),
   email: Yup.string().email("Invalid email format").required("Email is required"),
   contactno: Yup.string().matches(/^\d{11}$/, "Contact Number must be exactly 11 digits").required("Contact Number is required"),
   why: Yup.string().required("Answer is required"),
});

const Form: React.FC = () => {
   const navigation = useNavigation<JobListNavigationProp>();
   const { isDarkMode } = useContext(Context);

   const onSubmit = (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
      alert("You have successfully submitted an application!");
      resetForm();
      navigation.navigate("JobFinder");
   };

   return (
      <View style={[styles.contentContainer]}>
         <Text style={[styles.header, isDarkMode && styles.darkHeader, { marginBottom: 20 }]}>Application Form</Text>
         <Formik<FormValues>
            initialValues={{ name: "", email: "", contactno: "", why: "" }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
         >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
               <View>
                  <TextInput
                     placeholder="Name"
                     placeholderTextColor={isDarkMode ? "#aaa" : "#000"}
                     onChangeText={handleChange("name")}
                     onBlur={handleBlur("name")}
                     value={values.name}
                     style={[styles.input, isDarkMode && styles.darkInput]}
                  />
                  {touched.name && errors.name && (
                     <Text style={[styles.error, isDarkMode && styles.darkError]}>{errors.name}</Text>
                  )}

                  <TextInput
                     placeholder="Email"
                     placeholderTextColor={isDarkMode ? "#aaa" : "#000"}
                     onChangeText={handleChange("email")}
                     onBlur={handleBlur("email")}
                     value={values.email}
                     style={[styles.input, isDarkMode && styles.darkInput]}
                  />
                  {touched.email && errors.email && (
                     <Text style={[styles.error, isDarkMode && styles.darkError]}>{errors.email}</Text>
                  )}

                  <TextInput
                     placeholder="Contact Number"
                     placeholderTextColor={isDarkMode ? "#aaa" : "#000"}
                     onChangeText={handleChange("contactno")}
                     onBlur={handleBlur("contactno")}
                     value={values.contactno}
                     keyboardType="numeric"
                     style={[styles.input, isDarkMode && styles.darkInput]}
                  />
                  {touched.contactno && errors.contactno && (
                     <Text style={[styles.error, isDarkMode && styles.darkError]}>{errors.contactno}</Text>
                  )}

                  <TextInput
                     placeholder="Why should we hire you?"
                     placeholderTextColor={isDarkMode ? "#aaa" : "#000"}
                     onChangeText={handleChange("why")}
                     onBlur={handleBlur("why")}
                     value={values.why}
                     multiline
                     numberOfLines={10}
                     style={[styles.input, styles.multilineInput, isDarkMode && styles.darkInput]}
                  />
                  {touched.why && errors.why && (
                     <Text style={[styles.error, isDarkMode && styles.darkError]}>{errors.why}</Text>
                  )}

                  <TouchableOpacity
                     style={[styles.button, { width: "60%", alignSelf: "center" }, isDarkMode && styles.darkButton]}
                     onPress={handleSubmit as () => void}
                  >
                     <Text style={[styles.buttonText]}>Submit</Text>
                  </TouchableOpacity>
               </View>
            )}
         </Formik>
      </View>
   );
};

export default Form;