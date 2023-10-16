import * as mongoose from "mongoose";
import { Static } from '@sinclair/typebox';
export declare const PdermEventModel: mongoose.Model<{
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
}, {}, {}, {}, mongoose.Document<unknown, {}, {
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
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
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
}>> & mongoose.FlatRecord<{
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
    _id: mongoose.Types.ObjectId;
}>>;
export declare const PdermEventType: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    type: import("@sinclair/typebox").TString;
    date: import("@sinclair/typebox").TString;
    dateStart: import("@sinclair/typebox").TString;
    dateEnd: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TDate>;
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
        program: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
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
        }>>;
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
export type PdermEvent = Static<typeof PdermEventType>;
export declare const PdermEventJsonSchema: {
    $schema: string;
    type: string;
    title: string;
    properties: {
        id: {
            type: string[];
            title: string;
        };
        type: {
            type: string;
            title: string;
        };
        date: {
            type: string;
            title: string;
        };
        dateStart: {
            type: string;
            format: string;
            title: string;
        };
        dateEnd: {
            type: string[];
            format: string;
            title: string;
        };
        timePeriod: {
            type: string;
            title: string;
        };
        name: {
            type: string;
            title: string;
        };
        place: {
            type: string;
            title: string;
        };
        format: {
            type: string;
            title: string;
        };
        participants: {
            type: string;
            title: string;
        };
        layoutBg: {
            type: string;
            title: string;
        };
        avatar: {
            type: string;
            title: string;
        };
        announcement: {
            type: string;
            title: string;
        };
        description: {
            type: string[];
            title: string;
        };
        speakers: {
            type: string;
            title: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                        title: string;
                    };
                    post: {
                        type: string;
                        title: string;
                    };
                    contact: {
                        type: string;
                        title: string;
                    };
                    description: {
                        type: string;
                        title: string;
                    };
                    photo: {
                        type: string;
                        title: string;
                    };
                };
                required: string[];
            };
        };
        halls: {
            type: string;
            title: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                        title: string;
                    };
                    program: {
                        type: string;
                        title: string;
                        items: {
                            type: string;
                            properties: {
                                name: {
                                    type: string;
                                    title: string;
                                };
                                timePeriod: {
                                    type: string;
                                    title: string;
                                };
                                speaker: {
                                    type: string;
                                    title: string;
                                };
                                sponsor: {
                                    type: string;
                                    title: string;
                                };
                                substages: {
                                    type: string;
                                    title: string;
                                    items: {
                                        type: string;
                                        properties: {
                                            name: {
                                                type: string;
                                                title: string;
                                            };
                                            timePeriod: {
                                                type: string;
                                                title: string;
                                            };
                                            description: {
                                                type: string;
                                                title: string;
                                            };
                                            sponsor: {
                                                type: string;
                                                title: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                        };
                    };
                };
                required: string[];
            };
        };
        prices: {
            type: string;
            title: string;
            items: {
                type: string;
                properties: {
                    date: {
                        type: string;
                        title: string;
                    };
                    online: {
                        type: string;
                        title: string;
                    };
                    offline: {
                        type: string;
                        title: string;
                    };
                };
                required: string[];
            };
        };
    };
    required: string[];
};
