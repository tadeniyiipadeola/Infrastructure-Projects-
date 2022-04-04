import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket, BucketEncryption } from 'aws-cdk-lib/aws-s3';
import * as cdk from '@aws-cdk/core';

export class SimpleApp1Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'MySimpleApp1Bucket',
    {
      encryption: BucketEncryption.S3_MANAGED,
    });
    new cdk.CfnOutput(this, 'MySimpleApp1BucketNameExport', 
    {
      value: bucket.bucketName,
      exportName: 'MySimpleApp1BucketName',
    });

  }
}
