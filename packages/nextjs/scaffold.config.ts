import * as chains from "viem/chains";
import { defineChain } from "viem";

export type ScaffoldConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
};

const mantle_sepolia = defineChain({
  id: 5003,
  name: "Mantle Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Mantle",
    symbol: "MNT",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia.mantle.xyz"],
      webSocket: ["wss://rpc.sepolia.mantle.xyz"],
    },
    public: {
      http: ["https://rpc.sepolia.mantle.xyz"],
      webSocket: ["wss://rpc.sepolia.mantle.xyz"],
    },
  },
  blockExplorers: {
    default: { name: "Explorer", url: "https://explorer.sepolia.mantle.xyz/" },
  },
  network: "Mantle Sepolia",
});

const scaffoldConfig = {
  // The networks on which your DApp is live
  targetNetworks: [mantle_sepolia],

  // The interval at which your front-end polls the RPC servers for new data
  // it has no effect if you only target the local network (default is 4000)
  pollingInterval: 3000,

  // This is ours Alchemy's default API key.
  // You can get your own at https://dashboard.alchemyapi.io
  // It's recommended to store it in an env variable:
  // .env.local for local testing, and in the Vercel/system env config for live apps.
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF",

  // This is ours WalletConnect's default project ID.
  // You can get your own at https://cloud.walletconnect.com
  // It's recommended to store it in an env variable:
  // .env.local for local testing, and in the Vercel/system env config for live apps.
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64",

  // Only show the Burner Wallet when running on hardhat network
  onlyLocalBurnerWallet: false,
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;