import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
	mutation createBoard($createBoardInput: CreateBoardInput!) {
		createBoard(createBoardInput: $createBoardInput) {
			title
			writer
			_id
		}
	}
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file : Upload!) {
    uploadFile(file : $file) {
      url
    }
  }
`;

export const FETCH_BOARD = gql`
  query fetchBoard($boardId : ID!) {
    fetchBoard(boardId : $boardId) {
      writer
    }
  }
`;

