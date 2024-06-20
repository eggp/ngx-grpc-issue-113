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
 * Message implementation for Feature.Feature2
 */
export class Feature2 implements GrpcMessage {
  static id = 'Feature.Feature2';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Feature2();
    Feature2.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Feature2) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Feature2,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    Feature2.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Feature2, _writer: BinaryWriter) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Feature2 to deeply clone from
   */
  constructor(_value?: RecursivePartial<Feature2.AsObject>) {
    _value = _value || {};
    Feature2.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Feature2.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Feature2.AsObject {
    return {};
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
  ): Feature2.AsProtobufJSON {
    return {};
  }
}
export module Feature2 {
  /**
   * Standard JavaScript object representation for Feature2
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for Feature2
   */
  export interface AsProtobufJSON {}

  /**
   * Message implementation for Feature.Feature2.Feature2Level2
   */
  export class Feature2Level2 implements GrpcMessage {
    static id = 'Feature.Feature2.Feature2Level2';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new Feature2Level2();
      Feature2Level2.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: Feature2Level2) {}

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: Feature2Level2,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          default:
            _reader.skipField();
        }
      }

      Feature2Level2.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: Feature2Level2,
      _writer: BinaryWriter
    ) {}

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of Feature2Level2 to deeply clone from
     */
    constructor(_value?: RecursivePartial<Feature2Level2.AsObject>) {
      _value = _value || {};
      Feature2Level2.refineValues(this);
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      Feature2Level2.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): Feature2Level2.AsObject {
      return {};
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
    ): Feature2Level2.AsProtobufJSON {
      return {};
    }
  }
  export module Feature2Level2 {
    /**
     * Standard JavaScript object representation for Feature2Level2
     */
    export interface AsObject {}

    /**
     * Protobuf JSON representation for Feature2Level2
     */
    export interface AsProtobufJSON {}

    /**
     * Message implementation for Feature.Feature2.Feature2Level2.SomeMessage
     */
    export class SomeMessage implements GrpcMessage {
      static id = 'Feature.Feature2.Feature2Level2.SomeMessage';

      /**
       * Deserialize binary data to message
       * @param instance message instance
       */
      static deserializeBinary(bytes: ByteSource) {
        const instance = new SomeMessage();
        SomeMessage.deserializeBinaryFromReader(
          instance,
          new BinaryReader(bytes)
        );
        return instance;
      }

      /**
       * Check all the properties and set default protobuf values if necessary
       * @param _instance message instance
       */
      static refineValues(_instance: SomeMessage) {
        _instance.some = _instance.some || '';
      }

      /**
       * Deserializes / reads binary message into message instance using provided binary reader
       * @param _instance message instance
       * @param _reader binary reader instance
       */
      static deserializeBinaryFromReader(
        _instance: SomeMessage,
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

        SomeMessage.refineValues(_instance);
      }

      /**
       * Serializes a message to binary format using provided binary reader
       * @param _instance message instance
       * @param _writer binary writer instance
       */
      static serializeBinaryToWriter(
        _instance: SomeMessage,
        _writer: BinaryWriter
      ) {
        if (_instance.some) {
          _writer.writeString(1, _instance.some);
        }
      }

      private _some: string;

      /**
       * Message constructor. Initializes the properties and applies default Protobuf values if necessary
       * @param _value initial values object or instance of SomeMessage to deeply clone from
       */
      constructor(_value?: RecursivePartial<SomeMessage.AsObject>) {
        _value = _value || {};
        this.some = _value.some;
        SomeMessage.refineValues(this);
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
        SomeMessage.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
      }

      /**
       * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
       */
      toObject(): SomeMessage.AsObject {
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
      ): SomeMessage.AsProtobufJSON {
        return {
          some: this.some
        };
      }
    }
    export module SomeMessage {
      /**
       * Standard JavaScript object representation for SomeMessage
       */
      export interface AsObject {
        some: string;
      }

      /**
       * Protobuf JSON representation for SomeMessage
       */
      export interface AsProtobufJSON {
        some: string;
      }
    }
  }
}

/**
 * Message implementation for Feature.SomeMessage2
 */
