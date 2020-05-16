import React from 'react';

class BuyerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      cpf: null,
      email: '',
      phone: null,
      cep: null,
      address: null,
      complement: '',
      addressNumber: null,
    };
    this.renderNameInput = this.renderNameInput.bind(this);
    this.renderCpfInput = this.renderCpfInput.bind(this);
    this.renderEmailInput = this.renderEmailInput.bind(this);
    this.renderPhoneInput = this.renderPhoneInput.bind(this);
    this.renderCepInput = this.renderCepInput.bind(this);
    this.renderAddressInput = this.renderAddressInput.bind(this);
    this.renderComplementInput = this.renderComplementInput.bind(this);
    this.renderAddressNumberInput = this.renderAddressNumberInput.bind(this);
  }

  updateRegister(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderNameInput() {
    const { fullname } = this.state;
    return (
      <div >
        <label htmlFor="fullname">
          <input
            data-testid="checkout-fullname"
            placeholder="Nome Completo"
            id="fullname"
            type="text"
            value={fullname}
            onChange={(event) => this.updateRegister('fullname', event.target.value)}
            required
          />
        </label>
      </div>
    );
  }

  renderCpfInput() {
    const { cpf } = this.state;
    return (
      <div>
        <label htmlFor="cpf" data-testid="checkout-cpf">
          <input
            placeholder="CPF"
            id="cpf"
            type="number"
            value={cpf}
            onChange={(event) => this.updateRegister('cpf', event.target.value)}
            required
          />
        </label>
      </div>
    );
  }

  renderEmailInput() {
    const { email } = this.state;
    return (
      <div>
        <label htmlFor="email" data-testid="checkout-email">
          <input
            placeholder="Email"
            id="email"
            type="text"
            value={email}
            onChange={(event) => this.updateRegister('email', event.target.value)}
            required
          />
        </label>
      </div>
    );
  }

  renderPhoneInput() {
    const { phone } = this.state;
    return (
      <div>
        <label htmlFor="phone" data-testid="checkout-phone">
          <input
            placeholder="Telefone"
            id="email"
            type="number"
            value={phone}
            onChange={(event) => this.updateRegister('phone', event.target.value)}
            required
          />
        </label>
      </div>
    );
  }

  renderCepInput() {
    const { cep } = this.state;
    return (
      <div>
        <label htmlFor="cep" data-testid="checkout-cep">
          <input
            placeholder="CEP"
            id="cep"
            type="number"
            value={cep}
            onChange={(event) => this.updateRegister('cep', event.target.value)}
            required
          />
        </label>
      </div>
    );
  }

  renderAddressInput() {
    const { address } = this.state;
    return (
      <div>
        <label htmlFor="address" data-testid="checkout-address">
          <input
            placeholder="Endereço"
            id="address"
            type="number"
            value={address}
            onChange={(event) => this.updateRegister('address', event.target.value)}
            required
          />
        </label>
      </div>
    );
  }

  renderComplementInput() {
    const { complement } = this.state;
    return (
      <div>
        <label htmlFor="complement">
          <input
            placeholder="Complemento"
            id="complement"
            type="text"
            value={complement}
            onChange={(event) => this.updateRegister('complement', event.target.value)}
            required
          />
        </label>
      </div>
    );
  }

  renderAddressNumberInput() {
    const { addressNumber } = this.state;
    return (
      <div>
        <label htmlFor="addressNumber">
          <input
            placeholder="Número"
            id="addressNumber"
            type="number"
            value={addressNumber}
            onChange={(event) => this.updateRegister('addressNumber', event.target.value)}
            required
          />
        </label>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderNameInput}
        {this.renderCpfInput}
        {this.renderEmailInput}
        {this.renderPhoneInput}
        {this.renderCpfInput}
        {this.renderAddressInput}
        {this.renderComplementInput}
        {this.renderAddressNumberInput}
      </div>
    );
  }
}

export default BuyerInfo;
