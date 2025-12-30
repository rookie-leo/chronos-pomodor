export function getNextCycle(currentCycle: number) {
    return currentCycle >= 1 && currentCycle < 8 ? currentCycle + 1 : 1
}