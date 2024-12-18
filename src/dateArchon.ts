import { ARRAY_TIME_UNITS, GETTER_SETTER_METHODS, REGEX_PARSE, UNIT_DATE, UNIT_DAY, UNIT_HOUR, UNIT_MILLISECOND, UNIT_MINUTE, UNIT_MONTH, UNIT_SECOND, UNIT_YEAR } from "./constants"
import { DateInput } from "./nexusPylon"

export interface Extend {
  new (): Extend
}

export const isDateArchon = (value: unknown): value is DateArchon =>
  value instanceof DateArchon;

const isString = (value: unknown): value is string => value instanceof String;

const parseDate = (date: Exclude<DateInput, DateArchon>)=>{

  if (isString(date)) {
    const timeStamp = Date.parse(date);
    return new Date(timeStamp);
  }

  return new Date(date)
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
  
    private _timeZone: string
  
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

    get timeZone(){
        return this._timeZone;
    }

    private _init() {
        for (const unit of [
          UNIT_YEAR,
          UNIT_MONTH,
          UNIT_DATE,
          UNIT_HOUR,
          UNIT_MINUTE,
          UNIT_SECOND,
          UNIT_MILLISECOND,
          UNIT_DAY,
        ] as const) {
          this[`_${unit}`] = this._d[`get${GETTER_SETTER_METHODS[unit]}`]()
        }
      }

    constructor(dateInput: Exclude<DateInput, DateArchon>, timeZone: string = 'UTC'){
        super();
        this._d = parseDate(dateInput);
        this._timeZone = timeZone;
        this._init();
    }

  
  }
  