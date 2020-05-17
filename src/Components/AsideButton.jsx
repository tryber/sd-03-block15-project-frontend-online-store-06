import React from 'react'

class AsideButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({ open: !state.open }));
  }
  
  render() {
    const { open } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleClick}>CART</button>
        {open ? <Cart full={false} /> : null}
      </div>
    );
  };
}

export default AsideButton;
