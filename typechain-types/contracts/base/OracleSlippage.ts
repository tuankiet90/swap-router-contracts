/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export interface OracleSlippageInterface extends utils.Interface {
  functions: {
    "WETH9()": FunctionFragment;
    "checkOracleSlippage(bytes[],uint128[],uint24,uint32)": FunctionFragment;
    "checkOracleSlippage(bytes,uint24,uint32)": FunctionFragment;
    "factory()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "WETH9"
      | "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"
      | "checkOracleSlippage(bytes,uint24,uint32)"
      | "factory"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "checkOracleSlippage(bytes[],uint128[],uint24,uint32)",
    values: [
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "checkOracleSlippage(bytes,uint24,uint32)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;

  decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkOracleSlippage(bytes[],uint128[],uint24,uint32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkOracleSlippage(bytes,uint24,uint32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;

  events: {};
}

export interface OracleSlippage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OracleSlippageInterface;

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

    "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(
      paths: PromiseOrValue<BytesLike>[],
      amounts: PromiseOrValue<BigNumberish>[],
      maximumTickDivergence: PromiseOrValue<BigNumberish>,
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    "checkOracleSlippage(bytes,uint24,uint32)"(
      path: PromiseOrValue<BytesLike>,
      maximumTickDivergence: PromiseOrValue<BigNumberish>,
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[void]>;

    factory(overrides?: CallOverrides): Promise<[string]>;
  };

  WETH9(overrides?: CallOverrides): Promise<string>;

  "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(
    paths: PromiseOrValue<BytesLike>[],
    amounts: PromiseOrValue<BigNumberish>[],
    maximumTickDivergence: PromiseOrValue<BigNumberish>,
    secondsAgo: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<void>;

  "checkOracleSlippage(bytes,uint24,uint32)"(
    path: PromiseOrValue<BytesLike>,
    maximumTickDivergence: PromiseOrValue<BigNumberish>,
    secondsAgo: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<void>;

  factory(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    WETH9(overrides?: CallOverrides): Promise<string>;

    "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(
      paths: PromiseOrValue<BytesLike>[],
      amounts: PromiseOrValue<BigNumberish>[],
      maximumTickDivergence: PromiseOrValue<BigNumberish>,
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "checkOracleSlippage(bytes,uint24,uint32)"(
      path: PromiseOrValue<BytesLike>,
      maximumTickDivergence: PromiseOrValue<BigNumberish>,
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    factory(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    WETH9(overrides?: CallOverrides): Promise<BigNumber>;

    "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(
      paths: PromiseOrValue<BytesLike>[],
      amounts: PromiseOrValue<BigNumberish>[],
      maximumTickDivergence: PromiseOrValue<BigNumberish>,
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "checkOracleSlippage(bytes,uint24,uint32)"(
      path: PromiseOrValue<BytesLike>,
      maximumTickDivergence: PromiseOrValue<BigNumberish>,
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(
      paths: PromiseOrValue<BytesLike>[],
      amounts: PromiseOrValue<BigNumberish>[],
      maximumTickDivergence: PromiseOrValue<BigNumberish>,
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "checkOracleSlippage(bytes,uint24,uint32)"(
      path: PromiseOrValue<BytesLike>,
      maximumTickDivergence: PromiseOrValue<BigNumberish>,
      secondsAgo: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}