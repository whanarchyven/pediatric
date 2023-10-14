import mongoose from "mongoose";
export declare const devPdermUpsertEvents: () => Promise<((mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    id: string;
    date: string;
    format: string;
    name: string;
    dateStart: Date;
    timePeriod: string;
    place: string;
    participants: number;
    layoutBg: string;
    avatar: string;
    announcement: string;
    speakers: any[];
    halls: any[];
    prices: any[];
    description?: string | undefined;
    link?: string | undefined;
    dateEnd?: Date | undefined;
    onlinePrice?: number | undefined;
    offlinePrice?: number | undefined;
    isOnlyOnline?: boolean | undefined;
    isPassed?: boolean | undefined;
    isStream?: boolean | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    id: string;
    date: string;
    format: string;
    name: string;
    dateStart: Date;
    timePeriod: string;
    place: string;
    participants: number;
    layoutBg: string;
    avatar: string;
    announcement: string;
    speakers: any[];
    halls: any[];
    prices: any[];
    description?: string | undefined;
    link?: string | undefined;
    dateEnd?: Date | undefined;
    onlinePrice?: number | undefined;
    offlinePrice?: number | undefined;
    isOnlyOnline?: boolean | undefined;
    isPassed?: boolean | undefined;
    isStream?: boolean | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}) | null)[]>;
