import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: object;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Search...',
  style,
}) => {
  return (
    <TextInput
      style={[styles.searchBar, style]}
      placeholder={placeholder}
      placeholderTextColor="#666"
      value={value}
      onChangeText={onChangeText} 
    />
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    width:"79%",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom:10,
    backgroundColor: "#fff",
    
  },
});

export default SearchBar;