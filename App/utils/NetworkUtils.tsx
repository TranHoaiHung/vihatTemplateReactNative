import NetInfo, {NetInfoStateType} from "@react-native-community/netinfo";



export async function validateNetwork() {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!state.isInternetReachable && state.isInternetReachable != null && (state?.type === NetInfoStateType.unknown || state.type === NetInfoStateType.none)
      ) {
        // this.notifyMessage(i18n.t('general.notConnection'))
      }
      console.log('Connection type', state.type)
      console.log('Is connected?', state.isConnected)
      console.log('Is isInternetReachable?', state.isInternetReachable)
    })
  
    // Unsubscribe
    return unsubscribe
  }
  