import React from 'react';

class BuyerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
      complement: '',
      addressNumber: '',
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
      <div>
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
        <label htmlFor="cpf">
          <input
            data-testid="checkout-cpf"
            placeholder="CPF"
            id="cpf"
            type="text"
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
        <label htmlFor="email">
          <input
            data-testid="checkout-email"
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
        <label htmlFor="phone">
          <input
            data-testid="checkout-phone"
            placeholder="Telefone"
            id="email"
            type="text"
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
        <label htmlFor="cep">
          <input
            data-testid="checkout-cep"
            placeholder="CEP"
            id="cep"
            type="text"
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
        <label htmlFor="address">
          <input
            data-testid="checkout-address"
            placeholder="Endereço"
            id="address"
            type="text"
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
            type="text"
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
        {this.renderNameInput()}
        {this.renderCpfInput()}
        {this.renderEmailInput()}
        {this.renderPhoneInput()}
        {this.renderCepInput()}
        {this.renderAddressInput()}
        {this.renderComplementInput()}
        {this.renderAddressNumberInput()}
      </div>
    );
  }
}

export default BuyerInfo;
