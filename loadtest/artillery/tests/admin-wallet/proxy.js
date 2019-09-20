import Gun from 'gun'
import bip39 from 'bip39-light'
import * as ethUtil from 'ethereumjs-util'
import {GoodWallet} from "../../../../src/lib/wallet/GoodWalletClass";
import {UserStorage} from "../../../../src/lib/gundb/UserStorageClass";
import {GoodWalletLogin} from "../../../../src/lib/login/GoodWalletLogin";
import {log} from '../../utils/commons'

export const recoverPublickey = (signature, msg, nonce) => {
  const sig = ethUtil.fromRpcSig(signature)

  const messageHash = ethUtil.keccak(
    `\u0019Ethereum Signed Message:\n${(msg.length + nonce.length).toString()}${msg}${nonce}`
  )

  const publicKey = ethUtil.ecrecover(messageHash, sig.v, sig.r, sig.s)
  const recovered = ethUtil.bufferToHex(ethUtil.pubToAddress(publicKey))

  return recovered
}

const fs = require("fs");
const rimraf = require("rimraf");
/**
 * Main method
 * @returns {Promise<boolean>}
 */
const runProxy = async () => {
  // return true
  try {
    await generatedData()
  } catch (e) {
    console.log(e);
  }

  return true
}

const generatedData = async () => {
  const count = process.env.DURATION * process.env.ARRIVALRATE
  log('Run generated random data: ' + count)
  let creds = []

  if (fs.existsSync(`${__dirname}/temp`)) {
    rimraf.sync(`${__dirname}/temp`);
  }
  fs.mkdirSync(`${__dirname}/temp`);

  for (let i = 0; i < count; i++) {
    creds.push(await createSignature(i))
    log(`Generated:  ${i + 1}/${count}`)
  }


  if (creds) {
    fs.writeFileSync(`${__dirname}/random.data`, JSON.stringify(creds))
  }

  return true
}

/**
 * Generate random data (but it not work)
 * @returns {Promise<Credentials|Error>}
 */
const createSignature = async (i) => {
  try {
    const gun = Gun({
      file: `${__dirname}/temp/${i}.json`,
    })
    let mnemonic = bip39.generateMnemonic()
    const wallet = new GoodWallet({mnemonic})
    await wallet.ready
    const storage = new UserStorage(wallet, gun)
    let login = new GoodWalletLogin(wallet, storage)
    await storage.ready
    const creds = await login.login()
    const gdPublicAddress = recoverPublickey(creds.gdSignature, 'Login to GoodDAPP', creds.nonce)
    console.log('!!!!!!!!',gdPublicAddress)
    return {
      ...creds,gdPublicAddress
    }

  } catch (e) {
    console.log(e)
  }

}

module.exports = {
  runProxy
}
