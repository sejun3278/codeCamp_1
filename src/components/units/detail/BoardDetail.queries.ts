import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId : ID!) {
    fetchBoard(boardId : $boardId) {
      writer
      contents
      _id
      title
      youtubeUrl
      likeCount
      dislikeCount
      createdAt
      images
    }
  }
`;

export const LIKE_BOARD = gql`
  mutation likeBoard($boardId : ID!) {
    likeBoard(boardId : $boardId)
  }
`;

export const DISLIKE_BOARD = gql`
  mutation dislikeBoard($boardId : ID!) {
    dislikeBoard(boardId : $boardId)
  }
`;

// export const FETCH_BOARD_COMMENTS = gql`
//   query fetchBoardComments($boardId : ID!) {
//     fetchBoardComments(boardId : $boardId) {
//       _id
//       writer
//       contents
//       rating
//       user
//       createdAt
//     }
//   }
// `