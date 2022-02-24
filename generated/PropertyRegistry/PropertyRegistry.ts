// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class IPFSHashChanged extends ethereum.Event {
  get params(): IPFSHashChanged__Params {
    return new IPFSHashChanged__Params(this);
  }
}

export class IPFSHashChanged__Params {
  _event: IPFSHashChanged;

  constructor(event: IPFSHashChanged) {
    this._event = event;
  }

  get property(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newIPFSHash(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class NameAndSymbolChange extends ethereum.Event {
  get params(): NameAndSymbolChange__Params {
    return new NameAndSymbolChange__Params(this);
  }
}

export class NameAndSymbolChange__Params {
  _event: NameAndSymbolChange;

  constructor(event: NameAndSymbolChange) {
    this._event = event;
  }

  get property(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newName(): string {
    return this._event.parameters[1].value.toString();
  }

  get newSymbol(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PropertyBasicInfoChanged extends ethereum.Event {
  get params(): PropertyBasicInfoChanged__Params {
    return new PropertyBasicInfoChanged__Params(this);
  }
}

export class PropertyBasicInfoChanged__Params {
  _event: PropertyBasicInfoChanged;

  constructor(event: PropertyBasicInfoChanged) {
    this._event = event;
  }

  get property(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get streetLocation(): string {
    return this._event.parameters[1].value.toString();
  }

  get geoLocation(): string {
    return this._event.parameters[2].value.toString();
  }

  get propertyValuationCurrency(): string {
    return this._event.parameters[3].value.toString();
  }

  get propertyValuation(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class PropertyInfoAdded extends ethereum.Event {
  get params(): PropertyInfoAdded__Params {
    return new PropertyInfoAdded__Params(this);
  }
}

export class PropertyInfoAdded__Params {
  _event: PropertyInfoAdded;

  constructor(event: PropertyInfoAdded) {
    this._event = event;
  }

  get property(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get propertyType(): string {
    return this._event.parameters[1].value.toString();
  }

  get kadastralMunicipality(): string {
    return this._event.parameters[2].value.toString();
  }

  get parcelNumber(): string {
    return this._event.parameters[3].value.toString();
  }

  get ID(): string {
    return this._event.parameters[4].value.toString();
  }

  get buildingPart(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class PropertyInfoChanged extends ethereum.Event {
  get params(): PropertyInfoChanged__Params {
    return new PropertyInfoChanged__Params(this);
  }
}

export class PropertyInfoChanged__Params {
  _event: PropertyInfoChanged;

  constructor(event: PropertyInfoChanged) {
    this._event = event;
  }

  get property(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get idProp(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get propertyType(): string {
    return this._event.parameters[2].value.toString();
  }

  get kadastralMunicipality(): string {
    return this._event.parameters[3].value.toString();
  }

  get parcelNumber(): string {
    return this._event.parameters[4].value.toString();
  }

  get ID(): string {
    return this._event.parameters[5].value.toString();
  }

  get buildingPart(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class PropertyValuationChange extends ethereum.Event {
  get params(): PropertyValuationChange__Params {
    return new PropertyValuationChange__Params(this);
  }
}

export class PropertyValuationChange__Params {
  _event: PropertyValuationChange;

  constructor(event: PropertyValuationChange) {
    this._event = event;
  }

  get property(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newValuationProperty(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TokenValuationChange extends ethereum.Event {
  get params(): TokenValuationChange__Params {
    return new TokenValuationChange__Params(this);
  }
}

export class TokenValuationChange__Params {
  _event: TokenValuationChange;

  constructor(event: TokenValuationChange) {
    this._event = event;
  }

  get property(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newTokenValuation(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PropertyRegistry__getBasicInfoResult {
  value0: string;
  value1: string;
  value2: BigInt;
  value3: BigInt;
  value4: string;

  constructor(
    value0: string,
    value1: string,
    value2: BigInt,
    value3: BigInt,
    value4: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromString(this.value4));
    return map;
  }
}

export class PropertyRegistry__getPropertyInfoResult {
  value0: string;
  value1: string;
  value2: string;
  value3: string;
  value4: BigInt;

  constructor(
    value0: string,
    value1: string,
    value2: string,
    value3: string,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class PropertyRegistry extends ethereum.SmartContract {
  static bind(address: Address): PropertyRegistry {
    return new PropertyRegistry("PropertyRegistry", address);
  }

  getBasicInfo(property: Address): PropertyRegistry__getBasicInfoResult {
    let result = super.call(
      "getBasicInfo",
      "getBasicInfo(address):(string,string,uint256,uint256,string)",
      [ethereum.Value.fromAddress(property)]
    );

    return new PropertyRegistry__getBasicInfoResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toString()
    );
  }

  try_getBasicInfo(
    property: Address
  ): ethereum.CallResult<PropertyRegistry__getBasicInfoResult> {
    let result = super.tryCall(
      "getBasicInfo",
      "getBasicInfo(address):(string,string,uint256,uint256,string)",
      [ethereum.Value.fromAddress(property)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PropertyRegistry__getBasicInfoResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toString()
      )
    );
  }

  getDataProxy(): Address {
    let result = super.call("getDataProxy", "getDataProxy():(address)", []);

    return result[0].toAddress();
  }

  try_getDataProxy(): ethereum.CallResult<Address> {
    let result = super.tryCall("getDataProxy", "getDataProxy():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getIPFS(property: Address): string {
    let result = super.call("getIPFS", "getIPFS(address):(string)", [
      ethereum.Value.fromAddress(property)
    ]);

    return result[0].toString();
  }

  try_getIPFS(property: Address): ethereum.CallResult<string> {
    let result = super.tryCall("getIPFS", "getIPFS(address):(string)", [
      ethereum.Value.fromAddress(property)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getNumberOfPropertiesOnPropToken(property: Address): BigInt {
    let result = super.call(
      "getNumberOfPropertiesOnPropToken",
      "getNumberOfPropertiesOnPropToken(address):(uint64)",
      [ethereum.Value.fromAddress(property)]
    );

    return result[0].toBigInt();
  }

  try_getNumberOfPropertiesOnPropToken(
    property: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNumberOfPropertiesOnPropToken",
      "getNumberOfPropertiesOnPropToken(address):(uint64)",
      [ethereum.Value.fromAddress(property)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPropertyInfo(
    property: Address,
    index: BigInt
  ): PropertyRegistry__getPropertyInfoResult {
    let result = super.call(
      "getPropertyInfo",
      "getPropertyInfo(address,uint64):(string,string,string,string,uint64)",
      [
        ethereum.Value.fromAddress(property),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return new PropertyRegistry__getPropertyInfoResult(
      result[0].toString(),
      result[1].toString(),
      result[2].toString(),
      result[3].toString(),
      result[4].toBigInt()
    );
  }

  try_getPropertyInfo(
    property: Address,
    index: BigInt
  ): ethereum.CallResult<PropertyRegistry__getPropertyInfoResult> {
    let result = super.tryCall(
      "getPropertyInfo",
      "getPropertyInfo(address,uint64):(string,string,string,string,uint64)",
      [
        ethereum.Value.fromAddress(property),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PropertyRegistry__getPropertyInfoResult(
        value[0].toString(),
        value[1].toString(),
        value[2].toString(),
        value[3].toString(),
        value[4].toBigInt()
      )
    );
  }

  getSpecialWallet(): Address {
    let result = super.call(
      "getSpecialWallet",
      "getSpecialWallet():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getSpecialWallet(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSpecialWallet",
      "getSpecialWallet():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getValuation(property: Address): BigInt {
    let result = super.call("getValuation", "getValuation(address):(uint256)", [
      ethereum.Value.fromAddress(property)
    ]);

    return result[0].toBigInt();
  }

  try_getValuation(property: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getValuation",
      "getValuation(address):(uint256)",
      [ethereum.Value.fromAddress(property)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get dataProxy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddPropertyInfoCall extends ethereum.Call {
  get inputs(): AddPropertyInfoCall__Inputs {
    return new AddPropertyInfoCall__Inputs(this);
  }

  get outputs(): AddPropertyInfoCall__Outputs {
    return new AddPropertyInfoCall__Outputs(this);
  }
}

export class AddPropertyInfoCall__Inputs {
  _call: AddPropertyInfoCall;

  constructor(call: AddPropertyInfoCall) {
    this._call = call;
  }

  get property(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get propertyType(): string {
    return this._call.inputValues[1].value.toString();
  }

  get kadastralMunicipality(): string {
    return this._call.inputValues[2].value.toString();
  }

  get parcelNumber(): string {
    return this._call.inputValues[3].value.toString();
  }

  get ID(): string {
    return this._call.inputValues[4].value.toString();
  }

  get buildingPart(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class AddPropertyInfoCall__Outputs {
  _call: AddPropertyInfoCall;

  constructor(call: AddPropertyInfoCall) {
    this._call = call;
  }
}

export class ChangePropertyValuationCall extends ethereum.Call {
  get inputs(): ChangePropertyValuationCall__Inputs {
    return new ChangePropertyValuationCall__Inputs(this);
  }

  get outputs(): ChangePropertyValuationCall__Outputs {
    return new ChangePropertyValuationCall__Outputs(this);
  }
}

export class ChangePropertyValuationCall__Inputs {
  _call: ChangePropertyValuationCall;

  constructor(call: ChangePropertyValuationCall) {
    this._call = call;
  }

  get property(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get propertyValuation(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ChangePropertyValuationCall__Outputs {
  _call: ChangePropertyValuationCall;

  constructor(call: ChangePropertyValuationCall) {
    this._call = call;
  }
}

export class ChangeTokenNameAndSymbolCall extends ethereum.Call {
  get inputs(): ChangeTokenNameAndSymbolCall__Inputs {
    return new ChangeTokenNameAndSymbolCall__Inputs(this);
  }

  get outputs(): ChangeTokenNameAndSymbolCall__Outputs {
    return new ChangeTokenNameAndSymbolCall__Outputs(this);
  }
}

export class ChangeTokenNameAndSymbolCall__Inputs {
  _call: ChangeTokenNameAndSymbolCall;

  constructor(call: ChangeTokenNameAndSymbolCall) {
    this._call = call;
  }

  get property(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ChangeTokenNameAndSymbolCall__Outputs {
  _call: ChangeTokenNameAndSymbolCall;

  constructor(call: ChangeTokenNameAndSymbolCall) {
    this._call = call;
  }
}

export class ChangeTokenValuationCall extends ethereum.Call {
  get inputs(): ChangeTokenValuationCall__Inputs {
    return new ChangeTokenValuationCall__Inputs(this);
  }

  get outputs(): ChangeTokenValuationCall__Outputs {
    return new ChangeTokenValuationCall__Outputs(this);
  }
}

export class ChangeTokenValuationCall__Inputs {
  _call: ChangeTokenValuationCall;

  constructor(call: ChangeTokenValuationCall) {
    this._call = call;
  }

  get property(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenValuation(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ChangeTokenValuationCall__Outputs {
  _call: ChangeTokenValuationCall;

  constructor(call: ChangeTokenValuationCall) {
    this._call = call;
  }
}

export class EditBasicInfoCall extends ethereum.Call {
  get inputs(): EditBasicInfoCall__Inputs {
    return new EditBasicInfoCall__Inputs(this);
  }

  get outputs(): EditBasicInfoCall__Outputs {
    return new EditBasicInfoCall__Outputs(this);
  }
}

export class EditBasicInfoCall__Inputs {
  _call: EditBasicInfoCall;

  constructor(call: EditBasicInfoCall) {
    this._call = call;
  }

  get property(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get streetLocation(): string {
    return this._call.inputValues[1].value.toString();
  }

  get geoLocation(): string {
    return this._call.inputValues[2].value.toString();
  }

  get propertyValuationCurrency(): string {
    return this._call.inputValues[3].value.toString();
  }

  get propertyValuation(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get tokenValuation(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class EditBasicInfoCall__Outputs {
  _call: EditBasicInfoCall;

  constructor(call: EditBasicInfoCall) {
    this._call = call;
  }
}

export class EditPropertyInfoCall extends ethereum.Call {
  get inputs(): EditPropertyInfoCall__Inputs {
    return new EditPropertyInfoCall__Inputs(this);
  }

  get outputs(): EditPropertyInfoCall__Outputs {
    return new EditPropertyInfoCall__Outputs(this);
  }
}

export class EditPropertyInfoCall__Inputs {
  _call: EditPropertyInfoCall;

  constructor(call: EditPropertyInfoCall) {
    this._call = call;
  }

  get property(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get idProp(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get propertyType(): string {
    return this._call.inputValues[2].value.toString();
  }

  get kadastralMunicipality(): string {
    return this._call.inputValues[3].value.toString();
  }

  get parcelNumber(): string {
    return this._call.inputValues[4].value.toString();
  }

  get ID(): string {
    return this._call.inputValues[5].value.toString();
  }

  get buildingPart(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class EditPropertyInfoCall__Outputs {
  _call: EditPropertyInfoCall;

  constructor(call: EditPropertyInfoCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetDataProxyCall extends ethereum.Call {
  get inputs(): SetDataProxyCall__Inputs {
    return new SetDataProxyCall__Inputs(this);
  }

  get outputs(): SetDataProxyCall__Outputs {
    return new SetDataProxyCall__Outputs(this);
  }
}

export class SetDataProxyCall__Inputs {
  _call: SetDataProxyCall;

  constructor(call: SetDataProxyCall) {
    this._call = call;
  }

  get dataProxy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetDataProxyCall__Outputs {
  _call: SetDataProxyCall;

  constructor(call: SetDataProxyCall) {
    this._call = call;
  }
}

export class SetExchangeCall extends ethereum.Call {
  get inputs(): SetExchangeCall__Inputs {
    return new SetExchangeCall__Inputs(this);
  }

  get outputs(): SetExchangeCall__Outputs {
    return new SetExchangeCall__Outputs(this);
  }
}

export class SetExchangeCall__Inputs {
  _call: SetExchangeCall;

  constructor(call: SetExchangeCall) {
    this._call = call;
  }

  get exchange(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetExchangeCall__Outputs {
  _call: SetExchangeCall;

  constructor(call: SetExchangeCall) {
    this._call = call;
  }
}

export class SetIPFSCall extends ethereum.Call {
  get inputs(): SetIPFSCall__Inputs {
    return new SetIPFSCall__Inputs(this);
  }

  get outputs(): SetIPFSCall__Outputs {
    return new SetIPFSCall__Outputs(this);
  }
}

export class SetIPFSCall__Inputs {
  _call: SetIPFSCall;

  constructor(call: SetIPFSCall) {
    this._call = call;
  }

  get property(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get newIPFSHash(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class SetIPFSCall__Outputs {
  _call: SetIPFSCall;

  constructor(call: SetIPFSCall) {
    this._call = call;
  }
}

export class SetSpecialWalletCall extends ethereum.Call {
  get inputs(): SetSpecialWalletCall__Inputs {
    return new SetSpecialWalletCall__Inputs(this);
  }

  get outputs(): SetSpecialWalletCall__Outputs {
    return new SetSpecialWalletCall__Outputs(this);
  }
}

export class SetSpecialWalletCall__Inputs {
  _call: SetSpecialWalletCall;

  constructor(call: SetSpecialWalletCall) {
    this._call = call;
  }

  get specialWallet(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSpecialWalletCall__Outputs {
  _call: SetSpecialWalletCall;

  constructor(call: SetSpecialWalletCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
