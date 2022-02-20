import {
    Address,
    ProviderRpcClient,
    TvmException
} from 'everscale-inpage-provider';

const ADDRESS = '0:bbcbf7eb4b6f1203ba2d4ff5375de30a5408a8130bf79f870efbcfd49ec164e9'

const ever = new ProviderRpcClient();

async function myApp() {
    if (!(await ever.hasProvider())) {
        throw new Error('Extension is not installed');
    }
    await ever.ensureInitialized();

    const { accountInteraction } = await ever.requestPermissions({
        permissions: ['basic', 'accountInteraction'],
    });
    if (accountInteraction == null) {
        throw new Error('Insufficient permissions');
    }

    const selectedAddress = accountInteraction.address;
    const dePoolAddress = new Address(ADDRESS);

    const dePool = ever.getFullContractState(DePoolAbi, dePoolAddress);

    const transaction = await dePool
        .methods
        .addOrdinaryStake({
            stake: '10000000000',
        }).send({
            from: selectedAddress,
            amount: '10500000000',
            bounce: true,
        });
    console.log(transaction);

    try {
        const output = await dePool
            .methods
            .getParticipantInfo({
                addr: selectedAddress,
            })
            .call();
        console.log(output);
    } catch (e) {
        if (e instanceof TvmException) {
            console.error(e.code);
        }
    }
}

myApp().catch(console.error);