import { useFonts } from "expo-font";
import { Box, NativeBaseProvider, Text } from "native-base";
import { appFonts, baseAppTheme } from "./constants";
import { AppNavigation } from "./navigation";

const App = () => {
  const [loaded] = useFonts({
    ...appFonts,
  });

  if (!loaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={baseAppTheme}>
      <AppNavigation />
    </NativeBaseProvider>
  );
};

export default App;
