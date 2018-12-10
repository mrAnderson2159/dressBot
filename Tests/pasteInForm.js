/*
const fs = require('fs');

const parseInfo = require('./parseInfo.js');
const browser = require('zombie');
const mocha = require('mocha');

const path = "./form.html"
browser.localhost("http://localhost:10000", 10000)

describe('User visits signup page', () => {
  console.log(browser);
  const browser = new Browser();
  before((done) => {
    browser.visit('/form.html', done);
  });

  describe('submits form', () => {
    before((done) => {
      browser
        .fill('nome', parseInfo(path).nome)
        .fill('cognome', parseInfo(path).cognome)
        .fill('username', parseInfo(path).username)
        .fill('password', parseInfo(path).password)
        .pressButton('Invio', done);
    });
  })
})
*/
