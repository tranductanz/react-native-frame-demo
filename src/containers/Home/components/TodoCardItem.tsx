import { useHomeViewModel } from '@/src/containers/Home/viewmodal/useHomeViewModel';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';


const TodoCardItem = () => {
    const tabbarHeight = useBottomTabBarHeight();
    const { todos: todoData } = useHomeViewModel();
    return <FlatList
        contentContainerStyle={{ paddingBottom: tabbarHeight }}
        data={todoData}
        renderItem={() => {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, backgroundColor: '#363636', height: 72 }}>
                    <View style={{ alignItems: 'flex-start', }}>
                        <RadioButton.Item
                            label={''}
                            mode='android'
                            value="first"
                            status={'checked'}
                            onPress={() => { }}
                        />
                    </View>
                    <View>
                        <Text style={{
                            color: '#ffffff',
                            fontSize: 16,
                            fontWeight: '500',

                        }}>Do Math Homework</Text>
                        <Text style={{
                            color: 'gray',
                            fontSize: 16,
                            fontWeight: '500',

                        }}>Today At 16:45</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        right: 10,
                        bottom: 5,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: '#809CFF',
                            height: 29,
                            padding: 6,
                            borderRadius: 4
                        }}>
                            <FontAwesome5 name="university" size={16} color="#0055A3" />
                            <Text style={{ color: '#ffffff', marginLeft: 5 }}>University</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, }}>
                            <FontAwesome6 name="font-awesome-flag" size={16} color="#ffffff" />
                            <Text style={{ color: '#ffffff', marginLeft: 5 }}>1</Text>
                        </View>
                    </View>
                </View>
            )
        }} />
}

export default TodoCardItem

const styles = StyleSheet.create({})