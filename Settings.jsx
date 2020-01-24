const { React } = require('powercord/webpack');
const { SwitchItem } = require('powercord/components/settings');
const { UnControlled } = require('react-codemirror2');
const { Button } = require('powercord/components')
const { resolve } = require('path');
const fs = require('fs')

require('codemirror/mode/css/css');
require('codemirror/addon/edit/matchbrackets');
require('codemirror/addon/edit/closebrackets');
require('codemirror/addon/search/search');
require('codemirror/addon/search/searchcursor');
require('codemirror/addon/search/jump-to-line');
require('codemirror/addon/dialog/dialog');

module.exports = class Settings extends React.Component {
  constructor () {
    super();
    this.plugin = powercord.pluginManager.get('customCSS');
    this.state = {
      Css: this.plugin.getCss()
    }
  }

  render () {
    return (
      <div>
        <div>
          <UnControlled autoCursor={false} value={this.state.Css} onChange={(editor, data, value) => {this.setState({Css: value})}} options={{mode: 'css', theme: 'shadowfox', matchBrackets: true, autoCloseBrackets: true, lineNumbers: true}} />
        </div>
        <div style={{marginTop: 5}}>
          <Button onClick={() => this.plugin.updateCss(this.state.Css)} size={Button.Sizes.SMALL}>Update</Button>
        </div>
      </div>
    );
  }
};
