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

export class RentAdded extends ethereum.Event {
  get params(): RentAdded__Params {
    return new RentAdded__Params(this);
  }
}

export class RentAdded__Params {
  _event: RentAdded;

  constructor(event: RentAdded) {
    this._event = event;
  }

  get property(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get users(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }

  get amounts(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get fromTime(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get toTime(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class RentClaimed extends ethereum.Event {
  get params(): RentClaimed__Params {
    return new RentClaimed__Params(this);
  }
}

export class RentClaimed__Params {
  _event: RentClaimed;

  constructor(event: RentClaimed) {
    this._event = event;
  }

  get property(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class RentSent extends ethereum.Event {
  get params(): RentSent__Params {
    return new RentSent__Params(this);
  }
}

export class RentSent__Params {
  _event: RentSent;

  constructor(event: RentSent) {
    this._event = event;
  }

  get property(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class RevenueDistribution extends ethereum.SmartContract {
  static bind(address: Address): RevenueDistribution {
    return new RevenueDistribution("RevenueDistribution", address);
  }

  getAverageMonthlyPayout(property: Address): BigInt {
    let result = super.call(
      "getAverageMonthlyPayout",
      "getAverageMonthlyPayout(address):(uint256)",
      [ethereum.Value.fromAddress(property)]
    );

    return result[0].toBigInt();
  }

  try_getAverageMonthlyPayout(property: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAverageMonthlyPayout",
      "getAverageMonthlyPayout(address):(uint256)",
      [ethereum.Value.fromAddress(property)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  pendingRevenue(property: Address, user: Address): BigInt {
    let result = super.call(
      "pendingRevenue",
      "pendingRevenue(address,address):(uint256)",
      [ethereum.Value.fromAddress(property), ethereum.Value.fromAddress(user)]
    );

    return result[0].toBigInt();
  }

  try_pendingRevenue(
    property: Address,
    user: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pendingRevenue",
      "pendingRevenue(address,address):(uint256)",
      [ethereum.Value.fromAddress(property), ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalPayout(property: Address): BigInt {
    let result = super.call("totalPayout", "totalPayout(address):(uint256)", [
      ethereum.Value.fromAddress(property)
    ]);

    return result[0].toBigInt();
  }

  try_totalPayout(property: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalPayout",
      "totalPayout(address):(uint256)",
      [ethereum.Value.fromAddress(property)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalPendingRevenue(user: Address): BigInt {
    let result = super.call(
      "totalPendingRevenue",
      "totalPendingRevenue(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );

    return result[0].toBigInt();
  }

  try_totalPendingRevenue(user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalPendingRevenue",
      "totalPendingRevenue(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

  get data(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get dai(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddRevenueCall extends ethereum.Call {
  get inputs(): AddRevenueCall__Inputs {
    return new AddRevenueCall__Inputs(this);
  }

  get outputs(): AddRevenueCall__Outputs {
    return new AddRevenueCall__Outputs(this);
  }
}

export class AddRevenueCall__Inputs {
  _call: AddRevenueCall;

  constructor(call: AddRevenueCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get users(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get amount(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get from(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get to(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class AddRevenueCall__Outputs {
  _call: AddRevenueCall;

  constructor(call: AddRevenueCall) {
    this._call = call;
  }
}

export class ClaimRevenueForTokenCall extends ethereum.Call {
  get inputs(): ClaimRevenueForTokenCall__Inputs {
    return new ClaimRevenueForTokenCall__Inputs(this);
  }

  get outputs(): ClaimRevenueForTokenCall__Outputs {
    return new ClaimRevenueForTokenCall__Outputs(this);
  }
}

export class ClaimRevenueForTokenCall__Inputs {
  _call: ClaimRevenueForTokenCall;

  constructor(call: ClaimRevenueForTokenCall) {
    this._call = call;
  }

  get property(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ClaimRevenueForTokenCall__Outputs {
  _call: ClaimRevenueForTokenCall;

  constructor(call: ClaimRevenueForTokenCall) {
    this._call = call;
  }
}