// Imagine this is a collection to hold our amazing NFTs!
let myNFTCollection = [];

// This function lets us create a new NFT with its details
function createNewNFT(name, description, imageUrl) {
  // This is where we store the NFT's info
  const newNFT = {
    name: name,
    description: description,
    imageUrl: imageUrl,
  };

  // Add the new NFT to our collection
  myNFTCollection.push(newNFT);
}

// This function shows off all the cool NFTs we've created!
function showMyNFTs() {
  console.log("Here are your minted NFTs:");
  for (const nft of myNFTCollection) {
    console.log("Name:", nft.name);
    console.log("Description:", nft.description);
    console.log("Image URL:", nft.imageUrl);
    console.log("----------");
  }
}

// This function tells us how many NFTs we have in total
function totalNFTs() {
  return myNFTCollection.length;
}

// Now, let's create some NFTs! (These are just examples)
createNewNFT("Grumpy Cat with Lasers", "This cat is not amused... but has cool lasers!", "https://.../lasercat.png");
createNewNFT("Smiling Blockchain Doggo", "The happiest pup on the web!", "https://.../doggo.png");
createNewNFT("Cyber Turtle of the Metaverse", "A digital dweller in a virtual world!", "https://.../cyberturtle.png");

// Time to show off our collection!
showMyNFTs();

// How many NFTs do we have in total?
const totalMinted = totalNFTs();
console.log("Total NFTs minted:", totalMinted);
