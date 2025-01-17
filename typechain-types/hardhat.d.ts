/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IUniswapV2Callee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Callee__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "IUniswapV3SwapCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3SwapCallback__factory>;
    getContractFactory(
      name: "IUniswapV3Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3Pool__factory>;
    getContractFactory(
      name: "IUniswapV3PoolActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolDerivedState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolDerivedState__factory>;
    getContractFactory(
      name: "IUniswapV3PoolEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolEvents__factory>;
    getContractFactory(
      name: "IUniswapV3PoolImmutables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolImmutables__factory>;
    getContractFactory(
      name: "IUniswapV3PoolOwnerActions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolOwnerActions__factory>;
    getContractFactory(
      name: "IUniswapV3PoolState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV3PoolState__factory>;
    getContractFactory(
      name: "Multicall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Multicall__factory>;
    getContractFactory(
      name: "PeripheryImmutableState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PeripheryImmutableState__factory>;
    getContractFactory(
      name: "PeripheryPayments",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PeripheryPayments__factory>;
    getContractFactory(
      name: "PeripheryPaymentsWithFee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PeripheryPaymentsWithFee__factory>;
    getContractFactory(
      name: "SelfPermit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SelfPermit__factory>;
    getContractFactory(
      name: "IERC20PermitAllowed",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20PermitAllowed__factory>;
    getContractFactory(
      name: "IWETH9",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH9__factory>;
    getContractFactory(
      name: "IERC721Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Permit__factory>;
    getContractFactory(
      name: "IMulticall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMulticall__factory>;
    getContractFactory(
      name: "INonfungiblePositionManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INonfungiblePositionManager__factory>;
    getContractFactory(
      name: "IPeripheryImmutableState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeripheryImmutableState__factory>;
    getContractFactory(
      name: "IPeripheryPayments",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeripheryPayments__factory>;
    getContractFactory(
      name: "IPeripheryPaymentsWithFee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeripheryPaymentsWithFee__factory>;
    getContractFactory(
      name: "IPoolInitializer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolInitializer__factory>;
    getContractFactory(
      name: "ISelfPermit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISelfPermit__factory>;
    getContractFactory(
      name: "ApproveAndCall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ApproveAndCall__factory>;
    getContractFactory(
      name: "ImmutableState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ImmutableState__factory>;
    getContractFactory(
      name: "MulticallExtended",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MulticallExtended__factory>;
    getContractFactory(
      name: "OracleSlippage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleSlippage__factory>;
    getContractFactory(
      name: "PeripheryPaymentsExtended",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PeripheryPaymentsExtended__factory>;
    getContractFactory(
      name: "PeripheryPaymentsWithFeeExtended",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PeripheryPaymentsWithFeeExtended__factory>;
    getContractFactory(
      name: "IApproveAndCall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IApproveAndCall__factory>;
    getContractFactory(
      name: "IImmutableState",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IImmutableState__factory>;
    getContractFactory(
      name: "IMixedRouteQuoterV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMixedRouteQuoterV1__factory>;
    getContractFactory(
      name: "IMulticallExtended",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMulticallExtended__factory>;
    getContractFactory(
      name: "IOracleSlippage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOracleSlippage__factory>;
    getContractFactory(
      name: "IPeripheryPaymentsExtended",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeripheryPaymentsExtended__factory>;
    getContractFactory(
      name: "IPeripheryPaymentsWithFeeExtended",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPeripheryPaymentsWithFeeExtended__factory>;
    getContractFactory(
      name: "IQuoter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IQuoter__factory>;
    getContractFactory(
      name: "IQuoterV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IQuoterV2__factory>;
    getContractFactory(
      name: "ISwapRouter02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISwapRouter02__factory>;
    getContractFactory(
      name: "ITokenValidator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITokenValidator__factory>;
    getContractFactory(
      name: "IV2SwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IV2SwapRouter__factory>;
    getContractFactory(
      name: "IV3SwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IV3SwapRouter__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "MixedRouteQuoterV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MixedRouteQuoterV1__factory>;
    getContractFactory(
      name: "Quoter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Quoter__factory>;
    getContractFactory(
      name: "QuoterV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.QuoterV2__factory>;
    getContractFactory(
      name: "TokenValidator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenValidator__factory>;
    getContractFactory(
      name: "Multicall2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Multicall2__factory>;
    getContractFactory(
      name: "SwapRouter02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SwapRouter02__factory>;
    getContractFactory(
      name: "ImmutableStateTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ImmutableStateTest__factory>;
    getContractFactory(
      name: "MockObservations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockObservations__factory>;
    getContractFactory(
      name: "MockTimeSwapRouter02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockTimeSwapRouter02__factory>;
    getContractFactory(
      name: "OracleSlippageTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleSlippageTest__factory>;
    getContractFactory(
      name: "PoolTicksCounterTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolTicksCounterTest__factory>;
    getContractFactory(
      name: "TestERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestERC20__factory>;
    getContractFactory(
      name: "TestMulticallExtended",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestMulticallExtended__factory>;
    getContractFactory(
      name: "TestUniswapV3Callee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestUniswapV3Callee__factory>;
    getContractFactory(
      name: "V2SwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.V2SwapRouter__factory>;
    getContractFactory(
      name: "V3SwapRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.V3SwapRouter__factory>;

    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IUniswapV2Callee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Callee>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "IUniswapV3SwapCallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3SwapCallback>;
    getContractAt(
      name: "IUniswapV3Pool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3Pool>;
    getContractAt(
      name: "IUniswapV3PoolActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolActions>;
    getContractAt(
      name: "IUniswapV3PoolDerivedState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolDerivedState>;
    getContractAt(
      name: "IUniswapV3PoolEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolEvents>;
    getContractAt(
      name: "IUniswapV3PoolImmutables",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolImmutables>;
    getContractAt(
      name: "IUniswapV3PoolOwnerActions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolOwnerActions>;
    getContractAt(
      name: "IUniswapV3PoolState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV3PoolState>;
    getContractAt(
      name: "Multicall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Multicall>;
    getContractAt(
      name: "PeripheryImmutableState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PeripheryImmutableState>;
    getContractAt(
      name: "PeripheryPayments",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PeripheryPayments>;
    getContractAt(
      name: "PeripheryPaymentsWithFee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PeripheryPaymentsWithFee>;
    getContractAt(
      name: "SelfPermit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SelfPermit>;
    getContractAt(
      name: "IERC20PermitAllowed",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20PermitAllowed>;
    getContractAt(
      name: "IWETH9",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH9>;
    getContractAt(
      name: "IERC721Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Permit>;
    getContractAt(
      name: "IMulticall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMulticall>;
    getContractAt(
      name: "INonfungiblePositionManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INonfungiblePositionManager>;
    getContractAt(
      name: "IPeripheryImmutableState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeripheryImmutableState>;
    getContractAt(
      name: "IPeripheryPayments",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeripheryPayments>;
    getContractAt(
      name: "IPeripheryPaymentsWithFee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeripheryPaymentsWithFee>;
    getContractAt(
      name: "IPoolInitializer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPoolInitializer>;
    getContractAt(
      name: "ISelfPermit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISelfPermit>;
    getContractAt(
      name: "ApproveAndCall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ApproveAndCall>;
    getContractAt(
      name: "ImmutableState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ImmutableState>;
    getContractAt(
      name: "MulticallExtended",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MulticallExtended>;
    getContractAt(
      name: "OracleSlippage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OracleSlippage>;
    getContractAt(
      name: "PeripheryPaymentsExtended",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PeripheryPaymentsExtended>;
    getContractAt(
      name: "PeripheryPaymentsWithFeeExtended",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PeripheryPaymentsWithFeeExtended>;
    getContractAt(
      name: "IApproveAndCall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IApproveAndCall>;
    getContractAt(
      name: "IImmutableState",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IImmutableState>;
    getContractAt(
      name: "IMixedRouteQuoterV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMixedRouteQuoterV1>;
    getContractAt(
      name: "IMulticallExtended",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMulticallExtended>;
    getContractAt(
      name: "IOracleSlippage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOracleSlippage>;
    getContractAt(
      name: "IPeripheryPaymentsExtended",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeripheryPaymentsExtended>;
    getContractAt(
      name: "IPeripheryPaymentsWithFeeExtended",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPeripheryPaymentsWithFeeExtended>;
    getContractAt(
      name: "IQuoter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IQuoter>;
    getContractAt(
      name: "IQuoterV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IQuoterV2>;
    getContractAt(
      name: "ISwapRouter02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISwapRouter02>;
    getContractAt(
      name: "ITokenValidator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITokenValidator>;
    getContractAt(
      name: "IV2SwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IV2SwapRouter>;
    getContractAt(
      name: "IV3SwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IV3SwapRouter>;
    getContractAt(
      name: "IWETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH>;
    getContractAt(
      name: "MixedRouteQuoterV1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MixedRouteQuoterV1>;
    getContractAt(
      name: "Quoter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Quoter>;
    getContractAt(
      name: "QuoterV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.QuoterV2>;
    getContractAt(
      name: "TokenValidator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenValidator>;
    getContractAt(
      name: "Multicall2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Multicall2>;
    getContractAt(
      name: "SwapRouter02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SwapRouter02>;
    getContractAt(
      name: "ImmutableStateTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ImmutableStateTest>;
    getContractAt(
      name: "MockObservations",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockObservations>;
    getContractAt(
      name: "MockTimeSwapRouter02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockTimeSwapRouter02>;
    getContractAt(
      name: "OracleSlippageTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OracleSlippageTest>;
    getContractAt(
      name: "PoolTicksCounterTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolTicksCounterTest>;
    getContractAt(
      name: "TestERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestERC20>;
    getContractAt(
      name: "TestMulticallExtended",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestMulticallExtended>;
    getContractAt(
      name: "TestUniswapV3Callee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestUniswapV3Callee>;
    getContractAt(
      name: "V2SwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.V2SwapRouter>;
    getContractAt(
      name: "V3SwapRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.V3SwapRouter>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
