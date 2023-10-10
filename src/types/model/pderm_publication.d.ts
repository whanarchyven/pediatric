import * as mongoose from "mongoose";
declare const PdermPublicationSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    uuid: string;
    date: Date;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    uuid: string;
    date: Date;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
}>> & mongoose.FlatRecord<{
    uuid: string;
    date: Date;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const PdermPublicationCreateTDto: import("@sinclair/typebox").TObject<{
    uuid: import("@sinclair/typebox").TString;
    category: import("@sinclair/typebox").TString;
    date: import("@sinclair/typebox").TString;
    viewCount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    likedByUserUuids: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    fileUrl: import("@sinclair/typebox").TString;
    authors: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
}>;
export declare const PdermPublictationModel: mongoose.Model<{
    uuid: string;
    date: Date;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    uuid: string;
    date: Date;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
}> & {
    uuid: string;
    date: Date;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    uuid: string;
    date: Date;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    uuid: string;
    date: Date;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
}>> & mongoose.FlatRecord<{
    uuid: string;
    date: Date;
    category: string;
    viewCount: number;
    likedByUserUuids: string[];
    fileUrl: string;
    authors: string[];
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export type PdermPublication = mongoose.InferSchemaType<typeof PdermPublicationSchema>;
export {};
