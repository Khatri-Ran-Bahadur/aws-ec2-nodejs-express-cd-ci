# Node Js App deploy in ec2 instance of aws with github pipeline with CD/CI

## Steps

```
1. Goto Aws IAM and goto Roles and
   1. create role choose ec2 and choose AmazonEC2RoleforAwsCodeDeploy after 2next name of role and create
   2. create role choose codeDeploy and
```

```
2. Goto EC2 instances
   1. create instance and choose operating system Amazon Linux 2 AMI (HVM), SSD Volume Type
   2. choose role codedeployrole add in user data ec2 script
        #!/bin/bash
        sudo yum -y update
        sudo yum -y install ruby
        sudo yum -y install wget
        cd /home/ec2-user
        wget https://aws-codedeploy-us-east-1.s3.amazonaws.com/latest/install
        sudo chmod +x ./install
        sudo ./install auto
   3.
```
