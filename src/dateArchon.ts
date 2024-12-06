import { ARRAY_TIME_UNITS, GETTER_SETTER_METHODS } from "./constants"

export interface Extend {
  new (): Extend
}

export class DateArchon extends ( class {} as Extend) {
    /** Date object */
    private _d: Date = new Date()

    private _year!: number
    private _month!: number
    private _date!: number
    private _hour!: number
    private _minute!: number
    private _second!: number
    private _millisecond!: number
    /** Day of week */
    private _weekday!: number
  
    private _locale: string
  
    get year(){
        return this._year;
    }
    get month(){
        return this._month;
    }
    
    get date(){
        return this._date;
    }
    
    get hour(){
        return this._hour;
    }
    
    get minute(){
        return this._minute;
    }
    
    get second(){
        return this._second;
    }
    get millisecond(){
        return this._millisecond;
    }
    
    get weekday(){
        return this._weekday;
    }
  
  }
  