export interface Disk {
    path: string;
    label: string;
    freeSpace: number; // bytes.
    totalSpace: number; // bytes.
    usedSpace?: number; // bytes.
}
