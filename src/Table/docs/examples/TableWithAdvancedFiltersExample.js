/* eslint-disable */

class TableWithAdvancedFiltersExample extends React.Component {
    state = {
      data: [
        {
          name: `Adidas Sleek Shoes`,
          SKU: 'BP063001',
          price: '$78',
          inventory: 16,
          collectionId: 1,
          filterId: 1,
        },
        {
          name: `Stan Smith Shoes`,
          SKU: 'BP063001',
          price: '$112',
          inventory: 32,
          collectionId: 1,
        },
        {
          name: `Nite Jogger Shoes`,
          SKU: 'BP063001',
          price: '$89',
          inventory: 23,
          collectionId: 1,
        },
        {
          name: `Nizza Platform Shoes`,
          SKU: 'BP063001',
          price: '$45',
          inventory: 102,
          collectionId: 2,
        },
        {
          name: `QT Races 2.0 Shoes`,
          SKU: 'BP063001',
          price: '$96',
          inventory: 4,
          collectionId: 2,
        },
        {
          name: `NMD R1 Shoes`,
          SKU: 'BP063001',
          price: '$104',
          inventory: 45,
          collectionId: 2,
        },
      ],
      collectionId: 0,
      filterId: 0,
      searchTerm: '',
      inStock: false,
      right: 0,
      display: 'block',
    };
  
    image = (
      <Box
        height={120}
        width={120}
        backgroundColor="#dfe5eb"
        borderRadius="60px"
      />
    );
  
    openPanel = () => this.setState({ right: 0, display: 'block' });
  
    closePanel = () => this.setState({ right: -440, display: 'none' });
  
