import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import PlaceholderView from '@/layout/views/general/PlaceholderView';

type PlaceholderRouteParams = {
  title: string;
};

type PlaceholderRouteProp = RouteProp<
  Record<string, PlaceholderRouteParams>,
  string
>;

const PlaceholderScreen = () => {
  const route = useRoute<PlaceholderRouteProp>();

  return <PlaceholderView title={route.params?.title || 'Coming Soon'} />;
};

export default PlaceholderScreen;
