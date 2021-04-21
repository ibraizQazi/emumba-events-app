import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { ListItem, Button, Text } from 'react-native-elements';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


const EventsCard: React.FC = ({ eventTitle, eventDateTime, eventDescription, onDeletePress, onEditPress }) => {
    // const recipeImageUri = Image.resolveAssetSource(imageUrl).uri;
    return (
        <ListItem
            containerStyle={styles.cardContainer}
            wrapperStyle={styles.innerContainer}>
            <ListItem.Content style={styles.contentContainer}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    padding: 4,
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>
                        {eventTitle}
                    </Text>
                    <Button
                        containerStyle={{}}
                        type="clear"
                        icon={
                            <MaterialCommunityIcons
                                name="delete"
                                size={20}
                                color="#FFFFFF"
                            />
                        }
                        onPress={onDeletePress}
                    />
                    <Button
                        containerStyle={{}}
                        type="clear"
                        icon={
                            <Entypo
                                name="edit"
                                size={20}
                                color="#FFFFFF"
                            />
                        }
                        onPress={onEditPress}
                    />
                </View>
                <View style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    padding: 4,
                }}>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '400',
                    }}>{eventDateTime}</Text>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '400',
                    }}>{eventDescription}</Text>
                </View>
            </ListItem.Content>
        </ListItem>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        maxHeight: 110,
        height: 'auto',
        width: '95%',
        marginHorizontal: 2,
        marginVertical: 2,
        borderColor: 'black',
        borderWidth: 1,
    },
    innerContainer: {
        position: 'relative',
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    contentContainer: {
        flexDirection: 'column',
    },
});

export default EventsCard;
