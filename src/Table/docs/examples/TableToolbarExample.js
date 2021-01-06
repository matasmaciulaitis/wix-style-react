/* eslint-disable */

() => {
  const [filterBy, setFilterBy] = React.useState('');
  const [activeSearch, setActiveSearch] = React.useState('');

  const data = [
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

  const columns = [
    { title: 'Name', render: row => row.name },
    { title: 'SKU', render: row => row.sku },
    { title: 'Status', render: row => row.status },
    { title: 'Status', render: row => row.price },
  ];

  const filterOptions = [
    { id: '', value: 'All Statuses' },
    { id: 'In Stock', value: 'In Stock' },
    { id: 'Out Of Stock', value: 'Out Of Stock' },
  ];

  const _getFilteredData = () => {
    return data.filter(({ name, sku, status, price }) => {
      if (filterBy && status !== filterBy) {
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

  const _renderMainToolbar = () => {
    return (
      <TableToolbar>
        <TableToolbar.ItemGroup position="start">
          <TableToolbar.Item>
            <TableToolbar.Title>My Table</TableToolbar.Title>
          </TableToolbar.Item>
        </TableToolbar.ItemGroup>
        <TableToolbar.ItemGroup position="end">
          <TableToolbar.Item>
            <TableToolbar.Label>
              Filter by
              <div style={{ width: 175 }}>
                <Dropdown
                  options={filterOptions}
                  selectedId={filterBy}
                  roundInput
                  onSelect={({ id }) => setFilterBy(id)}
                  popoverProps={{ appendTo: 'window' }}
                />
              </div>
            </TableToolbar.Label>
          </TableToolbar.Item>
          <TableToolbar.Item>
            <div style={{ width: 200 }}>
              <Search
                value={activeSearch}
                onChange={event => setActiveSearch(event.target.value)}
              />
            </div>
          </TableToolbar.Item>
        </TableToolbar.ItemGroup>
      </TableToolbar>
    );
  };

  const _renderActionsToolbar = ({ selectedCount, getSelectedIds }) => (
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
            value={activeSearch}
            onChange={event => setActiveSearch(event.target.value)}
          />
        </TableToolbar.Item>
      </TableToolbar.ItemGroup>
    </TableToolbar>
  );

  return (
    <Card>
      <Table data={_getFilteredData()} columns={columns} showSelection>
        <Table.ToolbarContainer>
          {selectionContext =>
            selectionContext.selectedCount === 0
              ? _renderMainToolbar()
              : _renderActionsToolbar({ ...selectionContext })
          }
        </Table.ToolbarContainer>
        <Table.Content />
        {!data.length && (
          <Table.EmptyState
            subtitle={
              <Text>
                {'There are no search results matching '}
                <Text weight="normal">{`"${activeSearch}"`}</Text>
              </Text>
            }
          />
        )}
      </Table>
    </Card>
  );
};
