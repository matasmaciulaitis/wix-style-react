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
          columns={Array.from({ length: 4 }).map(x => ({
            title: 'Column Name',
            render: row => row.item,
          }))}
        >
          <TableToolbar>
            <TableToolbar.Title>My Table</TableToolbar.Title>
          </TableToolbar>
          <Table.SubToolbar>SubToolbar</Table.SubToolbar>
          <Table.Content />
        </Table>
      </Card>
    );
  }
}
