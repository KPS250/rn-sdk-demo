import React, { useContext, useEffect } from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
//import { useNavigation, useRoute } from '@react-navigation/native';
import { SdkContext } from '../../../provider/SdkProvider';
import { styles as defaultStyle } from './styles';
import AppBar from '../../atoms/AppBar';
import { screenEvent } from '../../../analytics';
import { Screens } from '../../../navigation/Screens';
import { useLazyQuery } from '@apollo/client';
import { REVIEWS_QUERY } from '../../../api/Queries';

const Home = () => {
  //const navigation = useNavigation();
  //console.log(props);
  //const { data, loading } = useQuery(REVIEWS_QUERY);

  const { theme, userContext } = useContext(SdkContext);
  const styles = defaultStyle(theme);

  const [getReviews, { data, fetchMore }] = useLazyQuery(REVIEWS_QUERY); // loading, error, refetch

  console.log('GRAPHQL-Items Fetched', data ? data.reviews.length : []);

  let variables = {
    limit: 10,
    //minSentences: 1,
    orderBy: 'createdAt_DESC',
    after: null,
  };

  useEffect(() => {
    screenEvent(Screens.HOME);
    getReviews({
      notifyOnNetworkStatusChange: true,
      variables: variables,
    });
  });

  const ReviewItem = (item: any) => {
    return <Text style={styles.review}>{item.item.text}</Text>;
  };

  const Separator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppBar theme={theme} />
        <View style={styles.header}>
          <Text style={styles.title}>
            Hi {userContext ? userContext.mobileNumber : ''}
          </Text>
          <Text style={styles.desc}>We are analyzing your information</Text>
        </View>
        <View style={styles.body}>
          <FlatList
            contentContainerStyle={styles.list}
            data={data ? data.reviews : []}
            renderItem={({ item }) => <ReviewItem item={item} />}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={() => (
              <Text style={styles.loading}>Loading</Text>
            )}
            ItemSeparatorComponent={() => <Separator />}
            ListFooterComponent={() => <View style={styles.footer} />}
            refreshing={data ? data.networkStatus === 4 : false}
            //onRefresh={() => refetch()}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              console.log('onEndReached');
              console.log('After', data.reviews[data.reviews.length - 1].id);
              fetchMore({
                variables: {
                  ...variables,
                  after: data.reviews[data.reviews.length - 1].id,
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                  // Don't do anything if there weren't any new items
                  if (
                    !fetchMoreResult ||
                    fetchMoreResult.reviews.length === 0
                  ) {
                    return previousResult;
                  }

                  return {
                    // Concatenate the new reviews results after the old ones
                    reviews: previousResult.reviews.concat(
                      fetchMoreResult.reviews
                    ),
                  };
                },
              });
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
