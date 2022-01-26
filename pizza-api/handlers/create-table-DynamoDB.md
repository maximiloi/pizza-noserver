aws dynamodb create-table --table-name pizza-orders --attribute-definitions AttributeName=orderId,AttributeType=S --key-schema AttributeName=orderId,KeyType=HASH --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 --region eu-west-3 --query TableDescription.TableArn --output text

> #### Ответ:
>
> arn:aws:dynamodb:eu-west-3:580230106972:table/pizza-orders
