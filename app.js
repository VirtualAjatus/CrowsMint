```javascript
document.addEventListener('DOMContentLoaded', () => {
    let walletConnected = false;

    const connectWalletButton = document.getElementById('connect-wallet');
    const mintNftButton = document.getElementById('mint-nft');

    connectWalletButton.addEventListener('click', () => {
        // Pseudo wallet connection logic
        walletConnected = true;
        mintNftButton.disabled = false;
        connectWalletButton.innerText = 'Wallet Connected';
        connectWalletButton.classList.add('bg-gray-500');
        connectWalletButton.classList.remove('bg-blue-500', 'hover:bg-blue-700');
    });

    mintNftButton.addEventListener('click', async () => {
        if (!walletConnected) {
            alert('Please connect your wallet first');
            return;
        }

        try {
            // Pseudo NFT minting logic
            alert('Minting your Crow Squad NFT...');

            // In actual implementation, this would be a Clarity contract call
            // Example with the stacks.js library:
            // const txOptions = {
            //    // define transaction options for NFT minting interaction
            // };
            // const txResponse = await openContractCall(txOptions);

            alert('NFT successfully minted!');
        } catch (error) {
            alert('Error minting NFT: ' + error.message);
        }
    });
});
```
