/* eslint-disable */

class TablePaginationExample extends React.Component {
    data = [
      {
        name: 'Red Slippers',
        sku: 25232564,
        status: 'In Stock',
        price: '$14.00',
      },
      { name: 'Velvet Hat', sku: 35246432, status: 'In Stock', price: '$29.00' },
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
    ];
  
    filterOptions = [
      { id: '', value: 'All Statuses' },
      { id: 'In Stock', value: 'In Stock' },
      { id: 'Out Of Stock', value: 'Out Of Stock' },
    ];
  
    state = {
      activeFilter: '',
      activeSearch: '',
      selectedPage: 8,
    };
  
    _getFilteredData = () => {
      const { activeFilter, activeSearch } = this.state;
      return this._generateData(2).filter(({ name, sku, status, price }) => {
        if (activeFilter && status !== activeFilter) {
          return false;
        }
  
        const searchData = [name, sku, status, price].join(' ').toLowerCase();
        const searchQuery = activeSearch.trim().toLowerCase();
        if (searchQuery && searchData.indexOf(searchQuery) === -1) {
          return false;
        }
  
        return true;
      });
    };
  
    render() {
      const data = this._getFilteredData();
      return (
        <Layout justifyItems="center">
          <Cell>
            <Card>
              <Table
                data={data}
                columns={[
                  { title: 'Name', render: row => row.name },
                  { title: 'SKU', render: row => row.sku },
                  { title: 'Status', render: row => row.status },
                  { title: 'Status', render: row => row.price },
                ]}
                showSelection
              >
                <Table.ToolbarContainer>
                  {selectionContext =>
                    selectionContext.selectedCount === 0
                      ? this._renderMainToolbar()
                      : this._renderActionsToolbar({ ...selectionContext })
                  }
                </Table.ToolbarContainer>
                <Table.Content />
                {!data.length && (
                  <Table.EmptyState
                    subtitle={
                      <Text>
                        {'There are no search results matching '}
                        <Text weight="normal">{`"${this.state.activeSearch}"`}</Text>
                      </Text>
                    }
                  />
                )}
              </Table>
            </Card>
          </Cell>
          <Cell>
            <Pagination currentPage={this.state.selectedPage} totalPages={14} onChange={this._handleChange} />
          </Cell>
        </Layout>
      );
    }

    _handleChange = ({ page, event }) => {
        event.preventDefault();
        this.setState({ selectedPage: page});
      };
  
    _renderMainToolbar = () => {
      return (
        <TableToolbar>
          <TableToolbar.ItemGroup position="start">
            <TableToolbar.Item>
              <TableToolbar.Title>My Table</TableToolbar.Title>
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
          <TableToolbar.ItemGroup position="end">
            <TableToolbar.Item>
              <div style={{ width: 200 }}>
                <Search
                  value={this.state.activeSearch}
                  onChange={e => this.setState({ activeSearch: e.target.value })}
                />
              </div>
            </TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>
      );
    };
  
    _renderActionsToolbar = ({ selectedCount, getSelectedIds }) => (
      <TableToolbar>
        <TableToolbar.ItemGroup position="start">
          <TableToolbar.Item>
            <TableToolbar.SelectedCount>{`${selectedCount} Selected`}</TableToolbar.SelectedCount>
          </TableToolbar.Item>
        </TableToolbar.ItemGroup>
        <TableToolbar.ItemGroup position="end">
          <TableToolbar.Item layout="button">
            <Button
              skin="light"
              prefixIcon={<Icons.Upload />}
              onClick={() =>
                window.alert(`Exporting selectedIds=${getSelectedIds()}`)
              }
            >
              Export
            </Button>
          </TableToolbar.Item>
          <TableToolbar.Item layout="button">
            <Button
              skin="light"
              prefixIcon={<Icons.Duplicate />}
              onClick={() =>
                window.alert(`Duplicating selectedIds=${getSelectedIds()}`)
              }
            >
              Duplicate
            </Button>
          </TableToolbar.Item>
          <TableToolbar.Item layout="button">
            <Button
              skin="light"
              prefixIcon={<Icons.Edit />}
              onClick={() =>
                window.alert(`Editing selectedIds=${props.getSelectedIds()}`)
              }
            >
              Edit
            </Button>
          </TableToolbar.Item>
          <TableToolbar.Divider />
          <TableToolbar.Item>
            <Search
              expandable
              value={this.state.activeSearch}
              onChange={e => this.setState({ activeSearch: e.target.value })}
            />
          </TableToolbar.Item>
        </TableToolbar.ItemGroup>
      </TableToolbar>
    );

    _generateData = count => {
        let data = [];
    
        for (let i = 0; i < count; i++) {
          data = data.concat(this.data.sort(() => Math.random() - 0.5));
        }
    
        return data;
      };
  }
