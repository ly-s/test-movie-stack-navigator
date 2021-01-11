import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../Styles';

const DetailsScreen = ({ route, navigation }) => {
    const {title, img_url} = route.params;
    return(
        <View style = {styles.container}>
            <Image
                style = {styles.icon}
                source = {{uri: img_url}}
            />
            <Text style = {styles.header}>{title}</Text>
        </View>
    );
}

export default DetailsScreen;