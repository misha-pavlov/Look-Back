import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Activity = {
  __typename?: 'Activity';
  _id: Scalars['String'];
  actionUserId: Scalars['String'];
  commentText?: Maybe<Scalars['String']>;
  date: Scalars['String'];
  isRead?: Maybe<Scalars['Boolean']>;
  postId?: Maybe<Scalars['String']>;
  targetUserId: Scalars['String'];
};

export type Chats = {
  __typename?: 'Chats';
  _id: Scalars['String'];
  groupImage: Scalars['String'];
  lastMessage?: Maybe<Scalars['String']>;
  lastMessageTime?: Maybe<Scalars['String']>;
  members: Array<Scalars['String']>;
  readBy: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['String'];
  title: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addChat: Chats;
  addComment: Posts;
  addPost: Posts;
  addUser: User;
  addUserActivity: Activity;
  block: User;
  changePassword: User;
  changeUserMainFields: User;
  doFollow: User;
  doUnblocked: User;
  dummy?: Maybe<Scalars['Boolean']>;
  setDesc: User;
  setUnreadActivity: Activity;
};

export type MutationAddChatArgs = {
  groupImage: Scalars['String'];
  members: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type MutationAddCommentArgs = {
  postId: Scalars['String'];
  title: Scalars['String'];
  userId: Scalars['String'];
};

export type MutationAddPostArgs = {
  img: Scalars['String'];
  tags: Array<InputMaybe<TagInput>>;
  title: Scalars['String'];
  userId: Scalars['String'];
};

export type MutationAddUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type MutationAddUserActivityArgs = {
  actionUserId: Scalars['String'];
  commentText?: InputMaybe<Scalars['String']>;
  postId?: InputMaybe<Scalars['String']>;
  targetUserId: Scalars['String'];
};

export type MutationBlockArgs = {
  targetUserId: Scalars['String'];
  userId: Scalars['String'];
};

export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  userId: Scalars['String'];
};

export type MutationChangeUserMainFieldsArgs = {
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  img?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
  userName: Scalars['String'];
};

export type MutationDoFollowArgs = {
  followUserId: Scalars['String'];
  isFollow: Scalars['Boolean'];
  userId: Scalars['String'];
};

export type MutationDoUnblockedArgs = {
  targetUserId: Scalars['String'];
  userId: Scalars['String'];
};

export type MutationSetDescArgs = {
  newDesc: Scalars['String'];
  userId: Scalars['String'];
};

export type MutationSetUnreadActivityArgs = {
  activityId: Scalars['String'];
};

export type Posts = {
  __typename?: 'Posts';
  _id: Scalars['String'];
  comments: Array<Maybe<Comment>>;
  createdByUserId: Scalars['String'];
  img: Scalars['String'];
  tags: Array<Maybe<Tag>>;
  time?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  dummy?: Maybe<Scalars['Boolean']>;
  getAllPosts: Array<Posts>;
  getBlocked: Array<User>;
  getFollowers: Array<User>;
  getFollowing: Array<User>;
  getPost: Posts;
  getPostsByTag: Array<Posts>;
  getPostsByTitle: Array<Posts>;
  getPostsForUser: Array<Posts>;
  getUser: User;
  getUserActivities: Array<Activity>;
  getUserChats: Array<Chats>;
  getUserPosts: Array<Posts>;
  hasUnreadActivities: Scalars['Boolean'];
  posts: Array<Posts>;
  searchChat: Array<Chats>;
  searchUser: Array<User>;
  users: Array<User>;
};

export type QueryGetBlockedArgs = {
  userId: Scalars['String'];
};

export type QueryGetFollowersArgs = {
  userId: Scalars['String'];
};

export type QueryGetFollowingArgs = {
  userId: Scalars['String'];
};

export type QueryGetPostArgs = {
  postId: Scalars['String'];
};

export type QueryGetPostsByTagArgs = {
  tag: Scalars['String'];
};

export type QueryGetPostsByTitleArgs = {
  title: Scalars['String'];
};

export type QueryGetPostsForUserArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  userId: Scalars['String'];
};

export type QueryGetUserArgs = {
  userId: Scalars['String'];
};

export type QueryGetUserActivitiesArgs = {
  userId: Scalars['String'];
};

export type QueryGetUserChatsArgs = {
  userId: Scalars['String'];
};

export type QueryGetUserPostsArgs = {
  userId: Scalars['String'];
};

export type QueryHasUnreadActivitiesArgs = {
  userId: Scalars['String'];
};

export type QuerySearchChatArgs = {
  title: Scalars['String'];
};

export type QuerySearchUserArgs = {
  userName: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  dummy?: Maybe<Scalars['Boolean']>;
};

export type Tag = {
  __typename?: 'Tag';
  _id: Scalars['String'];
  title: Scalars['String'];
};

