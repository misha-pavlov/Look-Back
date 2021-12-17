import graphql from 'graphql-tag';

export const baseSchema = graphql`
  type Query {
    dummy: Boolean
  }
  type Mutation {
    dummy: Boolean
  }
  type Subscription {
    dummy: Boolean
  }
  scalar Date
`;