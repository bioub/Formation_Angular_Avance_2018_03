require('zone.js/dist/zone-node');

const path = require('path');
const express = require('express');
const ngUniversal = require('@nguniversal/express-engine');
const appServer = require('./dist/server/main.bundle');
const provideModuleMap = require('@nguniversal/module-map-ngfactory-loader').provideModuleMap;

const app = express();
app.use(express.static(path.resolve(__dirname, 'dist', 'browser')));
app.engine('html', ngUniversal.ngExpressEngine({
  bootstrap: appServer.AppServerModuleNgFactory,
  providers: [
    provideModuleMap(appServer.LAZY_MODULE_MAP),
  ]
}));
app.set('view engine', 'html');
app.set('views', 'dist/browser');

app.use((req, res) => {
  res.render('index', { req, res }, (err, html) => {
    if (err) {
      console.log(err);
      return res.send('<h2>Erreur</h2>');
    }
    res.send(html);
  });
});


/*
app.get('/**', (req, res) => {
  res.render('index', {
    req,
    res
  });
}, (err, html) => {
  console.log(err);
  res.status(html ? 200 : 500).send(html || err.message);
});
*/

app.listen(8000, () => {
  console.log(`Listening on http://localhost:8000`);
});
