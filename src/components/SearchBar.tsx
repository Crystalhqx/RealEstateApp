import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TextInputProps} from 'react-native';
import colors from '../assets/styles/colors';

interface SearchBarProps extends TextInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search',
  ...rest
}) => {
  const [query, setQuery] = useState<string>('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={query}
        onChangeText={setQuery}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    margin: 10,
  },
  input: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.lightGray,
    borderRadius: 20,
  },
});

export default SearchBar;
