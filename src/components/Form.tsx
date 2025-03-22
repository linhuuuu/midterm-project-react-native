import React from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Define TypeScript interface for form values
interface FormValues {
  email: string;
  password: string;
}

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Form: React.FC = () => {
  return (
    <Formik<FormValues>
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={{ padding: 20 }}>
          <TextInput
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={{ borderWidth: 1, padding: 10, marginBottom: 5 }}
          />
          {touched.email && errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

          <TextInput
            placeholder="Password"
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            style={{ borderWidth: 1, padding: 10, marginBottom: 5 }}
          />
          {touched.password && errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

          <Button title="Submit" onPress={handleSubmit as () => void} />
        </View>
      )}
    </Formik>
  );
};

export default Form;