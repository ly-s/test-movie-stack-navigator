import React from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, Button} from 'react-native';
import styles from '../Styles';

const movies = [
    {
        title: 'Movie 1',
        img_url: 'https://picsum.photos/200',
        key: 1,
    },
    {
        title: 'Movie 2',
        img_url: 'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_location_on_48px-512.png',
        key: 2,
    },
    {
        title: 'Movie 3',
        img_url: 'https://simpleicon.com/wp-content/uploads/rocket.png',
        key: 3,
    }
]

const HomeScreen = ({ navigation }) => {
    return(
        <View style = {styles.container}>
            <FlatList
                data = {movies}
                renderItem = {({item}) => (
                    <View>
                        <TouchableOpacity
                            onPress = {() => navigation.navigate("Details", {title: item.title, img_url: item.img_url})}
                        >
                            <Text style = {styles.list}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            {/* <Text style = {styles.header}>HomeScreen</Text>
            <Button 
                title = "Details"
                onPress = {() => props.navigation.navigate("Details")}
            /> */}
        </View>
    );
}

export default HomeScreen;