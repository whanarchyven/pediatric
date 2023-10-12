import * as mongoose from "mongoose";
declare const PdermPublicationSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    date: Date;
    title: string;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    savedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
    awards: any[];
    publishedByUserUuid?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    date: Date;
    title: string;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    savedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
    awards: any[];
    publishedByUserUuid?: string | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    date: Date;
    title: string;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    savedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
    awards: any[];
    publishedByUserUuid?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const PdermPublicationCreateTDto: import("@sinclair/typebox").TObject<{
    uuid: import("@sinclair/typebox").TString;
    category: import("@sinclair/typebox").TString;
    title: import("@sinclair/typebox").TString;
    date: import("@sinclair/typebox").TString;
    fileUrl: import("@sinclair/typebox").TString;
    authors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    awards: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        title: import("@sinclair/typebox").TString;
        imageUrl: import("@sinclair/typebox").TString;
    }>>>;
}>;
export declare const PdermPublicationModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    date: Date;
    title: string;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    savedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
    awards: any[];
    publishedByUserUuid?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    date: Date;
    title: string;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    savedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
    awards: any[];
    publishedByUserUuid?: string | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    date: Date;
    title: string;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    savedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
    awards: any[];
    publishedByUserUuid?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    date: Date;
    title: string;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    savedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
    awards: any[];
    publishedByUserUuid?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    date: Date;
    title: string;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    savedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
    awards: any[];
    publishedByUserUuid?: string | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    date: Date;
    title: string;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    savedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
    awards: any[];
    publishedByUserUuid?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export type PdermPublication = mongoose.InferSchemaType<typeof PdermPublicationSchema>;
export {};
