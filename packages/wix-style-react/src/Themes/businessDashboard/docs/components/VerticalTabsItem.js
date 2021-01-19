// import {} from '../../VerticalTabItem';
export const playground = `
<ThemeProvider theme={theme({})}>
  <Box gap="0" direction="vertical">
    <VerticalTabs.TabItem type="title" prefixIcon={<Checkbox checked />}>
      <Text>Vertical Tab</Text>
    </VerticalTabs.TabItem>
    <VerticalTabs.TabItem type="title" prefixIcon={<Checkbox checked />}>
      <Box direction="vertical">
        <Text>Vertical Tab</Text>
        <Text size="tiny" skin="primary" weight="normal">
          Label
        </Text>
      </Box>
    </VerticalTabs.TabItem>
  </Box>
</ThemeProvider>;
`;
