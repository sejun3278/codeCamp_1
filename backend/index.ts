import { createConnection } from "typeorm";
import { ApolloServer, gql, IResolvers, ApolloError } from "apollo-server";

// Backend API 서버 셋팅
const typeDefs = gql`
  scalar Date

  type result {
    message : String
  }

  type data {
    writer : String
    age : Int
  }
`;

const resolvers: IResolvers = {
  Query: {},
  Mutation: {},
};

const server = new ApolloServer({ typeDefs, resolvers });
// 데이터베이스 연결 및 셋팅
createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres",
  port: 5011,
  host: "34.64.71.71",
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
  synchronize: true,
}).then(() => {
  console.log("접속완료!!");
  server.listen({ port: 4000 });
});