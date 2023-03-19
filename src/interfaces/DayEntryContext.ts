import { DayEntry } from "./DayEntry";

export interface DayEntryContext{
    dayEntries : DayEntry[],
    setDayEntries ?: (data : DayEntry[]) => void // do i want this to accept an array?
}