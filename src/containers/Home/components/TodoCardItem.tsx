import { SwipeableTodoItem } from '@/src/components/SwipeableTodoItem';
import { useHomeViewModel } from '@/src/containers/Home/viewmodal/useHomeViewModel';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const TodoCardItem = () => {

    const tabbarHeight = useBottomTabBarHeight();
    const { todos: todoData } = useHomeViewModel();
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={todoData}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: tabbarHeight + 16 }}
            renderItem={({ item }) => (
                <SwipeableTodoItem
                    item={item}
                    onDismiss={() => {
                        console.log('Todo dismissed:', item.id);
                        // TODO: dispatch removeTodo(item.id);
                    }}
                >
                    <View style={styles.item}>
                        <View style={{ alignItems: 'flex-start' }}>
                            <RadioButton.Item
                                label=""
                                mode="android"
                                value="first"
                                status={'checked'}
                                onPress={() => { }}
                            />
                        </View>
                        <View>
                            <Text style={styles.title}>Do Math Homework</Text>
                            <Text style={styles.subtitle}>Today At 16:45</Text>
                        </View>
                        <View style={styles.rightTagContainer}>
                            <View style={styles.tag}>
                                <FontAwesome5 name="university" size={16} color="#0055A3" />
                                <Text style={styles.tagText}>University</Text>
                            </View>
                            <View style={styles.flag}>
                                <FontAwesome6 name="font-awesome-flag" size={16} color="#ffffff" />
                                <Text style={styles.flagText}>1</Text>
                            </View>
                        </View>
                    </View>
                </SwipeableTodoItem>
            )}
        />
    );
};

export default TodoCardItem;

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#363636',
        height: 72,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    title: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500',
    },
    subtitle: {
        color: 'gray',
        fontSize: 16,
        fontWeight: '500',
    },
    rightTagContainer: {
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
        bottom: 5,
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#809CFF',
        height: 29,
        padding: 6,
        borderRadius: 4,
    },
    tagText: {
        color: '#ffffff',
        marginLeft: 5,
    },
    flag: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    flagText: {
        color: '#ffffff',
        marginLeft: 5,
    },
});
