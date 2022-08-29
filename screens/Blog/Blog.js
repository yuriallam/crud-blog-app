import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'

import { deleteRequest, getRequest } from '../../functions/ApiCallFunctions';

export default function Blog({route, navigation}) {
    const [data, setData] = useState({});
    const id = route.params.id;
    const blogUrl = `/blogs/${id}`

    useEffect(() => {
      const focusSubscription = navigation.addListener("focus", getBlog);
      return focusSubscription;
    } ,[])
  
    const getBlog = () => {
      getRequest(blogUrl).then((response) => {
        setData(response.data);
      })
    };

    const Back = () => {
        navigation.goBack();
    };

    const handleDelete = () => {
      deleteRequest(`/blogs/${id}`).then(() => {
        navigation.goBack();
      });
    };

    const handleEdit = () => {
      navigation.navigate('AddEdit',{
        id: data.id
      })
    }

  return (
    <View style={styles.screen} >
        <TouchableOpacity onPress={() => Back()} style={{margin: 10, width: 60, padding: 10}} >
            <Text>Back</Text>
        </TouchableOpacity>
        <Text style={{fontWeight: '700'}} >{data.title}</Text>
        <Text>{data.content}</Text>
        <TouchableOpacity style={{marginTop: 10}} onPress={() => handleEdit()} >
          <Text style={{color: 'blue'}} >Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 10}} onPress={() => handleDelete()} >
          <Text style={{color: 'red'}} >Delete</Text>
        </TouchableOpacity>
    </View>
  )
}