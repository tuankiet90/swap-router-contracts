/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace IV3SwapRouter {
  export type ExactInputParamsStruct = {
    path: PromiseOrValue<BytesLike>;
    recipient: PromiseOrValue<string>;
    amountIn: PromiseOrValue<BigNumberish>;
    amountOutMinimum: PromiseOrValue<BigNumberish>;
  };

  export type ExactInputParamsStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber
  ] & {
    path: string;
    recipient: string;
    amountIn: BigNumber;
    amountOutMinimum: BigNumber;
  };

  export type ExactInputSingleParamsStruct = {
    tokenIn: PromiseOrValue<string>;
    tokenOut: PromiseOrValue<string>;
    fee: PromiseOrValue<BigNumberish>;
    recipient: PromiseOrValue<string>;
    amountIn: PromiseOrValue<BigNumberish>;
    amountOutMinimum: PromiseOrValue<BigNumberish>;
    sqrtPriceLimitX96: PromiseOrValue<BigNumberish>;
  };

  export type ExactInputSingleParamsStructOutput = [
    string,
    string,
    number,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    tokenIn: string;
    tokenOut: string;
    fee: number;
    recipient: string;
    amountIn: BigNumber;
    amountOutMinimum: BigNumber;
    sqrtPriceLimitX96: BigNumber;
  };

  export type ExactOutputParamsStruct = {
    path: PromiseOrValue<BytesLike>;
    recipient: PromiseOrValue<string>;
    amountOut: PromiseOrValue<BigNumberish>;
    amountInMaximum: PromiseOrValue<BigNumberish>;
  };

  export type ExactOutputParamsStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber
  ] & {
    path: string;
    recipient: string;
    amountOut: BigNumber;
    amountInMaximum: BigNumber;
  };

  export type ExactOutputSingleParamsStruct = {
    tokenIn: PromiseOrValue<string>;
    tokenOut: PromiseOrValue<string>;
    fee: PromiseOrValue<BigNumberish>;
    recipient: PromiseOrValue<string>;
    amountOut: PromiseOrValue<BigNumberish>;
    amountInMaximum: PromiseOrValue<BigNumberish>;
    sqrtPriceLimitX96: PromiseOrValue<BigNumberish>;
  };

  export type ExactOutputSingleParamsStructOutput = [
    string,
    string,
    number,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    tokenIn: string;
    tokenOut: string;
    fee: number;
    recipient: string;
    amountOut: BigNumber;
    amountInMaximum: BigNumber;
    sqrtPriceLimitX96: BigNumber;
  };
}

export declare namespace IApproveAndCall {
  export type IncreaseLiquidityParamsStruct = {
    token0: PromiseOrValue<string>;
    token1: PromiseOrValue<string>;
    tokenId: PromiseOrValue<BigNumberish>;
    amount0Min: PromiseOrValue<BigNumberish>;
    amount1Min: PromiseOrValue<BigNumberish>;
  };

  export type IncreaseLiquidityParamsStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    token0: string;
    token1: string;
    tokenId: BigNumber;
    amount0Min: BigNumber;
    amount1Min: BigNumber;
  };

  export type MintParamsStruct = {
    token0: PromiseOrValue<string>;
    token1: PromiseOrValue<string>;
    fee: PromiseOrValue<BigNumberish>;
    tickLower: PromiseOrValue<BigNumberish>;
    tickUpper: PromiseOrValue<BigNumberish>;
    amount0Min: PromiseOrValue<BigNumberish>;
    amount1Min: PromiseOrValue<BigNumberish>;
    recipient: PromiseOrValue<string>;
  };

  export type MintParamsStructOutput = [
    string,
    string,
    number,
    number,
    number,
    BigNumber,
    BigNumber,
    string
  ] & {
    token0: string;
    token1: string;
    fee: number;
    tickLower: number;
    tickUpper: number;
    amount0Min: BigNumber;
    amount1Min: BigNumber;
    recipient: string;
  };
}

