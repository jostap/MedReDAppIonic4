import { DateTime } from 'ionic-angular';

export interface Sample {
    sampleNumber: number;
    labelId: string;
    sampleType: string;
    aliquot: string;
    parentId: string;
    status: string;
    sampledDate: DateTime;
}