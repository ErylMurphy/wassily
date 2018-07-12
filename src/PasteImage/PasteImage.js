import React, { Component } from "react";
import Palette from "react-palette";
import { CopyToClipboard } from 'react-copy-to-clipboard';



class PasteImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: '',
        copied: false,
      }};

  render() {
    return (
      <div>
        <input value={this.state.value}
          onChange={({ target: { value } }) => this.setState({ value, copied: false })} />

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({ copied: true })}>
          <span>Copy to clipboard with span</span>
        </CopyToClipboard>

        <CopyToClipboard text={this.state.value}
          onCopy={() => this.setState({ copied: true })}>
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>

        {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
      </div>
    )}}

export default PasteImage;