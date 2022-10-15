
# Solana Keypair Extractor

A node package which helps you in extracting public and private keys as base58 strings from the given wallet keypair.


## Installation

Install the package with npm

```bash
  npm install solana-keypair-extractor
```

Install the package with yarn

```bash
  yarn add solana-keypair-extractor
```
    
## Usage/Examples

```javascript
import {getPrivateKeyFromKeypair, getPublicKeyFromKeypair} from 'solana-keypair-extractor'

const privateKey = getPrivateKeyFromKeypair("YOUR_WALLET_KEYPAIR");
const publicKey = getPublicKeyFromKeypair("YOUR_WALLET_KEYPAIR");
```


## Authors

- [@bhagyamudgal](https://www.github.com/bhagyamudgal)


## License

[MIT](https://github.com/bhagyamudgal/solana-keypair-extractor/blob/3b8b625279db2d3fdb0c0a0d2aac4f18c63620fa/LICENSE)


## Support

For support, email bhagyamudgal@gmail.com.

