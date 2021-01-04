/* eslint-disable */
class TableExample extends React.Component {
  state = {
    data: [
      { item: 'Item 1' },
      { item: 'Item 2' },
      { item: 'Item 3' },
      { item: 'Item 4' },
    ],
  };

  render() {
    return (
      <Card>
        <Table
          data={this.state.data}
          columns={[
            { title: 'Column Name', render: row => row.item },
            { title: 'Column Name', render: row => row.item },
            { title: 'Column Name', render: row => row.item },
            { title: 'Column Name', render: row => row.item },
          ]}
        >
          <TableToolbar>
            <TableToolbar.Title>Toolbar</TableToolbar.Title>
          </TableToolbar>
          <Table.SubToolbar>Sub Toolbar</Table.SubToolbar>
          <Table.Content />
        </Table>
      </Card>
    );
  }
}
