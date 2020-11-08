export const basicExample = `
  <AddressInputOption mainLabel="main label" secondaryLabel="secondary label"/>
`;

export const optionLayout = `
  <Layout>
    <Cell>
      <AddressInputOption
        mainLabel="main label"
        secondaryLabel="one line layout"
      />
    </Cell>
    <Cell>
      <AddressInputOption
        optionLayout="double-line"
        mainLabel="main label"
        secondaryLabel="double line layout"
      />
    </Cell>
  </Layout>
`;

export const Affixes = `
  <Layout cols={1}>
    <AddressInputOption
      prefix={false}
      mainLabel="No prefix"
    />
    <AddressInputOption
      mainLabel="Text Affixes"
      suffix="suffix"
      prefix="prefix"
    />
  </Layout>;
`;

export const builderExample = `
<Box height="120">
  <DropdownLayout
    visible
    inContainer
    options={[
      addressInputOptionBuilder({
        id: 0,
        secondaryLabel: 'secondary label 1',
        mainLabel: 'main label 1',
      }),
      addressInputOptionBuilder({
        id: 1,
        secondaryLabel: 'secondary label 2',
        mainLabel: 'main label 2',
        optionLayout: 'double-line'
      }),
      {id: 2, value: 'label 3' },
    ]}
  />
</Box>
`;
