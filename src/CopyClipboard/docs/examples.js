export const simple = `
<CopyClipboard value="http://www.wix-style-react.com/">
  {({ copyToClipboard }) => (
    <Box width="350" align="space-between">
      <Text>www.wix-style-react.com</Text>
      <TextButton onClick={() => copyToClipboard()}>
        Copy to clipboard
      </TextButton>
    </Box>
  )}
</CopyClipboard>;
`;

export const dynamicValue = `
class MyComponent extends React.Component {
  state = {
    inputText: 'https://www.wix.com',
  };

  render() {
    const { inputText } = this.state;

    return (
      <CopyClipboard value={inputText}>
        {({ isCopied, copyToClipboard }) => (
          <Layout>
            <Cell>
              <Input
                value={inputText}
                onChange={event => {
                  this.setState({ inputText: event.target.value });
                }}
                suffix={
                  <Input.Affix>
                    <TextButton
                      onClick={() => copyToClipboard()}
                      prefixIcon={<Icons.DuplicateSmall />}
                    >
                      {!isCopied ? 'Copy to clipboard' : 'Copied ' + inputText}
                    </TextButton>
                  </Input.Affix>
                }
              />
            </Cell>
          </Layout>
        )}
      </CopyClipboard>
    );
  }
}
`;

export const withResetInterval = `
class MyComponent extends React.Component {
  state = {
    inputText: 'https://www.wix.com',
  };

  render() {
    const { inputText } = this.state;

    return ( 
      <CopyClipboard value={inputText} resetInterval={'500'}>
        {({ isCopied, copyToClipboard }) => (
          <Layout>
            <Cell>
              <Input
                value={inputText}
                onChange={event => {
                  this.setState({ inputText: event.target.value });
                }}
                suffix={
                  <Input.Affix>
                    <TextButton
                      onClick={() => copyToClipboard()}
                      prefixIcon={<Icons.DuplicateSmall />}
                    >
                      {!isCopied ? 'Copy to clipboard' : 'Copied!'}
                    </TextButton>
                  </Input.Affix>
                }
              />
            </Cell>
          </Layout>
        )}
      </CopyClipboard>
    );
  }
}
`;
