// https://eth-sepolia.g.alchemy.com/v2/Yu83Wqi9YFfxs3IKgZ8v2S0c8Uy75pvA

// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
  sepolia:{
    url:"https://eth-sepolia.g.alchemy.com/v2/Yu83Wqi9YFfxs3IKgZ8v2S0c8Uy75pvA",
    accounts:[
      "8400b78178b6a3ccefa41e1ed7098883464797b7f2b2ef55151e2f50675a067f"
    ]
  }
  }
};
