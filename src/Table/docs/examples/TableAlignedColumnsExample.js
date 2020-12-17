/* eslint-disable */

class TableAlignedColumnsExample extends React.Component {
  state = {
    data: [
      { name: 'Red Slippers', sku: 25232564, inStock: true, price: '$14.00' },
      { name: 'Velvet Hat', sku: 35246432, inStock: true, price: '$29.00' },
      { name: 'Silver Jeans', sku: 4864310, inStock: false, price: '$69.00' },
      { name: 'Orange Socks', sku: 125156422, inStock: true, price: '$7.00' },
    ],
  };

  render() {
    return (
      <Table
        data={this.state.data}
        columns={[
          {
            title: 'Name',
            render: row => row.name,
            width: '50%',
          },
          {
            title: 'SKU',
            render: row => row.sku,
            width: '10%',
            align: 'start',
          },
          {
            title: 'Stock',
            render: row =>
              row.inStock ? (
                <Badge size="small" skin="success">
                  In Stock
                </Badge>
              ) : (
                <Badge size="small" type="outlined">
                  Out Of Stock
                </Badge>
              ),
            width: '20%',
            align: 'center',
          },
          {
            title: 'Price',
            render: row => row.price,
            width: '10%',
            align: 'end',
          },
          {
            render: row => <TableActionCell secondaryActions={[{}]} />,
            width: '10%',
          },
        ]}
      >
        <Table.Content />
      </Table>
    );
  }

  _updateRow(rowNum, data) {
    this.setState({
      data: this.state.data.map((row, index) => {
        if (index !== rowNum) {
          return { ...row };
        }

        return {
          ...row,
          ...data,
        };
      }),
    });
  }
}
