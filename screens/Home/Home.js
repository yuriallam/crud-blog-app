import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'

import { Blogs } from '../../Data'
import { getRequest } from '../../functions/ApiCallFunctions'
import { useDispatch, useSelector } from 'react-redux'
import * as ACTIONS from '../../store/actions/ActionTypes'

export default function Home({navigation}) {
  
  const disptach = useDispatch();
  const blogs = useSelector((state) => state.blog.data);

  useEffect(() => {
    const focusSubscription = navigation.addListener("focus", getBlogs);
    return focusSubscription;
  }, [navigation]);

  const getBlogs = () => {
    getRequest("/blogs").then((response) => {
      disptach({ type: ACTIONS.SAVE_BLOG_DATA, payload: response.data })
    }).catch((err) => {
      console.log(err);
    })
    };

  const ChangeScreenBlog = (item) => {
    navigation.push('Blog',{
      id: item 
    })
  }
  const ChangeScreenCreateBlog = (item) => {
    navigation.push('AddEdit')
  }

  return (
    <View style={styles.screen} >
        <TouchableOpacity onPress={() => ChangeScreenCreateBlog()} >
            <Text style={{fontSize: 30}} >Create Blog</Text>
        </TouchableOpacity>
        <ScrollView>
            {blogs.map((blog) => (
              <TouchableOpacity
                key={blog.id}
                style={{width: 200, marginTop: 20, borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}
                onPress={() => ChangeScreenBlog(blog.id)}  >
                  <Text style={{ fontWeight: "bold" }}>{blog.title}</Text>
                  <Text numberOfLines={2} >{blog.content}</Text>
              </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
  )
}