import { ProviderRpcClient } from 'everscale-inpage-provider';


import { ROOT_ABI, NFT_ABI, ROOT_CONTRACT, ROOT_ADDR, GQL_ENDPOINT } from './consts';


const MINT_AMOUNT = '2000000000'

const ever = new ProviderRpcClient();



async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response.json();
  }

async function graphql(query) {
    const { data } = await postData(GQL_ENDPOINT, {query})
    return data
}

function hex(int) {
    return BigInt(int).toString(16)
}

async function listTrees(userAddress) {
    const {codeHashIndex} = await ROOT.methods.resolveCodeHashIndex({ addrRoot: ROOT_ADDR, addrOwner: userAddress }).call()

    const { accounts } = await graphql(`
        query {
            accounts
            (filter : {
                code_hash :{eq : "${hex(codeHashIndex)}"}
            })
        {
            id
        }}
    `)

    return accounts
}

function getTreeContract(id) {
    return new ever.Contract(NFT_ABI, id)
}

async function mintTree(userAddress) {
    await ROOT.methods.mintNft({}).send({
        from: userAddress,
        amount: MINT_AMOUNT,
        bounce: false,
    })
    refresh()
}

function refresh() {
    console.log('reload')
}

class Tree {
    constructor(id) {
        this.id = id
        this.contract = new ever.Contract(NFT_ABI, id)
    }
    async water() {
        await this.contract.water({}).send({
            from: userAddress,
            amount: MINT_AMOUNT,
            bounce: false,
        })
        refresh()
    }

    async harvest() {
        await this.contract.water({}).send({
            from: userAddress,
            amount: MINT_AMOUNT,
            bounce: false,
        })
        refresh()
    }
}



window.mintTree = mintTree

async function LemonApp() {
    if (!(await ever.hasProvider())) {
        throw new Error('Extension is not installed');
    }
    await ever.ensureInitialized();
    const ROOT = new ever.Contract(ROOT_ABI, ROOT_ADDR);


    const { accountInteraction } = await ever.requestPermissions({
        permissions: ['basic', 'accountInteraction'],
    });
    if (accountInteraction == null) {
        throw new Error('Insufficient permissions');
    }
    const userAddress = accountInteraction.address;
    window.ROOT = ROOT
    window.userAddress = userAddress
    const trees = await listTrees(userAddress)


    console.log(trees)
}




LemonApp().catch(console.error);