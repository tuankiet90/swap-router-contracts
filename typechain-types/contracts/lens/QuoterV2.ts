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

export declare namespace IQuoterV2 {
  export type QuoteExactInputSingleParamsStruct = {
    tokenIn: PromiseOrValue<string>;
    tokenOut: PromiseOrValue<string>;
    amountIn: PromiseOrValue<BigNumberish>;
    fee: PromiseOrValue<BigNumberish>;
    sqrtPriceLimitX96: PromiseOrValue<BigNumberish>;
  };

  export type QuoteExactInputSingleParamsStructOutput = [
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

  export type QuoteExactOutputSingleParamsStruct = {
    tokenIn: PromiseOrValue<string>;
    tokenOut: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
    fee: PromiseOrValue<BigNumberish>;
    sqrtPriceLimitX96: PromiseOrValue<BigNumberish>;
  };

  export type QuoteExactOutputSingleParamsStructOutput = [
    string,
    string,
    BigNumber,
    number,
    BigNumber
  ] & {
    tokenIn: string;
    tokenOut: string;
    amount: BigNumber;
    fee: number;
    sqrtPriceLimitX96: BigNumber;
  };
}

export interface QuoterV2Interface extends utils.Interface {
  functions: {
    "WETH9()": FunctionFragment;
    "factory()": FunctionFragment;
    "quoteExactInput(bytes,uint256)": FunctionFragment;
    "quoteExactInputSingle((address,address,uint256,uint24,uint160))": FunctionFragment;
    "quoteExactOutput(bytes,uint256)": FunctionFragment;
    "quoteExactOutputSingle((address,address,uint256,uint24,uint160))": FunctionFragment;
    "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "WETH9"
      | "factory"
      | "quoteExactInput"
      | "quoteExactInputSingle"
      | "quoteExactOutput"
      | "quoteExactOutputSingle"
      | "uniswapV3SwapCallback"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "quoteExactInput",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactInputSingle",
    values: [IQuoterV2.QuoteExactInputSingleParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactOutput",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteExactOutputSingle",
    values: [IQuoterV2.QuoteExactOutputSingleParamsStruct]
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
  decodeFunctionResult(
    functionFragment: "quoteExactInput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactInputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteExactOutputSingle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3SwapCallback",
    data: BytesLike
  ): Result;

  events: {};
}

export interface QuoterV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: QuoterV2Interface;

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

    quoteExactInput(
      path: PromiseOrValue<BytesLike>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    quoteExactInputSingle(
      params: IQuoterV2.QuoteExactInputSingleParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    quoteExactOutput(
      path: PromiseOrValue<BytesLike>,
      amountOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    quoteExactOutputSingle(
      params: IQuoterV2.QuoteExactOutputSingleParamsStruct,
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

  quoteExactInput(
    path: PromiseOrValue<BytesLike>,
    amountIn: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  quoteExactInputSingle(
    params: IQuoterV2.QuoteExactInputSingleParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  quoteExactOutput(
    path: PromiseOrValue<BytesLike>,
    amountOut: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  quoteExactOutputSingle(
    params: IQuoterV2.QuoteExactOutputSingleParamsStruct,
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

    quoteExactInput(
      path: PromiseOrValue<BytesLike>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[], number[], BigNumber] & {
        amountOut: BigNumber;
        sqrtPriceX96AfterList: BigNumber[];
        initializedTicksCrossedList: number[];
        gasEstimate: BigNumber;
      }
    >;

    quoteExactInputSingle(
      params: IQuoterV2.QuoteExactInputSingleParamsStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, BigNumber] & {
        amountOut: BigNumber;
        sqrtPriceX96After: BigNumber;
        initializedTicksCrossed: number;
        gasEstimate: BigNumber;
      }
    >;

    quoteExactOutput(
      path: PromiseOrValue<BytesLike>,
      amountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[], number[], BigNumber] & {
        amountIn: BigNumber;
        sqrtPriceX96AfterList: BigNumber[];
        initializedTicksCrossedList: number[];
        gasEstimate: BigNumber;
      }
    >;

    quoteExactOutputSingle(
      params: IQuoterV2.QuoteExactOutputSingleParamsStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, number, BigNumber] & {
        amountIn: BigNumber;
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

    quoteExactInput(
      path: PromiseOrValue<BytesLike>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    quoteExactInputSingle(
      params: IQuoterV2.QuoteExactInputSingleParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    quoteExactOutput(
      path: PromiseOrValue<BytesLike>,
      amountOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    quoteExactOutputSingle(
      params: IQuoterV2.QuoteExactOutputSingleParamsStruct,
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

    quoteExactInput(
      path: PromiseOrValue<BytesLike>,
      amountIn: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    quoteExactInputSingle(
      params: IQuoterV2.QuoteExactInputSingleParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    quoteExactOutput(
      path: PromiseOrValue<BytesLike>,
      amountOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    quoteExactOutputSingle(
      params: IQuoterV2.QuoteExactOutputSingleParamsStruct,
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
