import { gql } from '@apollo/client';

export const REVIEWS_QUERY = gql`
  query Team(
    $limit: Int
    $after: ObjID
    $minSentences: Int
    $orderBy: ReviewOrderBy
  ) {
    reviews(
      limit: $limit
      after: $after
      minSentences: $minSentences
      orderBy: $orderBy
    ) {
      favorited
      stars
      text
      updatedAt
      id
    }
  }
`;
