import * as mongoose from "mongoose";
declare const PdermEventSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    id: string;
    date: string;
    format: string;
    place: string;
    name: string;
    timePeriod: string;
    participants: number;
    layoutBg: string;
    avatar: string;
    announcement: string;
    speakers: any[];
    halls: any[];
    prices: any[];
    link?: string | undefined;
    description?: string | undefined;
    onlinePrice?: number | undefined;
    offlinePrice?: number | undefined;
    isOnlyOnline?: boolean | undefined;
    isPassed?: boolean | undefined;
    isStream?: boolean | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    id: string;
    date: string;
    format: string;
    place: string;
    name: string;
    timePeriod: string;
    participants: number;
    layoutBg: string;
    avatar: string;
    announcement: string;
    speakers: any[];
    halls: any[];
    prices: any[];
    link?: string | undefined;
    description?: string | undefined;
    onlinePrice?: number | undefined;
    offlinePrice?: number | undefined;
    isOnlyOnline?: boolean | undefined;
    isPassed?: boolean | undefined;
    isStream?: boolean | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    id: string;
    date: string;
    format: string;
    place: string;
    name: string;
    timePeriod: string;
    participants: number;
    layoutBg: string;
    avatar: string;
    announcement: string;
    speakers: any[];
    halls: any[];
    prices: any[];
    link?: string | undefined;
    description?: string | undefined;
    onlinePrice?: number | undefined;
    offlinePrice?: number | undefined;
    isOnlyOnline?: boolean | undefined;
    isPassed?: boolean | undefined;
    isStream?: boolean | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const PdermEventModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    id: string;
    date: string;
    format: string;
    place: string;
    name: string;
    timePeriod: string;
    participants: number;
    layoutBg: string;
    avatar: string;
    announcement: string;
    speakers: any[];
    halls: any[];
    prices: any[];
    link?: string | undefined;
    description?: string | undefined;
    onlinePrice?: number | undefined;
    offlinePrice?: number | undefined;
    isOnlyOnline?: boolean | undefined;
    isPassed?: boolean | undefined;
    isStream?: boolean | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    id: string;
    date: string;
    format: string;
    place: string;
    name: string;
    timePeriod: string;
    participants: number;
    layoutBg: string;
    avatar: string;
    announcement: string;
    speakers: any[];
    halls: any[];
    prices: any[];
    link?: string | undefined;
    description?: string | undefined;
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
    place: string;
    name: string;
    timePeriod: string;
    participants: number;
    layoutBg: string;
    avatar: string;
    announcement: string;
    speakers: any[];
    halls: any[];
    prices: any[];
    link?: string | undefined;
    description?: string | undefined;
    onlinePrice?: number | undefined;
    offlinePrice?: number | undefined;
    isOnlyOnline?: boolean | undefined;
    isPassed?: boolean | undefined;
    isStream?: boolean | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    id: string;
    date: string;
    format: string;
    place: string;
    name: string;
    timePeriod: string;
    participants: number;
    layoutBg: string;
    avatar: string;
    announcement: string;
    speakers: any[];
    halls: any[];
    prices: any[];
    link?: string | undefined;
    description?: string | undefined;
    onlinePrice?: number | undefined;
    offlinePrice?: number | undefined;
    isOnlyOnline?: boolean | undefined;
    isPassed?: boolean | undefined;
    isStream?: boolean | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    id: string;
    date: string;
    format: string;
    place: string;
    name: string;
    timePeriod: string;
    participants: number;
    layoutBg: string;
    avatar: string;
    announcement: string;
    speakers: any[];
    halls: any[];
    prices: any[];
    link?: string | undefined;
    description?: string | undefined;
    onlinePrice?: number | undefined;
    offlinePrice?: number | undefined;
    isOnlyOnline?: boolean | undefined;
    isPassed?: boolean | undefined;
    isStream?: boolean | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    id: string;
    date: string;
    format: string;
    place: string;
    name: string;
    timePeriod: string;
    participants: number;
    layoutBg: string;
    avatar: string;
    announcement: string;
    speakers: any[];
    halls: any[];
    prices: any[];
    link?: string | undefined;
    description?: string | undefined;
    onlinePrice?: number | undefined;
    offlinePrice?: number | undefined;
    isOnlyOnline?: boolean | undefined;
    isPassed?: boolean | undefined;
    isStream?: boolean | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export type PdermEvent = mongoose.InferSchemaType<typeof PdermEventSchema>;
export declare const PdermEventType: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    type: import("@sinclair/typebox").TString;
    date: import("@sinclair/typebox").TString;
    timePeriod: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    place: import("@sinclair/typebox").TString;
    format: import("@sinclair/typebox").TString;
    participants: import("@sinclair/typebox").TNumber;
    layoutBg: import("@sinclair/typebox").TString;
    avatar: import("@sinclair/typebox").TString;
    announcement: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    speakers: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        post: import("@sinclair/typebox").TString;
        contact: import("@sinclair/typebox").TString;
        description: import("@sinclair/typebox").TString;
        photo: import("@sinclair/typebox").TString;
    }>>;
    halls: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        name: import("@sinclair/typebox").TString;
        program: import("@sinclair/typebox").TObject<{
            name: import("@sinclair/typebox").TString;
            timePeriod: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            speaker: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            sponsor: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            substages: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                name: import("@sinclair/typebox").TString;
                timePeriod: import("@sinclair/typebox").TString;
                description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                sponsor: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            }>>>;
        }>;
    }>>;
    onlinePrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    offlinePrice: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    prices: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        date: import("@sinclair/typebox").TString;
        online: import("@sinclair/typebox").TNumber;
        offline: import("@sinclair/typebox").TNumber;
    }>>>;
    isOnlyOnline: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    link: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    isPassed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    isStream: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export {};
