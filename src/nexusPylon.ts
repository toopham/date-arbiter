import { AM, PM } from "./constants";
import { DateArchon, isDateArchon } from "./dateArchon"


export type DateInput = string | number | DateArchon;

export interface DateObject {
    year: number;
    month: number;
    day: number;
    hour?: number;
    minute?: number;
    second?: number;
    timeZone?: string;
}

export interface DateObjectStrict {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  timeZone: string;
}

const sanitize =(dateObj: DateObject): DateObjectStrict=>{
  dateObj.second = dateObj.second ?? 0;
  dateObj.minute = dateObj.minute ?? 0;
  dateObj.hour = dateObj.hour ?? 0;

  const parsedDate = {...dateObj};
  parsedDate.second = parsedDate.second ?? 0;
  parsedDate.minute = parsedDate.minute ?? 0;
  parsedDate.hour = parsedDate.hour ?? 0;

  parsedDate.second = dateObj.second%60;
  parsedDate.minute = Math.floor(dateObj.second/60) + parsedDate.minute;

  parsedDate.hour = Math.floor(parsedDate.minute/60) + parsedDate.hour;
  parsedDate.minute = parsedDate.minute%60;

  parsedDate.hour = parsedDate.hour%24;
  parsedDate.timeZone = parsedDate.timeZone ?? 'UTC';
  return parsedDate as DateObjectStrict;
}

const forgeDateString = (dateObj: DateObject)=>{
  const date = sanitize(dateObj);
  let hour12 = date.hour%12;
  if(hour12===0){
    hour12 = 12;
  }

  const meriDiem = date.hour >=12? AM: PM;
  const minute = date.minute < 10? `0${date.minute}`: `${date.minute}`;
  const seconds = date.second < 10? `0${date.second}`: `${date.second}`;

  return `${date.year}-${date.month}-${date.day} ${hour12}:${minute}:${seconds} ${date.timeZone}`;
}

export class Pylon {


    static warp = (dateInput: DateInput, timeZone: string = 'UTC'): DateArchon =>{
        if (isDateArchon(dateInput)) return dateInput;

        return new DateArchon(dateInput, timeZone);
    }

    static forge = (dateObj: DateObject): DateArchon =>{
      const dateString = forgeDateString(dateObj);
      return new DateArchon(dateString);
    }
}

