import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { NetworkInfo } from 'react-native-network-info';

export const getLocalIPAddress = async (): Promise<string> => {
    try {
        const gateway = await NetworkInfo.getIPV4Address();
        console.log("IP ADDRESS", gateway)
        return gateway || '0.0.0.0';
    } catch (error) {

        return '0.0.0.0';
    }
};

function setLastBlockTo255(ip: string): string {
    const parts = ip.split('.').map(Number);
    parts[3] = 255;
    return parts.join('.');
}


export const getBroadcastIPAddress = async (): Promise<string | null> => {
    try {
        const ip_1 = await DeviceInfo.getIpAddress()
        const iosIp = await NetworkInfo.getBroadcast()
        const broadcastAddress = setLastBlockTo255((Platform.OS === 'ios' ? iosIp : ip_1) || "255.255.255.255");
        console.log('Broadcast Address:', broadcastAddress);
        return broadcastAddress;
    } catch (error) {
        console.error('Error getting broadcast address:', error);
        return null;
    }
};

