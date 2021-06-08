import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import SharedAlbumTitleCard from './SharedAlbumTitleCard';
import Avatars from './Avatars';
import theme from '../../assets/themes';
import backgroundImages from '../../assets/data/backgroundImages';
import ImageGallery from './ImageGallery';


const SharedAlbums = ({route}) => {
    const {album} =route.params;
   
    return (
        <ScrollView>
            <SharedAlbumTitleCard album={album}/>
            <View style={styles.avatarContainer}>
                <Avatars avatars={album.avatars} />
                <Text style={styles.avatarContainerText}>{`${album.avatars.length} people`}</Text>
            </View>
            <ImageGallery  images={backgroundImages} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    avatarContainer:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor: theme.colors.lightGray,
        marginHorizontal: theme.spacing.m,
        marginVertical: theme.spacing.m,
        paddingHorizontal:theme.spacing.m,
        paddingVertical:theme.spacing.xs,
        borderRadius:theme.borderRadius.m,
    },

    avatarContainerText:{
        ...theme.textVariants.body2,
        color:theme.colors.gray,  
    }
})

export default SharedAlbums;