

module.exports = {
  'Test title' : function (browser) {
    browser
        .url('http://localhost:3000')
        .pause(1000);

    browser.assert
        .title('react-template')
        .end();
  }
};