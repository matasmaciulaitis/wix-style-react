export const simple = `
class MyComponent extends React.Component {
  state = {
    inputText: 'https://www.wix.com',
    copyMessage: 'Copy to clipboard',
  };

  render() {
    const { inputText, copyMessage } = this.state;

    return (
      <CopyClipboard value={inputText}>
        {({ copyToClipboard }) => (
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
                      size="small"
                      prefixIcon={<Icons.DuplicateSmall />}
                    >
                      {copyMessage}
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

// '<CopyClipboard value="hello" onCopy={(isCopied) => console.log(isCopied)} children={({copyToClipboard}) => <Input onInputClicked={copyToClipboard}/>}/>',
