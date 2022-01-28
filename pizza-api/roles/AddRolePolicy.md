aws iam put-role-policy \
--role-name pizza-api-executor \
--policy-name PizzaApiDynamoDB \
--policy-document file://./roles/dynamodb.json