export type TagInput = {
  _id: Scalars['String'];
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  blocked?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  followers?: Maybe<Array<Scalars['String']>>;
  following?: Maybe<Array<Scalars['String']>>;
  img?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  userName: Scalars['String'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Activity: ResolverTypeWrapper<Activity>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Chats: ResolverTypeWrapper<Chats>;
  Comment: ResolverTypeWrapper<Comment>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Posts: ResolverTypeWrapper<Posts>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Tag: ResolverTypeWrapper<Tag>;
  TagInput: TagInput;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Activity: Activity;
  Boolean: Scalars['Boolean'];
  Chats: Chats;
  Comment: Comment;
  Date: Scalars['Date'];
  Int: Scalars['Int'];
  Mutation: {};
  Posts: Posts;
  Query: {};
  String: Scalars['String'];
  Subscription: {};
  Tag: Tag;
  TagInput: TagInput;
  User: User;
};

export type ActivityResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity'],
> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  actionUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  commentText?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isRead?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  postId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  targetUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChatsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Chats'] = ResolversParentTypes['Chats'],
> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  groupImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastMessageTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  members?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  readBy?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment'],
> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  addChat?: Resolver<
    ResolversTypes['Chats'],
    ParentType,
    ContextType,
    RequireFields<MutationAddChatArgs, 'groupImage' | 'members' | 'title'>
  >;
  addComment?: Resolver<
    ResolversTypes['Posts'],
    ParentType,
    ContextType,
    RequireFields<MutationAddCommentArgs, 'postId' | 'title' | 'userId'>
  >;
  addPost?: Resolver<
    ResolversTypes['Posts'],
    ParentType,
    ContextType,
    RequireFields<MutationAddPostArgs, 'img' | 'tags' | 'title' | 'userId'>
  >;
  addUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationAddUserArgs, 'email' | 'password' | 'userName'>
  >;
  addUserActivity?: Resolver<
    ResolversTypes['Activity'],
    ParentType,
    ContextType,
    RequireFields<MutationAddUserActivityArgs, 'actionUserId' | 'targetUserId'>
  >;
  block?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationBlockArgs, 'targetUserId' | 'userId'>
  >;
  changePassword?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationChangePasswordArgs, 'newPassword' | 'userId'>
  >;
  changeUserMainFields?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationChangeUserMainFieldsArgs, 'email' | 'userId' | 'userName'>
  >;
  doFollow?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationDoFollowArgs, 'followUserId' | 'isFollow' | 'userId'>
  >;
  doUnblocked?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationDoUnblockedArgs, 'targetUserId' | 'userId'>
  >;
  dummy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  setDesc?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationSetDescArgs, 'newDesc' | 'userId'>
  >;
  setUnreadActivity?: Resolver<
    ResolversTypes['Activity'],
    ParentType,
    ContextType,
    RequireFields<MutationSetUnreadActivityArgs, 'activityId'>
  >;
};

export type PostsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Posts'] = ResolversParentTypes['Posts'],
> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comments?: Resolver<Array<Maybe<ResolversTypes['Comment']>>, ParentType, ContextType>;
  createdByUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  img?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Array<Maybe<ResolversTypes['Tag']>>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  dummy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  getAllPosts?: Resolver<Array<ResolversTypes['Posts']>, ParentType, ContextType>;
  getBlocked?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetBlockedArgs, 'userId'>
  >;
  getFollowers?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetFollowersArgs, 'userId'>
  >;
  getFollowing?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetFollowingArgs, 'userId'>
  >;
  getPost?: Resolver<ResolversTypes['Posts'], ParentType, ContextType, RequireFields<QueryGetPostArgs, 'postId'>>;
  getPostsByTag?: Resolver<
    Array<ResolversTypes['Posts']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetPostsByTagArgs, 'tag'>
  >;
  getPostsByTitle?: Resolver<
    Array<ResolversTypes['Posts']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetPostsByTitleArgs, 'title'>
  >;
  getPostsForUser?: Resolver<
    Array<ResolversTypes['Posts']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetPostsForUserArgs, 'limit' | 'skip' | 'userId'>
  >;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'userId'>>;
  getUserActivities?: Resolver<
    Array<ResolversTypes['Activity']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserActivitiesArgs, 'userId'>
  >;
  getUserChats?: Resolver<
    Array<ResolversTypes['Chats']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserChatsArgs, 'userId'>
  >;
  getUserPosts?: Resolver<
    Array<ResolversTypes['Posts']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserPostsArgs, 'userId'>
  >;
  hasUnreadActivities?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<QueryHasUnreadActivitiesArgs, 'userId'>
  >;
  posts?: Resolver<Array<ResolversTypes['Posts']>, ParentType, ContextType>;
  searchChat?: Resolver<
    Array<ResolversTypes['Chats']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchChatArgs, 'title'>
  >;
  searchUser?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchUserArgs, 'userName'>
  >;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = {
  dummy?: SubscriptionResolver<Maybe<ResolversTypes['Boolean']>, 'dummy', ParentType, ContextType>;
};

export type TagResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag'],
> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blocked?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  followers?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  following?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  img?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Activity?: ActivityResolvers<ContextType>;
  Chats?: ChatsResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Posts?: PostsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
