export declare const pre_ext_s3_$metaforest_mcs_pderm: {
    endpoint: string;
    accessKeyId: string;
    secretKey: string;
    bucketName: string;
    region: string;
};
export declare const uploadToS3: (params: {
    dataBuffer: any;
    key: string;
}) => Promise<{
    url: string;
}>;
