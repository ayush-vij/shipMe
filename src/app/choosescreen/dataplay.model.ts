export class PostData{
  constructor(
      public id: string,
      public name: string,
      public custype: string,
      public travelfrom: string,
      public travelcity: string,
      public travelto: string,
      public traveltocity: string,
      public booked: string,
      public email: string,
      public traveldate: Date,
      ){}
}