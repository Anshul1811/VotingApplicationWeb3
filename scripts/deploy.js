const { ethers } = require("hardhat");

async function main() {
  const Voting = await ethers.getContractFactory("Voting");

  // Start deployment, returning a promise that resolves to a contract object
  const Voting_ = await Voting.deploy(
    ["Anshul", "Tanishq", "Sushant", "Surya"],
    90
  );
  console.log("Contract address:", Voting_.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//  async function main() {
//    const HelloWorld = await ethers.getContractFactory("HelloWorld");
//    const hello_world = await HelloWorld.deploy("Hello World!");
//    console.log("Contract Deployed to Address:", hello_world.address);
//  }
