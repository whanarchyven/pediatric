import * as mongoose from "mongoose";
export declare const PdermRequestModel: mongoose.Model<{
    email: string;
    invoice_id: number;
    out_sum: number;
    status?: string | undefined;
    meta?: {
        query?: string | undefined;
        participationType?: string | undefined;
        phone?: string | undefined;
    } | undefined;
    _id?: mongoose.Types.ObjectId | undefined;
    event?: string | undefined;
    customer?: string | undefined;
    transactions?: {
        initial?: {
            amountRub: number;
        } | undefined;
    } | undefined;
    after_reg_email_subject?: string | undefined;
    after_reg_email_body?: string | undefined;
    after_reg_email_placeholders?: {
        name?: string | undefined;
        participationType?: string | undefined;
        event_name?: string | undefined;
        event_id?: string | undefined;
    } | undefined;
    after_pay_email_subject?: string | undefined;
    after_pay_email_body?: string | undefined;
    after_pay_email_placeholders?: {
        name?: string | undefined;
        participationType?: string | undefined;
        event_name?: string | undefined;
        event_id?: string | undefined;
    } | undefined;
    user_email?: string | undefined;
    register_timestamp?: Date | undefined;
    after_pay_email_text?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    email: string;
    invoice_id: number;
    out_sum: number;
    status?: string | undefined;
    meta?: {
        query?: string | undefined;
        participationType?: string | undefined;
        phone?: string | undefined;
    } | undefined;
    _id?: mongoose.Types.ObjectId | undefined;
    event?: string | undefined;
    customer?: string | undefined;
    transactions?: {
        initial?: {
            amountRub: number;
        } | undefined;
    } | undefined;
    after_reg_email_subject?: string | undefined;
    after_reg_email_body?: string | undefined;
    after_reg_email_placeholders?: {
        name?: string | undefined;
        participationType?: string | undefined;
        event_name?: string | undefined;
        event_id?: string | undefined;
    } | undefined;
    after_pay_email_subject?: string | undefined;
    after_pay_email_body?: string | undefined;
    after_pay_email_placeholders?: {
        name?: string | undefined;
        participationType?: string | undefined;
        event_name?: string | undefined;
        event_id?: string | undefined;
    } | undefined;
    user_email?: string | undefined;
    register_timestamp?: Date | undefined;
    after_pay_email_text?: string | undefined;
}> & {
    email: string;
    invoice_id: number;
    out_sum: number;
    status?: string | undefined;
    meta?: {
        query?: string | undefined;
        participationType?: string | undefined;
        phone?: string | undefined;
    } | undefined;
    _id?: mongoose.Types.ObjectId | undefined;
    event?: string | undefined;
    customer?: string | undefined;
    transactions?: {
        initial?: {
            amountRub: number;
        } | undefined;
    } | undefined;
    after_reg_email_subject?: string | undefined;
    after_reg_email_body?: string | undefined;
    after_reg_email_placeholders?: {
        name?: string | undefined;
        participationType?: string | undefined;
        event_name?: string | undefined;
        event_id?: string | undefined;
    } | undefined;
    after_pay_email_subject?: string | undefined;
    after_pay_email_body?: string | undefined;
    after_pay_email_placeholders?: {
        name?: string | undefined;
        participationType?: string | undefined;
        event_name?: string | undefined;
        event_id?: string | undefined;
    } | undefined;
    user_email?: string | undefined;
    register_timestamp?: Date | undefined;
    after_pay_email_text?: string | undefined;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    email: string;
    invoice_id: number;
    out_sum: number;
    status?: string | undefined;
    meta?: {
        query?: string | undefined;
        participationType?: string | undefined;
        phone?: string | undefined;
    } | undefined;
    _id?: mongoose.Types.ObjectId | undefined;
    event?: string | undefined;
    customer?: string | undefined;
    transactions?: {
        initial?: {
            amountRub: number;
        } | undefined;
    } | undefined;
    after_reg_email_subject?: string | undefined;
    after_reg_email_body?: string | undefined;
    after_reg_email_placeholders?: {
        name?: string | undefined;
        participationType?: string | undefined;
        event_name?: string | undefined;
        event_id?: string | undefined;
    } | undefined;
    after_pay_email_subject?: string | undefined;
    after_pay_email_body?: string | undefined;
    after_pay_email_placeholders?: {
        name?: string | undefined;
        participationType?: string | undefined;
        event_name?: string | undefined;
        event_id?: string | undefined;
    } | undefined;
    user_email?: string | undefined;
    register_timestamp?: Date | undefined;
    after_pay_email_text?: string | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    email: string;
    invoice_id: number;
    out_sum: number;
    status?: string | undefined;
    meta?: {
        query?: string | undefined;
        participationType?: string | undefined;
        phone?: string | undefined;
    } | undefined;
    _id?: mongoose.Types.ObjectId | undefined;
    event?: string | undefined;
    customer?: string | undefined;
    transactions?: {
        initial?: {
            amountRub: number;
        } | undefined;
    } | undefined;
    after_reg_email_subject?: string | undefined;
    after_reg_email_body?: string | undefined;
    after_reg_email_placeholders?: {
        name?: string | undefined;
        participationType?: string | undefined;
        event_name?: string | undefined;
        event_id?: string | undefined;
    } | undefined;
    after_pay_email_subject?: string | undefined;
    after_pay_email_body?: string | undefined;
    after_pay_email_placeholders?: {
        name?: string | undefined;
        participationType?: string | undefined;
        event_name?: string | undefined;
        event_id?: string | undefined;
    } | undefined;
    user_email?: string | undefined;
    register_timestamp?: Date | undefined;
    after_pay_email_text?: string | undefined;
}>> & mongoose.FlatRecord<{
    email: string;
    invoice_id: number;
    out_sum: number;
    status?: string | undefined;
    meta?: {
        query?: string | undefined;
        participationType?: string | undefined;
        phone?: string | undefined;
    } | undefined;
    _id?: mongoose.Types.ObjectId | undefined;
    event?: string | undefined;
    customer?: string | undefined;
    transactions?: {
        initial?: {
            amountRub: number;
        } | undefined;
    } | undefined;
    after_reg_email_subject?: string | undefined;
    after_reg_email_body?: string | undefined;
    after_reg_email_placeholders?: {
        name?: string | undefined;
        participationType?: string | undefined;
        event_name?: string | undefined;
        event_id?: string | undefined;
    } | undefined;
    after_pay_email_subject?: string | undefined;
    after_pay_email_body?: string | undefined;
    after_pay_email_placeholders?: {
        name?: string | undefined;
        participationType?: string | undefined;
        event_name?: string | undefined;
        event_id?: string | undefined;
    } | undefined;
    user_email?: string | undefined;
    register_timestamp?: Date | undefined;
    after_pay_email_text?: string | undefined;
}> & Required<{
    _id: mongoose.Types.ObjectId;
}>>>;
export type PdermRequest = mongoose.InferSchemaType<typeof PdermRequestModel>;
