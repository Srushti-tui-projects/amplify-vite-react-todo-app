import { View, Image, useTheme } from '@aws-amplify/ui-react';

function Header() {
  const { tokens } = useTheme();

  return (
    <View textAlign="center" padding={tokens.space.large}>
      <Image
        alt="Amplify logo"
        src="https://docs.amplify.aws/assets/logo-dark.svg"
      />
    </View>
  );
}

export default Header