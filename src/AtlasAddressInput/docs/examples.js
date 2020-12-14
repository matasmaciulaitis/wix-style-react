export const simple = `<AtlasAddressInput baseUrl="/api/" />`;
export const controlled = `
class MyAddressInput extends React.Component {
  baseUrl = '/api/';
  placesService = WixAtlasServiceWeb(this.baseUrl).PlacesServiceV2();

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

  render() {
    const { value } = this.state;

    return (
      <AtlasAddressInput
        baseUrl={this.baseUrl}
        onChange={this._onChange}
        onSelect={this._setAddressPostalCode}
        value={value}
      />
    );
  }
}`;
