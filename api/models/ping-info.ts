/* tslint:disable */
/* eslint-disable */
/**
 * Backend for Docker containers ping info service
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

 /**
 * 
 *
 * @export
 * @interface PingInfo
 */
export interface PingInfo {

    /**
     * @type {string}
     * @memberof PingInfo
     */
    containerIp?: string;

    /**
     * @type {Date}
     * @memberof PingInfo
     */
    timestamp?: Date;

    /**
     * @type {boolean}
     * @memberof PingInfo
     */
    success?: boolean;
}
