export const basicExample = `
  <AddressInputOption mainLabel="main label" secondaryLabel="secondary label"/>
`;

export const optionLayout = `
  <Layout>
    <Cell>
      <AddressInputOption
        mainLabel="main label"
        secondaryLabel="secondary label in one line"
      />
    </Cell>
    <Cell>
      <AddressInputOption
        optionLayout="double-line"
        mainLabel="main label"
        secondaryLabel="secondary label in a new line"
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
