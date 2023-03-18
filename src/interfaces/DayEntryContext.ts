import { DayEntry } from "./DayEntry";

export interface DayEntryContext{
    dayEntries : DayEntry[],
    setDayEntries ?: (data : DayEntry[]) => void
}