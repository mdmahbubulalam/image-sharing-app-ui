import React from 'react';
import {Pressable, ScrollView, Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import theme from '../../assets/themes/index';
import albumPage from '../../assets/data/albumPage';
import Card from './Card';
import Separator from './Separator';
import { useLayoutEffect } from 'react';
import Feather from '@expo/vector-icons/Feather';
import BottomSheet from 'reanimated-bottom-sheet';
import { useRef } from 'react';
import BottomSheetContent from './BottomSheetContent';

const Albums = ({navigation, navigation:{setOptions}}) => {

    const sheetRef = useRef();

    useLayoutEffect(() => {
        setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={openBottomSheet}>
                    <View style={styles.openSheetBtn}>
                        <Feather name='plus' size={16} color={theme.colors.white}  />
                    </View>
                </TouchableOpacity>
            )
        })
    })

    const renderBottomSheetContent = () => <BottomSheetContent handleClose={closeBottomSheet}/>

    const closeBottomSheet = () => {
        sheetRef.current.snapTo(1);
    }

    const openBottomSheet = () => {
        sheetRef.current.snapTo(0);
    }
    
    return (
        <>
           <ScrollView>
               <View style={styles.albumContainer}>
                    {
                      albumPage.map( (item, index) =>
                        <View key={index}>
                            <Card item={item} navigation={navigation}/>
                            {index === 1 && <Separator />} 
                        </View>      
                      )  
                    }
   
               </View>
           </ScrollView>

           <BottomSheet 
            ref={sheetRef}
            snapPoints={[250,0]} 
            initialSnap={1}
            borderRadius={10}
            renderContent ={renderBottomSheetContent}

           />
        </>
    );
};

const styles = StyleSheet.create({
    albumContainer:{
        marginBottom : theme.spacing.l,
    },
    openSheetBtn:{
        width:32,
        height:32,
        backgroundColor:theme.colors.primary,
        marginRight:theme.spacing.m,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Albums;