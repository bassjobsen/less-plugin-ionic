less-plugin-ionic
========================

Imports the Less code for [Ionic Framework](http://ionicframework.com/) before your custom Less code. Ionic is a beautiful, open source front-end SDK for developing hybrid mobile apps with HTML5. 

<a href="http://bassjobsen.weblogs.fm/less-ionic-framework/">Motivation and explanation</a> for the Less version of Ionic.

## lessc usage

Install..

Requires Less v2.4.0

```
npm install -g less-plugin-ionic
```

and then on the command line,

```
lessc file.less --ionic
```

Should use this plugin together with the <a href="https://github.com/less/less-plugin-autoprefix">Less autoprefix plugin</a>:
```
npm istall less-autoprefix
lessc file.less --ionic --autoprefix="Android >= 2.1,BlackBerry >= 7,Chrome >= 20,Firefox >= 21,Explorer >= 10,iOS >= 3.2,Opera > 12,Safari > 6,OperaMobile >= 12.1,ChromeAndroid >= 40,FirefoxAndroid >= 30,ExplorerMobile >= 10" 

```
## Customize your Ionic app’s theme with Less

Now [read the Formula](https://github.com/bassjobsen/ionic-learn/blob/less/content/formulas/working-with-less/article.md) which describe how to deploy Ionic apps with Less. 


## Programmatic usage

```
var LessPluginIonic = require('less-plugin-ionic'),
    ionicPlugin = new LessPluginIonic();
var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["Android >= 2.1","BlackBerry >= 7","Chrome >= 20","Firefox >= 21","Explorer >= 10","iOS >= 3.2","Opera > 12","Safari > 6","OperaMobile >= 12.1","ChromeAndroid >= 40","FirefoxAndroid >= 30","ExplorerMobile >= 10"] });  
less.render(lessString, { plugins: [ionicPlugin,autoprefixPlugin] })
  .then(
```

## Browser usage

Browser usage is not supported at this time.
