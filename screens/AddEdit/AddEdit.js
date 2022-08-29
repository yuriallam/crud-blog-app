import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from './styles'
import { getRequest, postRequest, putRequest } from '../../functions/ApiCallFunctions';

const DEFAULT_BLOG = {
  title: "",
  content: ""
};

export default function AddEdit({route, navigation}) {
    const id = route?.params?.id;
    const [data, setData] = useState(DEFAULT_BLOG);

    const getBlog = () => getRequest(`/blogs/${id}`).then((response) => {
        setData(response.data);
    });

    const onSubmit = () => {
        if (!data.title || !data.content) {
            alert("All fields are reqeuired");
            return;
        }

        if (id) {
          putRequest(`/blogs/${id}`, data).then(() => {
            navigation.goBack();
          });  
        } else {
          postRequest("/blogs", data).then(() => {
            navigation.goBack();
          })
        }
    }

    
    useEffect(() => {
      if (id) getBlog();
    } ,[]);

    const Back = () => {
        navigation.goBack();
    };

  return (
    <View style={styles.screen} >
      <TouchableOpacity onPress={() => Back()} style={{margin: 10, width: 60, padding: 10}}  >
          <Text>Back</Text>
      </TouchableOpacity>
      <TextInput
        style={{marginBottom: 10, borderWidth: 1}}
        placeholder='Enter Title Here'
        onChangeText={(text) => {
          setData((oldData) => {
            return { ...oldData, title: text}
          })
        }}
        value={data.title} />
      <TextInput
        multiline
        style={styles.input}
        numberOfLines={10}
        placeholder='Enter Text here'
        onChangeText={(text) => {
          setData((oldData) => {
            return { ...oldData, content: text}
          })
        }}
        value={data.content} />
      <TouchableOpacity style={{marginTop: 10}} onPress={() => onSubmit()} >
        <Text>{ id? 'Edit' : 'Add' }</Text>
      </TouchableOpacity>
    </View>
  )
}