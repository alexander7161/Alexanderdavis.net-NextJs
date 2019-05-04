export const getLastUpdated = (lastUpdated: Date): string => {
    const timeDiff =
        Math.abs(new Date().getTime() - lastUpdated.getTime()) / 1000;
    if (timeDiff < 3600) {
        const diff = Math.ceil(timeDiff / 60);
        return getLastUpdatedString(diff, "minute");
    } else if (timeDiff < 86400) {
        const diff = Math.ceil(timeDiff / 3600);
        return getLastUpdatedString(diff, "hour");
    } else {
        const diff = Math.ceil(timeDiff / (3600 * 24));
        return getLastUpdatedString(diff, "day");
    }
};

export const getLastUpdatedString = (
    diff: number,
    timeType: string,
): string => {
    return `${diff} ${timeType}${diff === 1 ? "" : "s"} ago`;
};
