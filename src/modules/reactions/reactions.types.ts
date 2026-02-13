export type ReactionType = 'upvote' | 'downvote';

export interface ReactionCounts {
  upvote: number;
  downvote: number;
}

export interface ReactionResponse {
  reactions: ReactionCounts;
  total: number;
  userReaction: ReactionType | null;
}

export interface AddReactionRequest {
  reactionType: ReactionType;
}