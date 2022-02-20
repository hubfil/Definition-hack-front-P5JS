import { Address } from 'everscale-inpage-provider';

export const ROOT_ADDR = new Address('0:1fc516c17d33014ee5952ada1b18a842d73c69f0ab766ec03f423e45ea25ae88')

export const GQL_ENDPOINT = 'https://net.ton.dev/graphql'

export const ROOT_ABI = {
	"ABI version": 2,
	"version": "2.2",
	"header": ["pubkey", "time", "expire"],
	"functions": [
		{
			"name": "constructor",
			"inputs": [
				{"name":"codeIndex","type":"cell"},
				{"name":"codeNft","type":"cell"},
				{"name":"ownerPubkey","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "mintNft",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "mintNftChild",
			"inputs": [
				{"name":"gen","type":"uint16"},
				{"name":"owner","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "deployIndexBasis",
			"inputs": [
				{"name":"codeIndexBasis","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "destructIndexBasis",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "withdraw",
			"inputs": [
				{"name":"to","type":"address"},
				{"name":"value","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "setIndexDeployValue",
			"inputs": [
				{"name":"indexDeployValue","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "setRemainOnNft",
			"inputs": [
				{"name":"remainOnNft","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "setDeployIndexValue",
			"inputs": [
				{"name":"deployIndexValue","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "getIndexDeployValue",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "getRemainOnNft",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "getDeployIndexValue",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "getIndexBasisAddress",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"address"}
			]
		},
		{
			"name": "getTotalMinted",
			"inputs": [
			],
			"outputs": [
				{"name":"value0","type":"uint256"}
			]
		},
		{
			"name": "resolveCodeHashIndex",
			"inputs": [
				{"name":"addrRoot","type":"address"},
				{"name":"addrOwner","type":"address"}
			],
			"outputs": [
				{"name":"codeHashIndex","type":"uint256"}
			]
		},
		{
			"name": "resolveIndex",
			"inputs": [
				{"name":"addrRoot","type":"address"},
				{"name":"addrNft","type":"address"},
				{"name":"addrOwner","type":"address"}
			],
			"outputs": [
				{"name":"addrIndex","type":"address"}
			]
		},
		{
			"name": "resolveCodeHashNft",
			"inputs": [
			],
			"outputs": [
				{"name":"codeHashData","type":"uint256"}
			]
		},
		{
			"name": "resolveNft",
			"inputs": [
				{"name":"addrRoot","type":"address"},
				{"name":"id","type":"uint256"}
			],
			"outputs": [
				{"name":"addrNft","type":"address"}
			]
		}
	],
	"data": [
	],
	"events": [
		{
			"name": "TokenWasMinted",
			"inputs": [
				{"name":"nftAddr","type":"address"},
				{"name":"creatorAddr","type":"address"}
			],
			"outputs": [
			]
		}
	],
	"fields": [
		{"name":"_pubkey","type":"uint256"},
		{"name":"_timestamp","type":"uint64"},
		{"name":"_constructorFlag","type":"bool"},
		{"name":"_codeNft","type":"cell"},
		{"name":"_codeIndex","type":"cell"},
		{"name":"_ownerPubkey","type":"uint256"},
		{"name":"_totalMinted","type":"uint256"},
		{"name":"_addrIndexBasis","type":"address"},
		{"name":"_lastChild","type":"address"},
		{"name":"_indexDeployValue","type":"uint128"},
		{"name":"_remainOnNft","type":"uint128"},
		{"name":"_deployIndexBasisValue","type":"uint128"}
	]
}


export const NFT_ABI = {
	"ABI version": 2,
	"version": "2.2",
	"header": ["pubkey", "time", "expire"],
	"functions": [
		{
			"name": "constructor",
			"inputs": [
				{"name":"addrOwner","type":"address"},
				{"name":"codeIndex","type":"cell"},
				{"name":"indexDeployValue","type":"uint128"},
				{"name":"data","type":"uint16"}
			],
			"outputs": [
			]
		},
		{
			"name": "resolveNft",
			"inputs": [
				{"name":"addrRoot","type":"address"},
				{"name":"id","type":"uint256"}
			],
			"outputs": [
				{"name":"addrNft","type":"address"}
			]
		},
		{
			"name": "breed",
			"inputs": [
				{"name":"id","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "getWatered",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"lastWatered","type":"uint128"}
			]
		},
		{
			"name": "getAllData",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"data","type":"uint16"},
				{"name":"lastWatered","type":"uint128"},
				{"name":"birthTime","type":"uint128"},
				{"name":"lastHarvest","type":"uint128"}
			]
		},
		{
			"name": "water",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "harvest",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "junction",
			"inputs": [
				{"name":"id","type":"uint256"},
				{"name":"data","type":"uint16"}
			],
			"outputs": [
			]
		},
		{
			"name": "supportsInterface",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"interfaceID","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"bool"}
			]
		},
		{
			"name": "getName",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"data","type":"uint16"}
			]
		},
		{
			"name": "transferOwnership",
			"inputs": [
				{"name":"sendGasToAddr","type":"address"},
				{"name":"addrTo","type":"address"},
				{"components":[{"name":"value","type":"uint128"},{"name":"payload","type":"cell"}],"name":"callbacks","type":"map(address,tuple)"}
			],
			"outputs": [
			]
		},
		{
			"name": "setIndexDeployValue",
			"inputs": [
				{"name":"indexDeployValue","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "setIndexDestroyValue",
			"inputs": [
				{"name":"indexDestroyValue","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "getIndexDeployValue",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "getIndexDestroyValue",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"uint128"}
			]
		},
		{
			"name": "getOwner",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"addrOwner","type":"address"}
			]
		},
		{
			"name": "resolveCodeHashIndex",
			"inputs": [
				{"name":"addrRoot","type":"address"},
				{"name":"addrOwner","type":"address"}
			],
			"outputs": [
				{"name":"codeHashIndex","type":"uint256"}
			]
		},
		{
			"name": "resolveIndex",
			"inputs": [
				{"name":"addrRoot","type":"address"},
				{"name":"addrNft","type":"address"},
				{"name":"addrOwner","type":"address"}
			],
			"outputs": [
				{"name":"addrIndex","type":"address"}
			]
		},
		{
			"name": "_id",
			"inputs": [
			],
			"outputs": [
				{"name":"_id","type":"uint256"}
			]
		},
		{
			"name": "_lastHarvest",
			"inputs": [
			],
			"outputs": [
				{"name":"_lastHarvest","type":"uint128"}
			]
		},
		{
			"name": "_birthTime",
			"inputs": [
			],
			"outputs": [
				{"name":"_birthTime","type":"uint128"}
			]
		},
		{
			"name": "_waters",
			"inputs": [
			],
			"outputs": [
				{"name":"_waters","type":"uint16"}
			]
		},
		{
			"name": "_child",
			"inputs": [
			],
			"outputs": [
				{"name":"_child","type":"uint16"}
			]
		}
	],
	"data": [
		{"key":1,"name":"_id","type":"uint256"}
	],
	"events": [
		{
			"name": "TokenWasMinted",
			"inputs": [
				{"name":"owner","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "OwnershipTransferred",
			"inputs": [
				{"name":"oldOwner","type":"address"},
				{"name":"newOwner","type":"address"}
			],
			"outputs": [
			]
		}
	],
	"fields": [
		{"name":"_pubkey","type":"uint256"},
		{"name":"_timestamp","type":"uint64"},
		{"name":"_constructorFlag","type":"bool"},
		{"name":"_codeIndex","type":"cell"},
		{"name":"_id","type":"uint256"},
		{"name":"_addrRoot","type":"address"},
		{"name":"_addrOwner","type":"address"},
		{"name":"_indexDeployValue","type":"uint128"},
		{"name":"_indexDestroyValue","type":"uint128"},
		{"name":"_lastWatered","type":"uint128"},
		{"name":"_lastHarvest","type":"uint128"},
		{"name":"_birthTime","type":"uint128"},
		{"name":"_waters","type":"uint16"},
		{"name":"_child","type":"uint16"},
		{"name":"_data","type":"uint16"},
		{"name":"_supportedInterfaces","type":"optional(cell)"}
	]
}