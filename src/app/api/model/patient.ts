/**
 * medical-appointment-scheduling-server
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface Patient {
    givenName: string;

    surname: string;

    gender: string;

    streetAddress?: string;

    city?: string;

    country?: string;

    zipCode?: string;

    email?: string;

    phone?: string;

    dateOfBirth: Date;

    svn: number;

    id?: number;

}
