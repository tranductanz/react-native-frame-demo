import { BaseScreen } from '@/src/components/BaseScreen';

import { IMAGES } from '@/src/assets';
import HomeProfile from '@/src/containers/Home/components/HomeProfile';
import TodoCardItem from '@/src/containers/Home/components/TodoCardItem';
import { useHomeViewModel } from '@/src/containers/Home/viewmodal/useHomeViewModel';
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Searchbar, Text } from 'react-native-paper';

const HomeScreen = () => {
    const { loadTodos, loading, error, isEmptyTodo } = useHomeViewModel();



    useEffect(() => {
        loadTodos();
    }, []);

    const renderTodo = () => {
        if (loading) {
            return <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator
                    size='large'
                    color='#ffffff'
                />
            </View>
        }
        if (isEmptyTodo) {
            return <View style={{ justifyContent: 'center' }}>
                <Image
                    resizeMode='contain'
                    style={{ width: 227, height: 227 }}
                    source={IMAGES.empty_todo}
                />
                <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text variant='bodyLarge' style={{ color: '#ffffff', fontWeight: '400' }}>
                        What do you want to do today?
                    </Text>
                    <Text style={{ color: '#ffffff', marginTop: 10 }}>
                        Tap + to add your tasks </Text>
                </View>
            </View>
        }
        return <View style={{ flex: 1 }}>
            <Searchbar
                placeholderTextColor={'#979797'}
                style={{
                    borderRadius: 10,
                    backgroundColor: '#1D1D1D',

                }}
                value=''
                placeholder='Seach for your task...'
            />
            <TodoCardItem />
        </View>

    }



    return (
        <BaseScreen>
            <HomeProfile />
            <View style={[isEmptyTodo ? styles.emptyTodo : styles.todoList]}>
                {renderTodo()}
            </View>
        </BaseScreen>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    emptyTodo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 100
    },
    todoList: {
        flex: 1,

    }

})