import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Bucket, BucketEncryption } from 'aws-cdk-lib/aws-s3';

export class SimpleApp1Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'MySimpleApp1Bucket',{
      encryption: BucketEncryption.S3_MANAGED,
    });
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'SimpleApp1Queue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