export interface ISwapRouter02Interface extends utils.Interface {
  functions: {
    "approveMax(address)": FunctionFragment;
    "approveMaxMinusOne(address)": FunctionFragment;
    "approveZeroThenMax(address)": FunctionFragment;
    "approveZeroThenMaxMinusOne(address)": FunctionFragment;
    "callPositionManager(bytes)": FunctionFragment;
    "exactInput((bytes,address,uint256,uint256))": FunctionFragment;
    "exactInputSingle((address,address,uint24,address,uint256,uint256,uint160))": FunctionFragment;
    "exactOutput((bytes,address,uint256,uint256))": FunctionFragment;
    "exactOutputSingle((address,address,uint24,address,uint256,uint256,uint160))": FunctionFragment;
    "getApprovalType(address,uint256)": FunctionFragment;
    "increaseLiquidity((address,address,uint256,uint256,uint256))": FunctionFragment;
    "mint((address,address,uint24,int24,int24,uint256,uint256,address))": FunctionFragment;
    "multicall(bytes32,bytes[])": FunctionFragment;
    "multicall(uint256,bytes[])": FunctionFragment;
    "multicall(bytes[])": FunctionFragment;
    "selfPermit(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "selfPermitAllowed(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "selfPermitAllowedIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "selfPermitIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "swapExactTokensForTokens(uint256,uint256,address[],address)": FunctionFragment;
    "swapTokensForExactTokens(uint256,uint256,address[],address)": FunctionFragment;
    "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approveMax"
      | "approveMaxMinusOne"
      | "approveZeroThenMax"
      | "approveZeroThenMaxMinusOne"
      | "callPositionManager"
      | "exactInput"
      | "exactInputSingle"
      | "exactOutput"
      | "exactOutputSingle"
      | "getApprovalType"
      | "increaseLiquidity"
      | "mint"
      | "multicall(bytes32,bytes[])"
      | "multicall(uint256,bytes[])"
      | "multicall(bytes[])"
      | "selfPermit"
      | "selfPermitAllowed"
      | "selfPermitAllowedIfNecessary"
      | "selfPermitIfNecessary"
      | "swapExactTokensForTokens"
      | "swapTokensForExactTokens"
      | "uniswapV3SwapCallback"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approveMax",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "approveMaxMinusOne",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "approveZeroThenMax",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "approveZeroThenMaxMinusOne",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "callPositionManager",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "exactInput",
    values: [IV3SwapRouter.ExactInputParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactInputSingle",
    values: [IV3SwapRouter.ExactInputSingleParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutput",
    values: [IV3SwapRouter.ExactOutputParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutputSingle",
    values: [IV3SwapRouter.ExactOutputSingleParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getApprovalType",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseLiquidity",
    values: [IApproveAndCall.IncreaseLiquidityParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [IApproveAndCall.MintParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall(bytes32,bytes[])",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall(uint256,bytes[])",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall(bytes[])",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermit",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermitAllowed",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermitAllowedIfNecessary",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "selfPermitIfNecessary",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactTokens",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3SwapCallback",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "approveMax", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "approveMaxMinusOne",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveZeroThenMax",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "approveZeroThenMaxMinusOne",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callPositionManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exactInputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactOutputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApprovalType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "multicall(bytes32,bytes[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multicall(uint256,bytes[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multicall(bytes[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "selfPermit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "selfPermitAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selfPermitAllowedIfNecessary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selfPermitIfNecessary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3SwapCallback",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ISwapRouter02 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISwapRouter02Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    approveMax(
      token: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    approveMaxMinusOne(
      token: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    approveZeroThenMax(
      token: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    approveZeroThenMaxMinusOne(
      token: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    callPositionManager(
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exactInput(
      params: IV3SwapRouter.ExactInputParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exactInputSingle(
      params: IV3SwapRouter.ExactInputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exactOutput(
      params: IV3SwapRouter.ExactOutputParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    exactOutputSingle(
      params: IV3SwapRouter.ExactOutputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getApprovalType(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    increaseLiquidity(
      params: IApproveAndCall.IncreaseLiquidityParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mint(
      params: IApproveAndCall.MintParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "multicall(bytes32,bytes[])"(
      previousBlockhash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "multicall(uint256,bytes[])"(
      deadline: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "multicall(bytes[])"(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    selfPermit(
      token: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    selfPermitAllowed(
      token: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    selfPermitAllowedIfNecessary(
      token: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    selfPermitIfNecessary(
      token: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapExactTokensForTokens(
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    swapTokensForExactTokens(
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: PromiseOrValue<BigNumberish>,
      amount1Delta: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  approveMax(
    token: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  approveMaxMinusOne(
    token: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  approveZeroThenMax(
    token: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  approveZeroThenMaxMinusOne(
    token: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callPositionManager(
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exactInput(
    params: IV3SwapRouter.ExactInputParamsStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exactInputSingle(
    params: IV3SwapRouter.ExactInputSingleParamsStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exactOutput(
    params: IV3SwapRouter.ExactOutputParamsStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  exactOutputSingle(
    params: IV3SwapRouter.ExactOutputSingleParamsStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getApprovalType(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  increaseLiquidity(
    params: IApproveAndCall.IncreaseLiquidityParamsStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mint(
    params: IApproveAndCall.MintParamsStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "multicall(bytes32,bytes[])"(
    previousBlockhash: PromiseOrValue<BytesLike>,
    data: PromiseOrValue<BytesLike>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "multicall(uint256,bytes[])"(
    deadline: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "multicall(bytes[])"(
    data: PromiseOrValue<BytesLike>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  selfPermit(
    token: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  selfPermitAllowed(
    token: PromiseOrValue<string>,
    nonce: PromiseOrValue<BigNumberish>,
    expiry: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  selfPermitAllowedIfNecessary(
    token: PromiseOrValue<string>,
    nonce: PromiseOrValue<BigNumberish>,
    expiry: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  selfPermitIfNecessary(
    token: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    deadline: PromiseOrValue<BigNumberish>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapExactTokensForTokens(
    amountIn: PromiseOrValue<BigNumberish>,
    amountOutMin: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    to: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  swapTokensForExactTokens(
    amountOut: PromiseOrValue<BigNumberish>,
    amountInMax: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<string>[],
    to: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uniswapV3SwapCallback(
    amount0Delta: PromiseOrValue<BigNumberish>,
    amount1Delta: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    approveMax(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    approveMaxMinusOne(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    approveZeroThenMax(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    approveZeroThenMaxMinusOne(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    callPositionManager(
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    exactInput(
      params: IV3SwapRouter.ExactInputParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactInputSingle(
      params: IV3SwapRouter.ExactInputSingleParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactOutput(
      params: IV3SwapRouter.ExactOutputParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactOutputSingle(
      params: IV3SwapRouter.ExactOutputSingleParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getApprovalType(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    increaseLiquidity(
      params: IApproveAndCall.IncreaseLiquidityParamsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    mint(
      params: IApproveAndCall.MintParamsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    "multicall(bytes32,bytes[])"(
      previousBlockhash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    "multicall(uint256,bytes[])"(
      deadline: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    "multicall(bytes[])"(
      data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    selfPermit(
      token: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    selfPermitAllowed(
      token: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    selfPermitAllowedIfNecessary(
      token: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    selfPermitIfNecessary(
      token: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExactTokensForTokens(
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapTokensForExactTokens(
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniswapV3SwapCallback(
      amount0Delta: PromiseOrValue<BigNumberish>,
      amount1Delta: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    approveMax(
      token: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    approveMaxMinusOne(
      token: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    approveZeroThenMax(
      token: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    approveZeroThenMaxMinusOne(
      token: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    callPositionManager(
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exactInput(
      params: IV3SwapRouter.ExactInputParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exactInputSingle(
      params: IV3SwapRouter.ExactInputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exactOutput(
      params: IV3SwapRouter.ExactOutputParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    exactOutputSingle(
      params: IV3SwapRouter.ExactOutputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getApprovalType(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    increaseLiquidity(
      params: IApproveAndCall.IncreaseLiquidityParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mint(
      params: IApproveAndCall.MintParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "multicall(bytes32,bytes[])"(
      previousBlockhash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "multicall(uint256,bytes[])"(
      deadline: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "multicall(bytes[])"(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    selfPermit(
      token: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    selfPermitAllowed(
      token: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    selfPermitAllowedIfNecessary(
      token: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    selfPermitIfNecessary(
      token: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapExactTokensForTokens(
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    swapTokensForExactTokens(
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uniswapV3SwapCallback(
      amount0Delta: PromiseOrValue<BigNumberish>,
      amount1Delta: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveMax(
      token: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    approveMaxMinusOne(
      token: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    approveZeroThenMax(
      token: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    approveZeroThenMaxMinusOne(
      token: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    callPositionManager(
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exactInput(
      params: IV3SwapRouter.ExactInputParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exactInputSingle(
      params: IV3SwapRouter.ExactInputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exactOutput(
      params: IV3SwapRouter.ExactOutputParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    exactOutputSingle(
      params: IV3SwapRouter.ExactOutputSingleParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getApprovalType(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    increaseLiquidity(
      params: IApproveAndCall.IncreaseLiquidityParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mint(
      params: IApproveAndCall.MintParamsStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "multicall(bytes32,bytes[])"(
      previousBlockhash: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "multicall(uint256,bytes[])"(
      deadline: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "multicall(bytes[])"(
      data: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    selfPermit(
      token: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    selfPermitAllowed(
      token: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    selfPermitAllowedIfNecessary(
      token: PromiseOrValue<string>,
      nonce: PromiseOrValue<BigNumberish>,
      expiry: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    selfPermitIfNecessary(
      token: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      deadline: PromiseOrValue<BigNumberish>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapExactTokensForTokens(
      amountIn: PromiseOrValue<BigNumberish>,
      amountOutMin: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    swapTokensForExactTokens(
      amountOut: PromiseOrValue<BigNumberish>,
      amountInMax: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<string>[],
      to: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: PromiseOrValue<BigNumberish>,
      amount1Delta: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
