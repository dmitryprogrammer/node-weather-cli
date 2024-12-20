import {Connector} from "./db/connector";

const connection = new Connector();

connection.getTaskToDb("Test");
connection.writeTaskToDb({
  title: "Test",
  id: 1,
});
