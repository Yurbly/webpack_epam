type IThrottled = (props: any) => any;

export const useThrottle = (throttled: IThrottled, timeout: number) => {
    return (props: any) => {
        let isAvailable = true;
        if (isAvailable) {
            isAvailable = false;
            throttled(props);
            setTimeout(() => {isAvailable = true}, timeout);
        }

    }
};
