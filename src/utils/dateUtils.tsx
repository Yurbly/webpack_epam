import {useMemo} from "react";

export const useMinutesToHHmm = (minutes: number, deps: Array<any>) => useMemo(() => {
    const runtimeNum = Number(minutes);
    const hours = Math.ceil(runtimeNum / 60);
    const minutesRest = runtimeNum % 60;
    return `${hours}h${minutesRest}m`;
}, deps);