    render() {
      const filteredData = this._getFilteredData();
  
      return (
        <Page height="600px">
          <Page.Header
            title="Products"
            actionsBar={
              <Box>
                <Box padding="SP1">
                  <IconButton skin="inverted">
                    <Icons.Download />
                  </IconButton>
                </Box>
                <Box padding="SP1">
                  <Button prefixIcon={<Icons.Add />}>New Product</Button>{' '}
                </Box>
              </Box>
            }
          />
          <Page.Content>
            <Table
              data={filteredData}
              columns={[
                {
                  title: 'Name',
                  render: row => (
                    <Layout>
                      <Cell span={3}>
                        <Box
                          height={30}
                          width={30}
                          backgroundColor="#dfe5eb"
                          borderRadius="30px"
                          padding="SP2"
                        />
                      </Cell>
                      <Cell span={6} vertical>
                        <Highlighter match={this.state.searchTerm}>
                          {row.name}
                        </Highlighter>
                      </Cell>
                    </Layout>
                  ),
                  width: '30%',
                },
                {
                  title: 'SKU',
                  render: row => row.SKU,
                  width: '20%',
                },
                {
                  title: 'Price',
                  render: row => row.price,
                  width: '20%',
                },
                {
                  title: 'Inventory',
                  render: row => row.inventory,
                  width: '20%',
                },
                {
                  render: row => (
                    <TableActionCell
                      numOfVisibleSecondaryActions={2}
                      alwaysShowSecondaryActions
                      secondaryActions={[
                        {
                          icon: <Icons.Hidden />,
                        },
                        {
                          icon: <Icons.More />,
                        },
                      ]}
                    />
                  ),
                },
              ]}
              onSelectionChange={selectedIds =>
                console.log(
                  'Table.onSelectionChange(): selectedIds=',
                  selectedIds,
                )
              }
              showSelection
            >
              <Page.Sticky>
                <Card>
                  <Table.ToolbarContainer>
                    {selectionContext =>
                      selectionContext.selectedCount === 0
                        ? this._renderMainToolbar()
                        : this._renderActionsToolbar({ ...selectionContext })
                    }
                  </Table.ToolbarContainer>
                  {filteredData.length ? (
                    <Table.Titlebar />
                  ) : (
                    this._renderEmptyState()
                  )}
                </Card>
              </Page.Sticky>
              <Card>
                <Table.Content titleBarVisible={false} />
              </Card>
            </Table>
            <Box>
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  right: `${this.state.right}px`,
                  display: this.state.display,
                  height: '100%',
                  boxShadow:
                    '0 3px 24px 0 rgba(22, 45, 61, 0.18), 0 8px 8px 0 rgba(22, 45, 61, 0.12)',
                  zIndex: 9999,
                  transition: 'right 0.4s ease 0s',
                  overflow: 'hidden',
                }}
              >
                <SidePanel
                  title="Filters Panel"
                  onCloseButtonClick={this.closePanel}
                >
                  <SidePanel.Header title="Filters" />
                  <Accordion
                    items={[
                      {
                        title: 'Payment Status',
                      },
                      {
                        title: 'Date',
                      },
                      {
                        title: 'Products',
                      },
                      {
                        title: 'Sales Channels',
                      },
                      {
                        title: 'Archive Status',
                      },
                    ]}
                  />
                  <SidePanel.Footer>
                    <Layout rowHeight="30px">
                      <Cell span={5}>
                        <Text size="small">No filters applied</Text>
                      </Cell>
                      <Cell span={1}>
                        <TextButton size="small" disabled>
                          Clear all filters
                        </TextButton>
                      </Cell>
                    </Layout>
                    <Button onClick={this.closePanel} fullWidth>
                      Close Filters
                    </Button>
                  </SidePanel.Footer>
                </SidePanel>
              </div>
            </Box>
          </Page.Content>
        </Page>
      );
    }
  
    _renderMainToolbar() {
      const collectionOptions = [
        { id: 0, value: 'All' },
        { id: 1, value: 'New' },
      ];
  
      const filterOptions = [
        { id: 0, value: 'All' },
        { id: 1, value: 'Adidas' },
      ];
  
      return (
        <Card>
          <TableToolbar>
            <TableToolbar.ItemGroup position="start">
              <TableToolbar.Item>
                <TableToolbar.Label>Products</TableToolbar.Label>
              </TableToolbar.Item>
            </TableToolbar.ItemGroup>
            <TableToolbar.ItemGroup position="end">
              <TableToolbar.Item>
                <Button
                  priority="secondary"
                  prefixIcon={<Icons.ContentFilter />}
                  onClick={this.openPanel}
                >
                  Add filter
                </Button>
              </TableToolbar.Item>
              <TableToolbar.Item>{this._renderSearch(false)}</TableToolbar.Item>
            </TableToolbar.ItemGroup>
          </TableToolbar>
        </Card>
      );
    }
  
    _renderActionsToolbar({ selectedCount, getSelectedIds }) {
      return (
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
                priority="primary"
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
                priority="primary"
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
                priority="primary"
                prefixIcon={<Icons.Edit />}
                onClick={() =>
                  window.alert(`Editing selectedIds=${getSelectedIds()}`)
                }
              >
                Edit
              </Button>
            </TableToolbar.Item>
            <TableToolbar.Divider />
            <TableToolbar.Item>{this._renderSearch(true)}</TableToolbar.Item>
          </TableToolbar.ItemGroup>
        </TableToolbar>
      );
    }
  
    _renderEmptyState = () => (
      <Table.EmptyState
        title="You haven't added any items yet"
        subtitle="Add items to your website so people can buy them"
        image={
          <Box
            height={120}
            width={120}
            backgroundColor="#dfe5eb"
            borderRadius="50%"
          />
        }
      >
        <TextButton suffixIcon={<Icons.ExternalLink />}>
          Learn how to add items
        </TextButton>
      </Table.EmptyState>
    );
  
    _clearSearch() {
      this.setState({
        collectionId: 0,
        filterId: 0,
        searchTerm: '',
        inStock: false,
      });
    }
  
    _renderSearch(expandable) {
      return (
        <Search
          expandable={expandable}
          onChange={e => {
            this.setState({ searchTerm: e.target.value });
          }}
          value={this.state.searchTerm}
        />
      );
    }
  
    _getFilteredData() {
      let { data } = this.state;
  
      if (this.state.collectionId > 0) {
        data = data.filter(row => row.collectionId === this.state.collectionId);
      }
  
      if (this.state.filterId > 0) {
        data = data.filter(row => row.filterId === this.state.filterId);
      }
  
      if (this.state.inStock) {
        data = data.filter(row => row.inventory === 'In stock');
      }
  
      if (this.state.searchTerm !== '') {
        data = data.filter(row =>
          row.name.toUpperCase().includes(this.state.searchTerm.toUpperCase()),
        );
      }
  
      return data;
    }
  }
