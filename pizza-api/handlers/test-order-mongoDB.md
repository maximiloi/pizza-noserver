curl -i \
-d '{"pizzaId":1, "address":"221B Baker Street"}' \
-H "Content-Type: application/json" \
-X POST https://9gaxz5ovp9.execute-api.eu-west-3.amazonaws.com/latest/orders

---

curl -i \
-H "Content-Type: application/json" \
-X POST \
-d '{"pizzaId":4,"address":"Уточкина д2 к1"}' \
https://9gaxz5ovp9.execute-api.eu-west-3.amazonaws.com/latest/orders

---

curl -i \
-H "Content-Type: application/json" \
-X POST \
-d '{"pizza":4,"address":"Уточкина д2 к1"}' \
https://9gaxz5ovp9.execute-api.eu-west-3.amazonaws.com/latest/orders

---

curl -i \
-d '{"pizza":5, "address":"221B Baker Street"}' \
-H "Content-Type: application/json" \
-X POST https://9gaxz5ovp9.execute-api.eu-west-3.amazonaws.com/latest/orders

---

curl -i \
-H "Content-Type: application/json" \
https://9gaxz5ovp9.execute-api.eu-west-3.amazonaws.com/latest/orders

curl \
-H "Content-Type: application/json" \
-X GET https://9gaxz5ovp9.execute-api.eu-west-3.amazonaws.com/latest/orders \
| jq

---

aws dynamodb scan \
--table-name pizza-orders \
--region eu-west-3 \
--output json
