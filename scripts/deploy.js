const hre = require("hardhat");

async function main() {
  const ClubNFT = await hre.ethers.getContractFactory("ClubNFT");
  const clubNFT = await ClubNFT.deploy();

  await clubNFT.deployed();

  console.log("ClubNFT deployed to:", clubNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
