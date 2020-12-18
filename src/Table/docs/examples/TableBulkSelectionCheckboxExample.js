/* eslint-disable */

class TableBulkSelectionCheckboxExample extends React.Component {
  state = {
    data: [
      {
        name: 'Red Slippers',
        sku: 25232564,
        status: 'In Stock',
        price: '$14.00',
      },
      {
        name: 'Velvet Hat',
        sku: 35246432,
        status: 'In Stock',
        price: '$29.00',
      },
      {
        name: 'Silver Jeans',
        sku: 4864310,
        status: 'Out Of Stock',
        price: '$69.00',
      },
      {
        name: 'Orange Socks',
        sku: 125156422,
        status: 'In Stock',
        price: '$7.00',
      },
    ],
  };

  getCheckboxContent(selectedCount, bulkSelectionState) {
    switch (bulkSelectionState) {
      case 'ALL':
        return `All Elements Selected`;
      case 'NONE':
        return 'Select All Elements';
      case 'SOME':
        return selectedCount === 1
          ? '1 Element Selected'
          : `${selectedCount} Elements Selected`;
    }
  }

  render() {
    return (
      <Card>
        <Table
          data={this.state.data}
          columns={[
            { title: 'Name', render: row => row.name },
            { title: 'SKU', render: row => row.sku },
            { title: 'Status', render: row => row.status },
            { title: 'Price', render: row => row.price },
          ]}
          showSelection
          hideBulkSelectionCheckbox
        >
          <Table.ToolbarContainer>
            {({ selectedCount, bulkSelectionState }) => (
              <TableToolbar>
                <TableToolbar.ItemGroup position="start">
                  <TableToolbar.Item>
                    <Table.BulkSelectionCheckbox>
                      <TableToolbar.SelectedCount>
                        {this.getCheckboxContent(
                          selectedCount,
                          bulkSelectionState,
                        )}
                      </TableToolbar.SelectedCount>
                    </Table.BulkSelectionCheckbox>
                  </TableToolbar.Item>
                </TableToolbar.ItemGroup>
              </TableToolbar>
            )}
          </Table.ToolbarContainer>
          <Table.Content />
        </Table>
      </Card>
    );
  }
}
