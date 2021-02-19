export const size = `
<Layout cols={1}>
  <Input size="large" placeholder="Small" />
  <Input size="medium" placeholder="Medium" />
  <Input size="small" placeholder="Large" />
</Layout>;
`;

export const border = `
<Layout cols={1}>
  <Input border="default" placeholder="Default" />
  <Input border="round" placeholder="Round" />
  <Input border="bottomLine" placeholder="Bottom line" />
</Layout>;
`;

export const status = `
<Layout cols={1}>
  <Input status="error" placeholder="Error" />
  <Input status="warning" placeholder="Warning" />
  <Input status="loading" placeholder="Loading" />
</Layout>;
`;

export const statusMessage = `
<Input
  placeholder="Hover the mouse on status icon"
  status="error"
  statusMessage="Please fill the required field"
tooltipPlacement="top-end" 
/>;
`;

export const readOnlyAndDisabled = `
<Layout cols={1}>
  <Input readOnly defaultValue="Read Only" />
  <Input disabled defaultValue="Disabled" />
</Layout>;
`;

export const affix = `
<Layout cols={1}>
  <Input
    prefix={<Input.Affix>Prefix</Input.Affix>}
    suffix={<Input.Affix>Suffix</Input.Affix>}
    defaultValue="Value"
  />
  <Input
    prefix={
      <Input.IconAffix>
        <Icons.GitHub />
      </Input.IconAffix>
    }
    suffix={
      <Input.IconAffix>
        <TextButton>
          <Box>
            <Icons.Link />
          </Box>
        </TextButton>
      </Input.IconAffix>
    }
    defaultValue="Value"
  />
</Layout>;
`;

export const standard = `
<Layout>
  <Cell>
    <Input />
  </Cell>
  <Cell>
    <Input forceHover />
  </Cell>
  <Cell>
    <Input forceFocus />
  </Cell>
</Layout>
`;

export const withCloseButton = `
class MyComponent extends React.Component {
  state = {
    firstInputText: 'Input with a close button',
    secondInputText: 'Input with a close button',
    thirdInputText: 'Input with a close button',
  };

  render() {
    const {
      firstInputText,
      secondInputText,
      thirdInputText
    } = this.state;

    return (
      <Layout>
        <Cell>
          <Input
            size="small"
            value={firstInputText}
            clearButton
            onChange={e => {
              this.setState({ firstInputText: e.target.value })
            }}
            onClear={() => {
              this.setState({ firstInputText: '' })
            }}
           />
        </Cell>
        <Cell>
          <Input
              value={secondInputText}
              clearButton
              onChange={e => {
                this.setState({ secondInputText: e.target.value })
              }}
              onClear={() => {
                this.setState({ secondInputText: '' })
              }}
            />
        </Cell>
        <Cell>
          <Input
            size="large"
            value={thirdInputText}
            clearButton
            onChange={e => {
              this.setState({ thirdInputText: e.target.value })
            }}
            onClear={() => {
              this.setState({ thirdInputText: '' })
            }}
          />
        </Cell>
      </Layout>
    );
  }
}
`;

export const readOnly = `
<Layout>
  <Cell>
    <Input readOnly value="Read Only Input"/>
  </Cell>
  <Cell>
    <Input disabled value="Disabled Input"/>
  </Cell>
</Layout>
`;

export const error = `
<Layout>
  <Cell>
    <Input status="error"/>
  </Cell>
  <Cell>
    <Input status="error" forceHover />
  </Cell>
  <Cell>
    <Input status="error" forceFocus />
  </Cell>
</Layout>
`;

export const warning = `
<Layout>
  <Cell>
    <Input status="warning"/>
  </Cell>
  <Cell>
    <Input status="warning" forceHover />
  </Cell>
  <Cell>
    <Input status="warning" forceFocus />
  </Cell>
</Layout>
`;

export const loader = `
<Layout>
  <Cell>
    <Input status="loading" />
  </Cell>
  <Cell>
    <Input status="loading" statusMessage="Loading some data..." />
  </Cell>
</Layout>
`;

export const clearButton = `
() => {
  const [inputText, setInputText] = React.useState('Click clear button to erase this value');

  return (
    <Input
      value={inputText}
      clearButton
      onChange={e => {
        setInputText(e.target.value);
      }}
      onClear={() => {
        setInputText('');
      }}
    />
  );
}
`;

export const textOverflow = `
<Input
  textOverflow="ellipsis"
  border="bottomLine"
  defaultValue="The Life and Strange Surprizing Adventures of Robinson Crusoe, Of York, Mariner: Who lived Eight and Twenty Years, all alone in an un-inhabited Island on the Coast of America, near the Mouth of the Great River of Oroonoque; Having been cast on Shore by Shipwreck, wherein all the Men perished but himself. With An Account how he was at last as strangely deliver'd by Pyrates."
/>;
`;

export const layouting1 = `
<Layout>
  <Cell span={6}>
    <Card >
      <Box direction="vertical" padding="SP1 SP1 SP2">
        <Layout gap={12}>
          <Cell>
            <Box padding="6px 6px 0px">
              <Image borderRadius="4px" height="180px" />
            </Box>
          </Cell>

          <Cell>
            <Input
              border="bottomLine"
              textOverflow="ellipsis"
              defaultValue="Empty photo album"
            />
          </Cell>
        </Layout>
      </Box>
    </Card>
  </Cell>
  <Cell span={6}>
    <Card>
      <Box direction="vertical" padding="SP1 SP1 SP2">
        <Layout gap={12}>
          <Cell>
            <Box padding="6px 6px 0px">
              <Image borderRadius="4px" height="180px" src="example.jpg" />
            </Box>
          </Cell>

          <Cell>
            <Input
              border="bottomLine"
              textOverflow="ellipsis"
              defaultValue="Empty photo album"
            />
          </Cell>
        </Layout>
      </Box>
    </Card>
  </Cell>
</Layout>;
`;

export const layouting2 = `
<Card>
  <Card.Header title="Personal Info" />
  <Divider />
  <Card.Content>
    <Layout>
      <Cell span={6}>
        <FormField label="First Name">
          <Input defaultValue="John" />
        </FormField>
      </Cell>
      <Cell span={6}>
        <FormField label="Last Name">
          <Input defaultValue="Bigfoot" />
        </FormField>
      </Cell>
      <Cell span={12}>
        <FormField label="About Yourself (Optional)">
          <InputArea />
        </FormField>
      </Cell>
    </Layout>
  </Card.Content>
</Card>;
`;
