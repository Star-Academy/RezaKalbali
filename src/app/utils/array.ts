export function shuffle(array: any[]): void {
    array.sort(() => Math.random() - 0.5);
}
