import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Comment = {
  __typename?: 'Comment';
  _id: Scalars['String'];
  title: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPost: Posts;
  addUser: User;
  dummy?: Maybe<Scalars['Boolean']>;
  setDesc: User;
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


export type MutationSetDescArgs = {
  newDesc: Scalars['String'];
  userId: Scalars['String'];
};

export type Posts = {
  __typename?: 'Posts';
  _id: Scalars['String'];
  comments: Array<Maybe<Comment>>;
  createdByUserId: Scalars['String'];
  img: Scalars['String'];
  tags: Array<Maybe<Tag>>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  dummy?: Maybe<Scalars['Boolean']>;
  getUser: User;
  getUserPosts: Array<Posts>;
  posts: Array<Posts>;
  users: Array<User>;
};


export type QueryGetUserArgs = {
  userId: Scalars['String'];
};


export type QueryGetUserPostsArgs = {
  userId: Scalars['String'];
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
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  userName: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
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
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Comment: ResolverTypeWrapper<Comment>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
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
  Boolean: Scalars['Boolean'];
  Comment: Comment;
  Date: Scalars['Date'];
  Mutation: {};
  Posts: Posts;
  Query: {};
  String: Scalars['String'];
  Subscription: {};
  Tag: Tag;
  TagInput: TagInput;
  User: User;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addPost?: Resolver<ResolversTypes['Posts'], ParentType, ContextType, RequireFields<MutationAddPostArgs, 'img' | 'tags' | 'title' | 'userId'>>;
  addUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationAddUserArgs, 'email' | 'password' | 'userName'>>;
  dummy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  setDesc?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationSetDescArgs, 'newDesc' | 'userId'>>;
};

export type PostsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Posts'] = ResolversParentTypes['Posts']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  comments?: Resolver<Array<Maybe<ResolversTypes['Comment']>>, ParentType, ContextType>;
  createdByUserId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  img?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Array<Maybe<ResolversTypes['Tag']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  dummy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'userId'>>;
  getUserPosts?: Resolver<Array<ResolversTypes['Posts']>, ParentType, ContextType, RequireFields<QueryGetUserPostsArgs, 'userId'>>;
  posts?: Resolver<Array<ResolversTypes['Posts']>, ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  dummy?: SubscriptionResolver<Maybe<ResolversTypes['Boolean']>, "dummy", ParentType, ContextType>;
};

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  img?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Comment?: CommentResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Posts?: PostsResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

