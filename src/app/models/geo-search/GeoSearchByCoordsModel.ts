'use strict';

export class Address{

  public road: string;
  public city: string;
  public county: string;
  public state: string;
  public postcode: string;
  public country: string;

}

export class GeoSearchByCoordsModel {

  public display_name: string;
  public address: Address;

}//GeoSearchByCoordsModel