export class SomeMessage2 implements GrpcMessage {
  static id = 'Feature.SomeMessage2';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new SomeMessage2();
    SomeMessage2.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: SomeMessage2) {
    _instance.some = _instance.some || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: SomeMessage2,
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

    SomeMessage2.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: SomeMessage2,
    _writer: BinaryWriter
  ) {
    if (_instance.some) {
      _writer.writeString(1, _instance.some);
    }
  }

  private _some: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of SomeMessage2 to deeply clone from
   */
  constructor(_value?: RecursivePartial<SomeMessage2.AsObject>) {
    _value = _value || {};
    this.some = _value.some;
    SomeMessage2.refineValues(this);
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
    SomeMessage2.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): SomeMessage2.AsObject {
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
  ): SomeMessage2.AsProtobufJSON {
    return {
      some: this.some
    };
  }
}
export module SomeMessage2 {
  /**
   * Standard JavaScript object representation for SomeMessage2
   */
  export interface AsObject {
    some: string;
  }

  /**
   * Protobuf JSON representation for SomeMessage2
   */
  export interface AsProtobufJSON {
    some: string;
  }
}

/**
 * Message implementation for Feature.ListRequest
 */
export class ListRequest implements GrpcMessage {
  static id = 'Feature.ListRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListRequest();
    ListRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListRequest) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    ListRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListRequest,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListRequest.AsObject>) {
    _value = _value || {};
    ListRequest.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListRequest.AsObject {
    return {};
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
  ): ListRequest.AsProtobufJSON {
    return {};
  }
}
export module ListRequest {
  /**
   * Standard JavaScript object representation for ListRequest
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for ListRequest
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for Feature.ListResponse
 */
export class ListResponse implements GrpcMessage {
  static id = 'Feature.ListResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListResponse();
    ListResponse.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListResponse) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    ListResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListResponse,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListResponse.AsObject>) {
    _value = _value || {};
    ListResponse.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListResponse.AsObject {
    return {};
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
  ): ListResponse.AsProtobufJSON {
    return {};
  }
}
export module ListResponse {
  /**
   * Standard JavaScript object representation for ListResponse
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for ListResponse
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for Feature.Get
 */
export class Get implements GrpcMessage {
  static id = 'Feature.Get';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Get();
    Get.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Get) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Get, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    Get.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Get, _writer: BinaryWriter) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Get to deeply clone from
   */
  constructor(_value?: RecursivePartial<Get.AsObject>) {
    _value = _value || {};
    Get.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Get.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Get.AsObject {
    return {};
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
  ): Get.AsProtobufJSON {
    return {};
  }
}
export module Get {
  /**
   * Standard JavaScript object representation for Get
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for Get
   */
  export interface AsProtobufJSON {}

  /**
   * Message implementation for Feature.Get.GetRequest
   */
  export class GetRequest implements GrpcMessage {
    static id = 'Feature.Get.GetRequest';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new GetRequest();
      GetRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetRequest) {}

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: GetRequest,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          default:
            _reader.skipField();
        }
      }

      GetRequest.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: GetRequest,
      _writer: BinaryWriter
    ) {}

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetRequest to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetRequest.AsObject>) {
      _value = _value || {};
      GetRequest.refineValues(this);
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      GetRequest.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetRequest.AsObject {
      return {};
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
    ): GetRequest.AsProtobufJSON {
      return {};
    }
  }
  export module GetRequest {
    /**
     * Standard JavaScript object representation for GetRequest
     */
    export interface AsObject {}

    /**
     * Protobuf JSON representation for GetRequest
     */
    export interface AsProtobufJSON {}
  }

  /**
   * Message implementation for Feature.Get.GetResponse
   */
  export class GetResponse implements GrpcMessage {
    static id = 'Feature.Get.GetResponse';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new GetResponse();
      GetResponse.deserializeBinaryFromReader(
        instance,
        new BinaryReader(bytes)
      );
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: GetResponse) {}

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(
      _instance: GetResponse,
      _reader: BinaryReader
    ) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          default:
            _reader.skipField();
        }
      }

      GetResponse.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(
      _instance: GetResponse,
      _writer: BinaryWriter
    ) {}

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of GetResponse to deeply clone from
     */
    constructor(_value?: RecursivePartial<GetResponse.AsObject>) {
      _value = _value || {};
      GetResponse.refineValues(this);
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      GetResponse.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): GetResponse.AsObject {
      return {};
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
    ): GetResponse.AsProtobufJSON {
      return {};
    }
  }
  export module GetResponse {
    /**
     * Standard JavaScript object representation for GetResponse
     */
    export interface AsObject {}

    /**
     * Protobuf JSON representation for GetResponse
     */
    export interface AsProtobufJSON {}
  }
}
