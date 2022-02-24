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

export class AddedCertifiedPartner extends ethereum.Event {
  get params(): AddedCertifiedPartner__Params {
    return new AddedCertifiedPartner__Params(this);
  }
}

export class AddedCertifiedPartner__Params {
  _event: AddedCertifiedPartner;

  constructor(event: AddedCertifiedPartner) {
    this._event = event;
  }

  get cpBytes(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get cp(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class AddedWallet extends ethereum.Event {
  get params(): AddedWallet__Params {
    return new AddedWallet__Params(this);
  }
}

export class AddedWallet__Params {
  _event: AddedWallet;

  constructor(event: AddedWallet) {
    this._event = event;
  }

  get cp(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get wallet(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get cpName(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class AddedWhitelisted extends ethereum.Event {
  get params(): AddedWhitelisted__Params {
    return new AddedWhitelisted__Params(this);
  }
}

export class AddedWhitelisted__Params {
  _event: AddedWhitelisted;

  constructor(event: AddedWhitelisted) {
    this._event = event;
  }

  get cp(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get users(): Array<string> {
    return this._event.parameters[1].value.toStringArray();
  }

  get cpName(): string {
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

export class RemovedWallet extends ethereum.Event {
  get params(): RemovedWallet__Params {
    return new RemovedWallet__Params(this);
  }
}

export class RemovedWallet__Params {
  _event: RemovedWallet;

  constructor(event: RemovedWallet) {
    this._event = event;
  }

  get cp(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get wallet(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RemovedWhitelisted extends ethereum.Event {
  get params(): RemovedWhitelisted__Params {
    return new RemovedWhitelisted__Params(this);
  }
}

export class RemovedWhitelisted__Params {
  _event: RemovedWhitelisted;

  constructor(event: RemovedWhitelisted) {
    this._event = event;
  }

  get cp(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get users(): Array<string> {
    return this._event.parameters[1].value.toStringArray();
  }

  get cpName(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class CertifiedPartners extends ethereum.SmartContract {
  static bind(address: Address): CertifiedPartners {
    return new CertifiedPartners("CertifiedPartners", address);
  }

  canCertifiedPartnerDistributeRent(addr: Address): boolean {
    let result = super.call(
      "canCertifiedPartnerDistributeRent",
      "canCertifiedPartnerDistributeRent(address):(bool)",
      [ethereum.Value.fromAddress(addr)]
    );

    return result[0].toBoolean();
  }

  try_canCertifiedPartnerDistributeRent(
    addr: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "canCertifiedPartnerDistributeRent",
      "canCertifiedPartnerDistributeRent(address):(bool)",
      [ethereum.Value.fromAddress(addr)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getCPBytesFromWallet(wallet: Address): Bytes {
    let result = super.call(
      "getCPBytesFromWallet",
      "getCPBytesFromWallet(address):(bytes32)",
      [ethereum.Value.fromAddress(wallet)]
    );

    return result[0].toBytes();
  }

  try_getCPBytesFromWallet(wallet: Address): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getCPBytesFromWallet",
      "getCPBytesFromWallet(address):(bytes32)",
      [ethereum.Value.fromAddress(wallet)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getUserBytes(user: string): Bytes {
    let result = super.call("getUserBytes", "getUserBytes(string):(bytes32)", [
      ethereum.Value.fromString(user)
    ]);

    return result[0].toBytes();
  }

  try_getUserBytes(user: string): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getUserBytes",
      "getUserBytes(string):(bytes32)",
      [ethereum.Value.fromString(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  isCPAdmin(admin: Address, cp: Address): boolean {
    let result = super.call("isCPAdmin", "isCPAdmin(address,address):(bool)", [
      ethereum.Value.fromAddress(admin),
      ethereum.Value.fromAddress(cp)
    ]);

    return result[0].toBoolean();
  }

  try_isCPAdmin(admin: Address, cp: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isCPAdmin",
      "isCPAdmin(address,address):(bool)",
      [ethereum.Value.fromAddress(admin), ethereum.Value.fromAddress(cp)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isCertifiedPartner(addr: Address): boolean {
    let result = super.call(
      "isCertifiedPartner",
      "isCertifiedPartner(address):(bool)",
      [ethereum.Value.fromAddress(addr)]
    );

    return result[0].toBoolean();
  }

  try_isCertifiedPartner(addr: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isCertifiedPartner",
      "isCertifiedPartner(address):(bool)",
      [ethereum.Value.fromAddress(addr)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isCertifiedPartnerName(name: string): boolean {
    let result = super.call(
      "isCertifiedPartnerName",
      "isCertifiedPartnerName(string):(bool)",
      [ethereum.Value.fromString(name)]
    );

    return result[0].toBoolean();
  }

  try_isCertifiedPartnerName(name: string): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isCertifiedPartnerName",
      "isCertifiedPartnerName(string):(bool)",
      [ethereum.Value.fromString(name)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isUserWhitelisted(cp: Bytes, user: Bytes): boolean {
    let result = super.call(
      "isUserWhitelisted",
      "isUserWhitelisted(bytes32,bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(cp), ethereum.Value.fromFixedBytes(user)]
    );

    return result[0].toBoolean();
  }

  try_isUserWhitelisted(cp: Bytes, user: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isUserWhitelisted",
      "isUserWhitelisted(bytes32,bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(cp), ethereum.Value.fromFixedBytes(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isUserWhitelistedByName(cp: string, user: string): boolean {
    let result = super.call(
      "isUserWhitelistedByName",
      "isUserWhitelistedByName(string,string):(bool)",
      [ethereum.Value.fromString(cp), ethereum.Value.fromString(user)]
    );

    return result[0].toBoolean();
  }

  try_isUserWhitelistedByName(
    cp: string,
    user: string
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isUserWhitelistedByName",
      "isUserWhitelistedByName(string,string):(bool)",
      [ethereum.Value.fromString(cp), ethereum.Value.fromString(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  get roles(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddCPAndWalletCall extends ethereum.Call {
  get inputs(): AddCPAndWalletCall__Inputs {
    return new AddCPAndWalletCall__Inputs(this);
  }

  get outputs(): AddCPAndWalletCall__Outputs {
    return new AddCPAndWalletCall__Outputs(this);
  }
}

export class AddCPAndWalletCall__Inputs {
  _call: AddCPAndWalletCall;

  constructor(call: AddCPAndWalletCall) {
    this._call = call;
  }

  get cp(): string {
    return this._call.inputValues[0].value.toString();
  }

  get wallet(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddCPAndWalletCall__Outputs {
  _call: AddCPAndWalletCall;

  constructor(call: AddCPAndWalletCall) {
    this._call = call;
  }
}

export class AddCertifiedPartnerCall extends ethereum.Call {
  get inputs(): AddCertifiedPartnerCall__Inputs {
    return new AddCertifiedPartnerCall__Inputs(this);
  }

  get outputs(): AddCertifiedPartnerCall__Outputs {
    return new AddCertifiedPartnerCall__Outputs(this);
  }
}

export class AddCertifiedPartnerCall__Inputs {
  _call: AddCertifiedPartnerCall;

  constructor(call: AddCertifiedPartnerCall) {
    this._call = call;
  }

  get cp(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class AddCertifiedPartnerCall__Outputs {
  _call: AddCertifiedPartnerCall;

  constructor(call: AddCertifiedPartnerCall) {
    this._call = call;
  }
}

export class AddWalletsToCPCall extends ethereum.Call {
  get inputs(): AddWalletsToCPCall__Inputs {
    return new AddWalletsToCPCall__Inputs(this);
  }

  get outputs(): AddWalletsToCPCall__Outputs {
    return new AddWalletsToCPCall__Outputs(this);
  }
}

export class AddWalletsToCPCall__Inputs {
  _call: AddWalletsToCPCall;

  constructor(call: AddWalletsToCPCall) {
    this._call = call;
  }

  get cp(): string {
    return this._call.inputValues[0].value.toString();
  }

  get wallets(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }
}

export class AddWalletsToCPCall__Outputs {
  _call: AddWalletsToCPCall;

  constructor(call: AddWalletsToCPCall) {
    this._call = call;
  }
}

export class AddWhitelistedCall extends ethereum.Call {
  get inputs(): AddWhitelistedCall__Inputs {
    return new AddWhitelistedCall__Inputs(this);
  }

  get outputs(): AddWhitelistedCall__Outputs {
    return new AddWhitelistedCall__Outputs(this);
  }
}

export class AddWhitelistedCall__Inputs {
  _call: AddWhitelistedCall;

  constructor(call: AddWhitelistedCall) {
    this._call = call;
  }

  get cp(): string {
    return this._call.inputValues[0].value.toString();
  }

  get users(): Array<string> {
    return this._call.inputValues[1].value.toStringArray();
  }
}

export class AddWhitelistedCall__Outputs {
  _call: AddWhitelistedCall;

  constructor(call: AddWhitelistedCall) {
    this._call = call;
  }
}

export class ChangeCanDistributeRentCall extends ethereum.Call {
  get inputs(): ChangeCanDistributeRentCall__Inputs {
    return new ChangeCanDistributeRentCall__Inputs(this);
  }

  get outputs(): ChangeCanDistributeRentCall__Outputs {
    return new ChangeCanDistributeRentCall__Outputs(this);
  }
}

export class ChangeCanDistributeRentCall__Inputs {
  _call: ChangeCanDistributeRentCall;

  constructor(call: ChangeCanDistributeRentCall) {
    this._call = call;
  }

  get cp(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ChangeCanDistributeRentCall__Outputs {
  _call: ChangeCanDistributeRentCall;

  constructor(call: ChangeCanDistributeRentCall) {
    this._call = call;
  }
}

export class ChangeDataProxyCall extends ethereum.Call {
  get inputs(): ChangeDataProxyCall__Inputs {
    return new ChangeDataProxyCall__Inputs(this);
  }

  get outputs(): ChangeDataProxyCall__Outputs {
    return new ChangeDataProxyCall__Outputs(this);
  }
}

export class ChangeDataProxyCall__Inputs {
  _call: ChangeDataProxyCall;

  constructor(call: ChangeDataProxyCall) {
    this._call = call;
  }

  get dataProxy(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeDataProxyCall__Outputs {
  _call: ChangeDataProxyCall;

  constructor(call: ChangeDataProxyCall) {
    this._call = call;
  }
}

export class ChangeRolesAddressCall extends ethereum.Call {
  get inputs(): ChangeRolesAddressCall__Inputs {
    return new ChangeRolesAddressCall__Inputs(this);
  }

  get outputs(): ChangeRolesAddressCall__Outputs {
    return new ChangeRolesAddressCall__Outputs(this);
  }
}

export class ChangeRolesAddressCall__Inputs {
  _call: ChangeRolesAddressCall;

  constructor(call: ChangeRolesAddressCall) {
    this._call = call;
  }

  get newRoles(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeRolesAddressCall__Outputs {
  _call: ChangeRolesAddressCall;

  constructor(call: ChangeRolesAddressCall) {
    this._call = call;
  }
}

export class RemoveWalletsCall extends ethereum.Call {
  get inputs(): RemoveWalletsCall__Inputs {
    return new RemoveWalletsCall__Inputs(this);
  }

  get outputs(): RemoveWalletsCall__Outputs {
    return new RemoveWalletsCall__Outputs(this);
  }
}

export class RemoveWalletsCall__Inputs {
  _call: RemoveWalletsCall;

  constructor(call: RemoveWalletsCall) {
    this._call = call;
  }

  get wallets(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class RemoveWalletsCall__Outputs {
  _call: RemoveWalletsCall;

  constructor(call: RemoveWalletsCall) {
    this._call = call;
  }
}

export class RemoveWhitelistedCall extends ethereum.Call {
  get inputs(): RemoveWhitelistedCall__Inputs {
    return new RemoveWhitelistedCall__Inputs(this);
  }

  get outputs(): RemoveWhitelistedCall__Outputs {
    return new RemoveWhitelistedCall__Outputs(this);
  }
}

export class RemoveWhitelistedCall__Inputs {
  _call: RemoveWhitelistedCall;

  constructor(call: RemoveWhitelistedCall) {
    this._call = call;
  }

  get cp(): string {
    return this._call.inputValues[0].value.toString();
  }

  get users(): Array<string> {
    return this._call.inputValues[1].value.toStringArray();
  }
}

export class RemoveWhitelistedCall__Outputs {
  _call: RemoveWhitelistedCall;

  constructor(call: RemoveWhitelistedCall) {
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
