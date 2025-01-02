import { View, Platform, TouchableOpacity, SafeAreaView, ActivityIndicator, FlatList } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import RNFS from 'react-native-fs'
import Icon from '../components/global/Icon';
import { connectionStyles } from '../styles/connectionStyles';
import CustomText from '../components/global/CustomText';
import { formatFileSize } from '../utils/libraryHelpers';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { goBack } from '../utils/NavigationUtil';
import LinearGradient from 'react-native-linear-gradient';
import { sendStyles } from '../styles/sendStyles';
import { Colors } from '../utils/Constants';

const ReceivedFileScreen:FC = () => {

  const [receivedFiles, setReceivedFiles] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  console.log("Received Files: ", receivedFiles)

  const getFilesFromDirectory = async () => {
    setIsLoading(true);
    const platformPath = Platform.OS === 'android'
      ? `${RNFS.DownloadDirectoryPath}/`
      : `${RNFS.DocumentDirectoryPath}/`;

    try {
      const exists = await RNFS.exists(platformPath);
      if(!exists){
        setReceivedFiles([]);
        setIsLoading(false)
        return
      }

      const files = await RNFS.readDir(platformPath);

      const formattedFiles = files.map(file => ({
        id: file.name,
        name: file.name,
        size: file.size,
        uri: file.path,
        mimeType: file.name.split('.').pop() || 'unknown',
      }))

      setReceivedFiles(formattedFiles)
    } catch (error) {
      console.error("Error fetching files: ", error);
      setReceivedFiles([]);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getFilesFromDirectory();
  }, [])

  const renderThumbnail = (mimeType: string) => {
    switch(mimeType){
      case '.mp3':
        return <Icon name="musical-notes" color='blue' size={16} iconFamily='Ionicons' />
      case '.mp4':
        return <Icon name="videocam" color='green' size={16} iconFamily='Ionicons' />
      case '.jpg':
        return <Icon name="image" color='orange' size={16} iconFamily='Ionicons' />
      case '.pdf':
        return <Icon name="document" color='red' size={16} iconFamily='Ionicons' />
      default:
        return <Icon name="folder" color='gray' size={16} iconFamily='Ionicons' />
    }
  }

  const renderItem = ({item}:any) => {

    console.log("From Recieved file screen: ", item)
    return (
      <View style={connectionStyles.fileItem}>
        <View style={connectionStyles.fileInfoContainer}>
          {renderThumbnail(item?.mimeType)}
          <View style={connectionStyles?.fileDetails}>
            <CustomText numberOfLines={1} fontFamily='Okra-Bold' fontSize={10}>
              {item?.name}
            </CustomText>
            <CustomText numberOfLines={1} fontFamily='Okra-Bold' fontSize={8}>
              {item?.mimeType} &#x2022; {formatFileSize(item.size)}
            </CustomText>
          </View>
        </View>
        
        <TouchableOpacity
          style={connectionStyles.openButton}
          onPress={() => {
            // const normalizePath = Platform.OS === 'ios' ? `file://${item?.uri}` : item?.uri;
            const normalizePath = Platform.OS === 'ios' ? `file://${item?.uri}` : item?.uri.replace('file://', '');
            
            if(Platform.OS === 'ios') {
              ReactNativeBlobUtil.ios.openDocument(normalizePath)
                  .then(() => console.log('File opened successfully'))
                  .catch(err => console.error("Error opening file: ", err))
            } else {
              ReactNativeBlobUtil.android.actionViewIntent(normalizePath, "*/*")
                  .then(() => console.log("File opened successfully"))
                  .catch(err => console.error("Error opening file: ", err))
            }
          }}
        >
          <CustomText numberOfLines={1} color='#fff' fontFamily='Okra-Bold' fontSize={9}>
            Open
          </CustomText>
        </TouchableOpacity>
      </View>
    )
  }

  const handleGoBack = () => {
    goBack();
  }

  return (
    <LinearGradient 
      colors={['#FFFFFF', '#CDDAEE', '#8DBAFF']}
      style={sendStyles.container}
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}
    >
      <SafeAreaView />
      <View style={sendStyles.mainContainer}>
        <CustomText numberOfLines={1} fontFamily='Okra-Bold' fontSize={15} style={{textAlign: 'center', margin: 10}}>
          All Received Files
        </CustomText>
        {isLoading ? (
          <ActivityIndicator size='small' color={Colors.primary}/>
        ) : receivedFiles.length > 0 ? (
          <View style={{flex: 1}}>
            <FlatList 
              data={receivedFiles}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
              contentContainerStyle = {connectionStyles.fileList}
            />
          </View>
        ) : (
          <View style={connectionStyles.noDataContainer}>
            <CustomText numberOfLines={1} fontFamily='Okra-Medium' fontSize={11}>
              No files received yet.
            </CustomText>
          </View>
        )}

        <TouchableOpacity style={sendStyles.backButton} onPress={handleGoBack}>
          <Icon name='arrow-back' iconFamily='Ionicons' color='#000' size={16} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default ReceivedFileScreen