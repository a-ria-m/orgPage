import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Switch,
} from 'react-native';

export default function ProfilePage() {
  // Name/Bio with ID
  const profileDetails = {
    id: 'user001',
    name: 'RandomNameHere',
    bio: 'Quick Bio Insert Here//role maybe? like student/teacher/head of org ',
  };

  // Dummy Info (easily changeable)
  const dummyInfo = [
    { id: 'memberSince', label: 'Member Since', value: 'January 2021' },
  ];

  // Dummy setting toggles
  const settingToggles = [
    { id: 'notifications', label: 'Push Notifications', value: true },
    { id: 'emailUpdates', label: 'Email Updates', value: true },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E7F0E6' }}>
      <StatusBar barStyle="light-content" backgroundColor="#278086" />

      {/* Header */}
      <View
        style={{
          backgroundColor: '#278086',
          paddingTop: 60,
          paddingBottom: 32,
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          paddingHorizontal: 16,
        }}
      >
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 46,
            left: 16,
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.25)',
            borderRadius: 16,
            zIndex: 10,
          }}
        >
          <View
            style={{
              width: 12,
              height: 12,
              borderLeftWidth: 2,
              borderBottomWidth: 2,
              borderColor: '#fff',
              transform: [{ rotate: '45deg' }],
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 12,
            padding: 16,
            elevation: 3,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 4,
            marginTop: 32,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: 64,
              height: 64,
              backgroundColor: '#d8dee2',
              borderRadius: 8,
              marginRight: 12,
            }}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 4 }}>
              {profileDetails.name}
            </Text>
            <Text style={{ fontSize: 14, color: '#2e7d32' }}>{profileDetails.bio}</Text>
          </View>
        </View>
      </View>


      <ScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 32,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Dummy Info Section */}
        <View
          style={{
            backgroundColor: '#ffffff',
            marginTop: 24,
            borderRadius: 16,
            padding: 16,
            elevation: 2,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowRadius: 3,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 12, color: '#333' }}>
            Additional Info
          </Text>

          {dummyInfo.map((item) => (
            <View key={item.id} style={{ marginBottom: 12 }}>
              <Text style={{ fontSize: 14, fontWeight: '600', color: '#333' }}>{item.label}</Text>
              <Text style={{ fontSize: 14, color: '#555' }}>{item.value}</Text>
            </View>
          ))}
        </View>

        {/* Settings Section */}
        <View
          style={{
            backgroundColor: '#ffffff',
            marginTop: 24,
            borderRadius: 16,
            padding: 16,
            elevation: 2,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowRadius: 3,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 12, color: '#333' }}>
            Profile Settings
          </Text>

          {settingToggles.map((setting) => (
            <View
              key={setting.id}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingVertical: 8,
              }}
            >
              <Text style={{ fontSize: 14, color: '#333' }}>{setting.label}</Text>
              <Switch value={setting.value} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
