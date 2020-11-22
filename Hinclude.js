const { Asset } = require('parcel-bundler');
const HTMLAsset = require('parcel-bundler/lib/assets/HTMLAsset');


const ATTRS = {
    src: ['h-include', 'h-include-lazy', 'h-import'],
}; // A list of metadata that should produce a dependency
const OPTIONS = {
    a: {
        href: { entry: true }
    },
    iframe: {
        src: { entry: true }
    }
};

class HincludeAsset extends HTMLAsset {
    collectDependencies() {
        super.collectDependencies();
        let ast = this.ast;
        ast.walk(node => {
            if (node.attrs) {
                for (let attr in node.attrs) {
                    const attrVal = node.attrs[attr];

                    if (!attrVal) {
                        continue;
                    } // Check for virtual paths

                    if (node.tag === 'a' && attrVal.lastIndexOf('.') < 1) {
                        continue;
                    }
                    let elements = ATTRS[attr];

                    if (elements && elements.includes(node.tag)) {
                        let depHandler = this.getAttrDepHandler(attr);
                        let options = OPTIONS[node.tag];
                        node.attrs[attr] = depHandler.call(this, attrVal, options && options[attr]);
                        this.isAstDirty = true;
                    }
                }
            }
            return node;
        })
    }
}

module.exports = HincludeAsset;