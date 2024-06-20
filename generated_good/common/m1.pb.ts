/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for Common.CommonM1
 */
export class CommonM1 implements GrpcMessage {
  static id = 'Common.CommonM1';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CommonM1();
    CommonM1.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CommonM1) {
    _instance.some = _instance.some || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CommonM1,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.some = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CommonM1.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: CommonM1, _writer: BinaryWriter) {
    if (_instance.some) {
      _writer.writeString(1, _instance.some);
    }
  }

  private _some: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CommonM1 to deeply clone from
   */
  constructor(_value?: RecursivePartial<CommonM1.AsObject>) {
    _value = _value || {};
    this.some = _value.some;
    CommonM1.refineValues(this);
  }
  get some(): string {
    return this._some;
  }
  set some(value: string) {
    this._some = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CommonM1.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CommonM1.AsObject {
    return {
      some: this.some
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CommonM1.AsProtobufJSON {
    return {
      some: this.some
    };
  }
}
export module CommonM1 {
  /**
   * Standard JavaScript object representation for CommonM1
   */
  export interface AsObject {
    some: string;
  }

  /**
   * Protobuf JSON representation for CommonM1
   */
  export interface AsProtobufJSON {
    some: string;
  }
}
