const { Keypair } = require("@solana/web3.js");
const bs58 = require("bs58");

const initializeKeypair = (keypair) => {
	try {
		const secret = JSON.parse(keypair);
		const secretKey = Uint8Array.from(secret);
		const keypairFromSecretKey = Keypair.fromSecretKey(secretKey);
		return keypairFromSecretKey;
	} catch {
		error;
	}
	{
		console.error("initializeKeypair =>", error);
	}
};

const getPrivateKeyFromKeypair = (keypairString) => {
	try {
		if (!keypairString) {
			throw new Error("Please provide keypair");
		}
		const keypair = initializeKeypair(keypairString);
		const privateKey = bs58.encode(keypair.secretKey);
		return privateKey;
	} catch (error) {
		console.error("getPrivateKeyFromKeypair =>", error);
	}
};

const getPublicKeyFromKeypair = (keypairString) => {
	try {
		if (!keypairString) {
			throw new Error("Please provide keypair");
		}
		const keypair = initializeKeypair(keypairString);
		const publicKey = keypair.publicKey.toString();
		return publicKey;
	} catch (error) {
		console.error("getPublicKeyFromKeypair =>", error);
	}
};

exports.getPrivateKeyFromKeypair = getPrivateKeyFromKeypair;
exports.getPublicKeyFromKeypair = getPublicKeyFromKeypair;
