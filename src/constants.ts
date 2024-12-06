export const UNIT_YEAR = 'year'
export const UNIT_MONTH = 'month'
export const UNIT_QUARTER = 'quarter'
export const UNIT_WEEK = 'week'
export const UNIT_DAY = 'day'
export const UNIT_DATE = 'date'
export const UNIT_HOUR = 'hour'
export const UNIT_MINUTE = 'minute'
export const UNIT_SECOND = 'second'
export const UNIT_MILLISECOND = 'millisecond'

export const ARRAY_TIME_UNITS = [
    UNIT_YEAR,
    UNIT_MONTH,
    UNIT_DATE,
    UNIT_HOUR,
    UNIT_MINUTE,
    UNIT_SECOND,
    UNIT_MILLISECOND,
    UNIT_DAY,
  ] ;

export const GETTER_SETTER_METHODS = {
  [UNIT_YEAR]: 'FullYear',
  [UNIT_MONTH]: 'Month',
  [UNIT_DATE]: 'Date',
  [UNIT_DAY]: 'Day',
  [UNIT_HOUR]: 'Hours',
  [UNIT_MINUTE]: 'Minutes',
  [UNIT_SECOND]: 'Seconds',
  [UNIT_MILLISECOND]: 'Milliseconds',
} as const
