import { View, Image, useTheme, Text } from '@aws-amplify/ui-react';

function Header() {
  const { tokens } = useTheme();

  return (
    <View textAlign="center" padding={tokens.space.large}>
      <Image
        alt="Amplify logo"
        src="https://docs.amplify.aws/assets/logo-dark.svg"
        // src="TUI_Logo.png"
        // height="10%"
        // width="10%"
      />
    </View>
  );
}

export default Header