/* eslint-disable */

class TableRowVerticalPaddingExample extends React.Component {
  state = {
    data: [{ item: 'Item 1' }, { item: 'Item 2' }, { item: 'Item 3' }],
  };

  render() {
    return (
      <Layout>
        <Cell span={6}>
          <Table
            data={this.state.data}
            columns={[{ title: 'Column Name', render: row => row.item }]}
            rowVerticalPadding="medium"
          >
            <Table.Content />
          </Table>
        </Cell>
        <Cell span={6}>
          <Table
            data={this.state.data}
            columns={[{ title: 'Column Name', render: row => row.item }]}
            rowVerticalPadding="large"
          >
            <Table.Content />
          </Table>
        </Cell>
      </Layout>
    );
  }
}

