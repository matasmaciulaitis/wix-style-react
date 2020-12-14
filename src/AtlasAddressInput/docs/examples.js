export const simple = `<AtlasAddressInput />`;
export const controlled = `
class MyAddressInput extends React.Component {
  placesService = WixAtlasServiceWeb().PlacesServiceV2();

  state = {
    value: '',
  };

  _setAddressPostalCode = option => {
    this.placesService()
      .getPlace({ searchId: option.id })
      .then(({ place }) => {
        this.setState({ value: place.address.postalCode });
      });
  };

  _onChange = event => {
    this.setState({ value: event.target.value });
  }

  _onClear = () => this.setState({ value: '' });

  render() {
    const { value } = this.state;

    return (
      <AtlasAddressInput
        onChange={this._onChange}
        onClear={this._onClear}
        onSelect={this._setAddressPostalCode}
        value={value}
      />
    );
  }
}`;
