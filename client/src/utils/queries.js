import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allProfiles {
    profiles {
      _id
      name
      book_saved
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleProfile($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      book_saved
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      book_saved
    }
  }
`;
