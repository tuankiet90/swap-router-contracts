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

export declare namespace IMixedRouteQuoterV1 {
  export type QuoteExactInputSingleV2ParamsStruct = {
    tokenIn: PromiseOrValue<string>;
    tokenOut: PromiseOrValue<string>;
    amountIn: PromiseOrValue<BigNumberish>;
  };

  export type QuoteExactInputSingleV2ParamsStructOutput = [
    string,
    string,
    BigNumber
  ] & { tokenIn: string; tokenOut: string; amountIn: BigNumber };

  export type QuoteExactInputSingleV3ParamsStruct = {
    tokenIn: PromiseOrValue<string>;
    tokenOut: PromiseOrValue<string>;
    amountIn: PromiseOrValue<BigNumberish>;
    fee: PromiseOrValue<BigNumberish>;
    sqrtPriceLimitX96: PromiseOrValue<BigNumberish>;
  };

  export type QuoteExactInputSingleV3ParamsStructOutput = [
    string,
    string,
    BigNumber,
    number,
    BigNumber
  ] & {
    tokenIn: string;
    tokenOut: string;
    amountIn: BigNumber;
    fee: number;
    sqrtPriceLimitX96: BigNumber;
  };
}

export interface MixedRouteQuoterV1Interface extends utils.Interface {
  functions: {
    "WETH9()": FunctionFragment;
    "factory()": FunctionFragment;
    "factoryV2()": FunctionFragment;
    "quoteExactInput(bytes,uint256)": FunctionFragment;
    "quoteExactInputSingleV2((address,address,uint256))": FunctionFragment;
    "quoteExactInputSingleV3((address,address,uint256,uint24,uint160))": FunctionFragment;
    "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "WETH9"
      | "factory"
      | "factoryV2"
      | "quoteExactInput"
      | "quoteExactInputSingleV2"
      | "quoteExactInputSingleV3"
      | "uniswapV3SwapCallback"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "factoryV2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "quoteExactInput",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactInputSingleV2",
    values: [IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactInputSingleV3",
    values: [IMixedRouteQuoterV1.QuoteExactInputSingleV3ParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3SwapCallback",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factoryV2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactInput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactInputSingleV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactInputSingleV3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3SwapCallback",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MixedRouteQuoterV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MixedRouteQuoterV1Interface;

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
    WETH9(overrides?: CallOverrides): Promise<[string]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    factoryV2(overrides?: CallOverrides): Promise<[string]>;

    quoteExactInput(
      path: PromiseOrValue<BytesLike>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    quoteExactInputSingleV2(
      params: IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amountOut: BigNumber }>;

    quoteExactInputSingleV3(
      params: IMixedRouteQuoterV1.QuoteExactInputSingleV3ParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: PromiseOrValue<BigNumberish>,
      amount1Delta: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  WETH9(overrides?: CallOverrides): Promise<string>;

  factory(overrides?: CallOverrides): Promise<string>;

  factoryV2(overrides?: CallOverrides): Promise<string>;

  quoteExactInput(
    path: PromiseOrValue<BytesLike>,
    amountIn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  quoteExactInputSingleV2(
    params: IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  quoteExactInputSingleV3(
    params: IMixedRouteQuoterV1.QuoteExactInputSingleV3ParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uniswapV3SwapCallback(
    amount0Delta: PromiseOrValue<BigNumberish>,
    amount1Delta: PromiseOrValue<BigNumberish>,
    path: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    WETH9(overrides?: CallOverrides): Promise<string>;

    factory(overrides?: CallOverrides): Promise<string>;

    factoryV2(overrides?: CallOverrides): Promise<string>;

    quoteExactInput(
      path: PromiseOrValue<BytesLike>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[], number[], BigNumber] & {
        amountOut: BigNumber;
        v3SqrtPriceX96AfterList: BigNumber[];
        v3InitializedTicksCrossedList: number[];
        v3SwapGasEstimate: BigNumber;
      }
    >;

    quoteExactInputSingleV2(
      params: IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteExactInputSingleV3(
      params: IMixedRouteQuoterV1.QuoteExactInputSingleV3ParamsStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, BigNumber] & {
        amountOut: BigNumber;
        sqrtPriceX96After: BigNumber;
        initializedTicksCrossed: number;
        gasEstimate: BigNumber;
      }
    >;

    uniswapV3SwapCallback(
      amount0Delta: PromiseOrValue<BigNumberish>,
      amount1Delta: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    WETH9(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    factoryV2(overrides?: CallOverrides): Promise<BigNumber>;

    quoteExactInput(
      path: PromiseOrValue<BytesLike>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    quoteExactInputSingleV2(
      params: IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    quoteExactInputSingleV3(
      params: IMixedRouteQuoterV1.QuoteExactInputSingleV3ParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uniswapV3SwapCallback(
      amount0Delta: PromiseOrValue<BigNumberish>,
      amount1Delta: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    factoryV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    quoteExactInput(
      path: PromiseOrValue<BytesLike>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    quoteExactInputSingleV2(
      params: IMixedRouteQuoterV1.QuoteExactInputSingleV2ParamsStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    quoteExactInputSingleV3(
      params: IMixedRouteQuoterV1.QuoteExactInputSingleV3ParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: PromiseOrValue<BigNumberish>,
      amount1Delta: PromiseOrValue<BigNumberish>,
      path: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
