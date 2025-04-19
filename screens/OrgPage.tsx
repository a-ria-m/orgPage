import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';

const dummyPosts = [
  { id: '1', title: 'Insert post here hehe hoho', username: 'User One' },
  { id: '2', title: 'Insert post here hehe hoho', username: 'User Two' },
  { id: '3', title: 'Insert post here hehe hoho', username: 'User Three' },
  { id: '4', title: 'Insert post here hehe hoho', username: 'User Four' },
  { id: '5', title: 'Insert post here hehe hoho', username: 'User Four' },
];

export default function OrgPage() {
  const renderPost = ({ item }) => (
    <View
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 4 }}>
          {item.title}
        </Text>
        <Text style={{ fontSize: 13, color: '#666' }}>{item.username}</Text>
      </View>
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: '#e0e0e0',
          borderRadius: 6,
          marginLeft: 12,
        }}
      />
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#E7F0E6' }}>

      <View
        style={{
          backgroundColor: '#278086',
          height: 140,
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          marginBottom: -60,
          zIndex: 0,
        }}
      />

      {/* Fixed Back Button */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 40,
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

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}>
        {/* Org Info Card */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 12,
            padding: 16,
            marginBottom: 24,
            elevation: 3,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 4,
            zIndex: 1,
          }}
        >
          {/* Icon Box */}
          <View
            style={{
              width: 64,
              height: 64,
              backgroundColor: '#e0e0e0',
              borderRadius: 8,
              marginRight: 12,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              padding: 4,
            }}
          >
            {/* Triangle */}
            <View
              style={{
                width: 0,
                height: 0,
                borderLeftWidth: 12,
                borderRightWidth: 12,
                borderBottomWidth: 20,
                borderStyle: 'solid',
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: '#888',
                marginBottom: 4,
              }}
            />
            {/* Square */}
            <View style={{ width: 16, height: 16, backgroundColor: '#888', margin: 4 }} />
            {/* Circle */}
            <View style={{ width: 16, height: 16, backgroundColor: '#888', borderRadius: 8, margin: 4 }} />
          </View>

          {/* Org Text */}
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 4 }}>
              ORg
            </Text>
            <Text style={{ fontSize: 14, color: '#2e7d32' }}>
              Bio stuff wow super nice org
            </Text>
          </View>
        </View>

        {/* Event Card */}
        <View
          style={{
            backgroundColor: '#E1E6D4',
            borderRadius: 32,
            padding: 16,
            marginBottom: 24,
            elevation: 3,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 4,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flex: 1, paddingRight: 8 }}>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#333', marginBottom: 4 }}>
                Insert event here wow its happening on
              </Text>
              <Text style={{ fontSize: 12, color: '#555' }}>24/1/1291 : 8:00AM - 10:00AM</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#DFBE73',
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Attend</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={dummyPosts}
          keyExtractor={(item) => item.id}
          renderItem={renderPost}
          contentContainerStyle={{ paddingBottom: 24 }}
        />
      </ScrollView>
    </View>
  );
}
