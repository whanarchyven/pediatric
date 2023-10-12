import * as mongoose from "mongoose";
declare const PdermPostSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    title: string;
    imageUrl: string;
    description: string;
    contentMd: string;
    publishedByUserUuid?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    title: string;
    imageUrl: string;
    description: string;
    contentMd: string;
    publishedByUserUuid?: string | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    title: string;
    imageUrl: string;
    description: string;
    contentMd: string;
    publishedByUserUuid?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const PdermPostCreateOrUpdateTDto: import("@sinclair/typebox").TObject<{
    uuid: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    imageUrl: import("@sinclair/typebox").TString;
    title: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
    contentMd: import("@sinclair/typebox").TString;
}>;
export declare const PdermPostModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    title: string;
    imageUrl: string;
    description: string;
    contentMd: string;
    publishedByUserUuid?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    title: string;
    imageUrl: string;
    description: string;
    contentMd: string;
    publishedByUserUuid?: string | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    title: string;
    imageUrl: string;
    description: string;
    contentMd: string;
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
    title: string;
    imageUrl: string;
    description: string;
    contentMd: string;
    publishedByUserUuid?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    title: string;
    imageUrl: string;
    description: string;
    contentMd: string;
    publishedByUserUuid?: string | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    uuid: string;
    title: string;
    imageUrl: string;
    description: string;
    contentMd: string;
    publishedByUserUuid?: string | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export type PdermPost = mongoose.InferSchemaType<typeof PdermPostSchema>;
export {};
