# react-native-frame-demo




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