const Bundler = require('parcel-bundler');
const path = require('path');
const HIncludePlugin = require('../index');

describe('basic', function () {
    it('Should create a basic h-include transformation', async function () {
        // Init bundler
        const bundler = new Bundler(path.join(__dirname, './index.html'), Object.assign({
            outDir: path.join(__dirname, 'dist'),
            watch: false,
            cache: false,
            hmr: false,
            logLevel: 0
        }));
        // Registers the plugins asset types
        await HIncludePlugin(bundler);
        // Bundle the code
        const bundle = await bundler.bundle();
    });
});

/*
bundler.on("bundled", (bundle) => {
    const bundles = Array.from(bundle.childBundles).concat([bundle]);
    return Promise.all(bundles.map(async bundle => {
        console.log(bundle)
    }));
}); */