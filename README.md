# parcel-plugin-h-include

A plugin to use [h-include](https://github.com/gustafnk/h-include) with [Parcel](https://parceljs.org/).

## Installation

```sh
yarn add --dev parcel-plugin-h-include
```

or

```sh
npm install --save-dev parcel-plugin-h-include
```

## Usage

The plugin works without any extra configuration. See [h-include's docs](https://github.com/gustafnk/h-include) if you want to configure the library.

## Limitations

- The plugin works by extending Parcel's `HTMLAsset` due to how Parcel works. Any other plugins which do the same might have conflicts.

## License

MIT License

## Made with ❤️ By José Rocha.

`parcel-plugin-h-include` is an open source project and will always remain free to use. If you think it's cool, please star it 🌟. Contact us at [GitHub Profile](https://github.com/joserochadocarmo) if you need any help with these or just want to say hi!

