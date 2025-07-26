import { BaseScreen } from '@/src/components/BaseScreen';
import { useTheme } from '@/src/hooks/useTheme';

import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
    //     const fetchUser = async () => {
    //         const query = `
    //    query (
    //   $options: PageQueryOptions
    // ) {
    //   posts(options: $options) {
    //     data {
    //       id
    //       title
    //     }
    //     meta {
    //       totalCount
    //     }
    //   }
    // }`

    //         const result = await axiosRequest({
    //             baseURL: 'https://graphqlzero.almansi.me',
    //             url: '/api',
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json',
    //             },
    //             data: {
    //                 query,
    //                 variables: {
    //                     options: {
    //                         paginate: {
    //                             page: 1,
    //                             limit: 5,
    //                         },
    //                     },
    //                 },
    //             },

    //         })

    //         console.log(result, 'User____Data');
    //     };
    // const getAllCart = async () => {
    //     const result = await axiosRequest({
    //         baseURL: 'https://dummyjson.com/carts',
    //         url: '/',
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //     })
    //     console.log(result.data, 'resultdataresultdataresultdata');
    // }
    useEffect(() => {
        // getAllCart();
        // fetchUser();
    }, [])

    const { theme, toggleTheme, mode } = useTheme();
    return (
        <BaseScreen>
            <View style={{ flex: 1, backgroundColor: theme.colors.background, padding: theme.spacing(2) }}>
                <Text style={{ color: theme.colors.text }}>Current mode: {mode}</Text>
                <Button title="Toggle Theme" onPress={toggleTheme} />
            </View>
        </BaseScreen>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})