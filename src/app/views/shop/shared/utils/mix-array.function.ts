export const mixArray = <T>(array: T[]): T[] => [...array.sort(() => Math.random() - 0.5)];
