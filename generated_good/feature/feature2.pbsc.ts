/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './feature2.pb';
import { GRPC_FEATURE2_SERVICE_CLIENT_SETTINGS } from './feature2.pbconf';
/**
 * Service client implementation for Feature.Feature2Service
 */
@Injectable({ providedIn: 'any' })
export class Feature2ServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /Feature.Feature2Service/List
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListResponse>>
     */
    list: (
      requestData: thisProto.ListRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/Feature.Feature2Service/List',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListRequest,
        responseClass: thisProto.ListResponse
      });
    },
    /**
     * Unary call: /Feature.Feature2Service/Get
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Get.GetResponse>>
     */
    get: (
      requestData: thisProto.Get.GetRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Get.GetResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/Feature.Feature2Service/Get',
        requestData,
        requestMetadata,
        requestClass: thisProto.Get.GetRequest,
        responseClass: thisProto.Get.GetResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_FEATURE2_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'Feature.Feature2Service',
      settings
    );
  }

  /**
   * Unary call @/Feature.Feature2Service/List
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListResponse>
   */
  list(
    requestData: thisProto.ListRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListResponse> {
    return this.$raw
      .list(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/Feature.Feature2Service/Get
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Get.GetResponse>
   */
  get(
    requestData: thisProto.Get.GetRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Get.GetResponse> {
    return this.$raw
      .get(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}