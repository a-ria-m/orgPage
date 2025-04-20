import React, { useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  Animated,
} from 'react-native';

const dummyPosts = [
  { id: '1', title: 'Insert post here hehe hoho', username: 'User One' },
  { id: '2', title: 'Insert post here hehe hoho', username: 'User Two' },
  { id: '3', title: 'Insert post here hehe hoho', username: 'User Three' },
  { id: '4', title: 'Insert post here hehe hoho', username: 'User Four' },
  { id: '5', title: 'Insert post here hehe hoho', username: 'User Five' },
];

const HEADER_EXPANDED = 210;
const HEADER_COLLAPSED = 130;

export default function OrgPage() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED - HEADER_COLLAPSED],
    outputRange: [HEADER_EXPANDED, HEADER_COLLAPSED],
    extrapolate: 'clamp',
  });

  const orgInfoOpacity = scrollY.interpolate({
    inputRange: [0, 20],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const orgNameTranslateY = scrollY.interpolate({
    inputRange: [0, 30],
    outputRange: [0, -20],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E7F0E6' }}>
      <StatusBar barStyle="light-content" backgroundColor="#278086" />

      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: headerHeight,
          backgroundColor: '#278086',
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          paddingHorizontal: 16,
          justifyContent: 'flex-end',
          paddingBottom: 16,
          zIndex: 5,
        }}
      >
        {/* Org Info */}
        <Animated.View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 12,
            padding: 16,
            elevation: 3,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 4,
            flexDirection: 'row',
            alignItems: 'center',
            opacity: orgInfoOpacity,
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
              ORg
            </Text>
            <Text style={{ fontSize: 14, color: '#2e7d32' }}>
              Bio stuff wow super nice org
            </Text>
          </View>
        </Animated.View>

        {/* Org Name */}
        <Animated.Text
          style={{
            position: 'absolute',
            bottom: 16,
            left: 16,
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 20,
            transform: [{ translateY: orgNameTranslateY }],
          }}
        >
          ORg
        </Animated.Text>
      </Animated.View>

      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 20,
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

      <Animated.ScrollView
        contentContainerStyle={{
          paddingTop: HEADER_EXPANDED + 16,
          paddingBottom: 32,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Event Card */}
        <View
          style={{
            backgroundColor: '#E1E6D4',
            borderRadius: 32,
            padding: 16,
            marginHorizontal: 16,
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
                Insert event here wow it's happening on
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

        {/* Posts */}
        <View style={{ paddingHorizontal: 16 }}>
          <FlatList
            data={dummyPosts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
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
            )}
            scrollEnabled={false}
          />
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}
