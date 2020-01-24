const { Plugin } = require('powercord/entities');
const { getModule } = require('powercord/webpack');
const { inject, uninject } = require('powercord/injector');
const { resolve } = require('path');
const fs = require('fs')

const Settings = require('./Settings');

module.exports = class customCSS extends Plugin {

  async startPlugin () {
    if (fs.existsSync(resolve(__dirname, 'custom.css')) == false) {
      fs.writeFileSync(resolve(__dirname, 'custom.css'), "");
    }
    this.loadCSS(resolve(__dirname, 'style.scss'));
    this.registerSettings('customCSS', 'Custom CSS', Settings);
  }

  getCss() {
    try {
    return fs.readFileSync(resolve(__dirname, 'custom.css'), "utf8")
    } catch {
      fs.writeFileSync(resolve(__dirname, 'custom.css'), "");
      return ""
    }
  }

  updateCss(css) {
    fs.writeFileSync(resolve(__dirname, 'custom.css'), css);
    this.loadCSS(resolve(__dirname, 'style.scss'));
  }
};
