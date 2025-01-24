import { View, Text, useTheme, Image } from '@aws-amplify/ui-react';

function Footer() {
  const { tokens } = useTheme();

  return (
    <View textAlign="center" padding={tokens.space.large}>
      <div >
        <Image
          alt="Tui logo"
          src="TUI_Logo.png"
          height="30px"
          width="60px"
        />
      </div>

      <Text color={tokens.colors.neutral[80]}>
        &copy; All Rights Reserved
      </Text>
    </View>
  );
}

export default Footer;