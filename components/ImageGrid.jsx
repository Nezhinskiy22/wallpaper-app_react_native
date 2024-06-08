import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from "./ImageCard";
import { getColumnCount, hp, wp } from "../helpers/common";

const ImageGrid = ({ images }) => {
  const columns = getColumnCount();

  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={images}
        numColumns={columns}
        initialNumToRender={1000}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item, index }) => (
          <ImageCard item={item} columns={columns} index={index} />
        )}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default ImageGrid;

const styles = StyleSheet.create({
  container: {
    minHeight: hp(3),
    width: wp(100),
  },
  listContainer: {
    paddingHorizontal: wp(4),
  },
});
