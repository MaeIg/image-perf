import { Image, StyleSheet, View } from "react-native";

const LOGOS = [
  { source: require("../assets/rn.png"), alt: "React Native" },
  { source: require("../assets/expo.png"), alt: "Expo" },
  { source: require("../assets/metro.png"), alt: "Metro" },
  { source: require("../assets/bam.png"), alt: "BAM" },
];

export const ImageList = () => {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <ImageRow index={index} key={index} />
      ))}
    </>
  );
};

const ImageRow = ({ index }) => {
  const logos = LOGOS.sort(() => 0.5 - Math.random());

  return (
    <View style={styles.row}>
      {logos.map(({ source, alt }) => (
        <Image style={styles.image} source={source} alt={alt} key={`${index}-${alt}`} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  row: {
    flexDirection: "row",
  },
});
