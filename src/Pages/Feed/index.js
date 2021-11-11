import React, { useState, useEffect } from 'react';

import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity } from 'react-native'

import options from '../../assets/options.png'
import like from '../../assets/like.png'
import comment from '../../assets/comment.png'
import send from '../../assets/send.png'
import save from '../../assets/save.png'
import camera from '../../assets/camera.png'
import logo from '../../assets/logo.png'
import igtv from '../../assets/igtv.png'

function Feed() {
    const [feed, setFeed] = useState([]);

    async function loadPage() {

        const response = await fetch(`https://rickandmortyapi.com/api/character?page=1`)
            .then((res) => res.json())
            .then((res) => res.results);

        setFeed(response)
    }

    useEffect(() => {
        loadPage()

    }, []);

    function renderItem({ item }) {
        return (
            <View style={styles.post}>
                <View style={styles.postHeader}>
                    <View style={styles.userInfo}>
                        <Image style={styles.pictureAvatar}
                            source={{ uri: item.image }}
                        />
                        <View style={styles.info}>
                            <Text style={styles.author}>{item.name}</Text>
                            <Text style={styles.place}>{item.location.name}</Text>
                        </View>
                    </View>

                    <View style={styles.postOptions}>
                        <TouchableOpacity >
                            <Image source={options} />
                        </TouchableOpacity>
                    </View>

                </View>

                <View>
                    <Image
                        style={styles.picture_url}
                        source={{ uri: item.image }}
                    />
                </View>

                <View style={styles.footer}>
                    <View style={styles.actions}>


                        <View style={styles.leftActions}>
                            <TouchableOpacity style={styles.action}>
                                <Image style={styles.icons} source={like} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <Image style={styles.icons} source={comment} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <Image style={styles.icons} source={send} />
                            </TouchableOpacity>
                        </View>


                        <View>
                            <TouchableOpacity>
                                <Image style={styles.icons} source={save} />
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View >
                        <Text style={styles.likes}>13.456 likes</Text>
                        <Text style={styles.hashtags}>#rickandmorty #rickandmortyApi #rickandmortyReacNative</Text>
                        <Text style={styles.description}><Text style={styles.author}>{item.name}</Text> Created:{item.created}</Text>
                    </View>

                </View>


            </View >
        )
    }

    return (

        <View style={styles.containerMain}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Image style={styles.icons}
                            source={camera} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.logo}
                            source={logo}
                        />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image style={styles.iconsIgtv}
                                source={igtv} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.icons}
                                source={send} />
                        </TouchableOpacity>
                    </View>
                </View>
                <FlatList
                    data={feed}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={feed}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerMain: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccc',

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    text: {
        color: '#ccc'
    },

    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 45,
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        alignItems: 'center',
    },

    logo: {
        width: 95,
        height: 27,
    },

    post: {
        marginVertical: 15,
    },

    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
    },

    userInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    info: {
        marginLeft: 10,
        flexDirection: 'column'
    },

    author: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },

    place: {
        fontSize: 12,
        color: '#666'
    },

    picture_url: {
        marginTop:10,
        width: '100%',
        height: 400
    },

    footer: {
        paddingHorizontal: 15,

    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,

    },

    action: {
        marginRight: 8,

    },
    leftActions: {
        flexDirection: 'row',

    },

    icons: {
        minWidth: 22,
        minHeight: 22,
    },

    iconsIgtv: {
        minWidth: 22,
        minHeight: 22,
        marginRight: 15,
    },

    likes: {
        fontWeight: 'bold',
        fontSize: 12,

    },

    hashtags: {
        color: '#002D5E'
    },

    description: {
        color: '#000',
        lineHeight: 18,
        marginBottom: 15,
    },

    pictureAvatar: {
        width: 34,
        height: 34,
        borderRadius: 18,
    }
});


export default Feed;