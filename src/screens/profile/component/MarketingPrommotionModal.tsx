import React from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity, Share, } from 'react-native';
import { Fonts, imagePaths, SH, SW, Colors, } from '../../../utils';
import { CopyBar } from './MarketingPrommotionListCopyBar';
import { AppText, Buttons } from '../../../component';

type MarketingPrommotionModalProps = {
    code?: string;
    closeModal?: () => void;
    visible?: boolean;
}

const MarketingPrommotionModal: React.FC<MarketingPrommotionModalProps> = ({ visible = false, closeModal = () => { }, code = 'SHARE50' }) => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: 'Check out this amazing offer! Use code SHARE50 to get a discount!',
                url: 'https://yourapp.com/promo',
                title: 'Exclusive Promotion!',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log('Shared with activity type: ', result?.activityType);
                } else {
                    console.log('Shared successfully');
                }
            } else if (result.action === Share.dismissedAction) {
                console.log('Share dismissed');
            }
        } catch (error: any) {
            console.error('Error sharing:', error?.message);
        }
    };
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => { closeModal() }}>
            <TouchableOpacity activeOpacity={1} onPress={() => { closeModal() }} style={styles.container}>
                <TouchableOpacity activeOpacity={1} style={styles.subContainer}>
                    <AppText style={styles.text1}>Invite Friends</AppText>
                    <AppText style={styles.text2}>Earn unlimited FREE credits! Your friends get {'\n'} $5 when they sign up with your invite code. {'\n'}You earn $5 after their first purchase</AppText>
                    <CopyBar />
                    <Buttons
                        title="Share"
                        onPress={() => {
                            closeModal(); setTimeout(() => {
                                onShare();
                            }, 200);
                        }}
                        buttonStyle={{ marginTop: SH(25), width: '40%' }} />
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000050',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    subContainer: {
        padding: SH(20),
        backgroundColor: Colors.themelight,
        borderRadius: SW(10),
        width: '88%',
        alignItems: 'center',
        zIndex: 999999,
    },
    text1: { fontSize: SH(24), fontFamily: Fonts.BOLD, color: Colors.themeColor, },
    text2: { fontSize: SH(14), fontFamily: Fonts.REGULAR, color: Colors.black, textAlign: 'center', marginTop: SH(10) }
});

export default MarketingPrommotionModal;
