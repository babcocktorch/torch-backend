
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model CommunitySubmission
 * 
 */
export type CommunitySubmission = $Result.DefaultSelection<Prisma.$CommunitySubmissionPayload>
/**
 * Model Community
 * 
 */
export type Community = $Result.DefaultSelection<Prisma.$CommunityPayload>
/**
 * Model CommunityMember
 * 
 */
export type CommunityMember = $Result.DefaultSelection<Prisma.$CommunityMemberPayload>
/**
 * Model CommunityOtp
 * 
 */
export type CommunityOtp = $Result.DefaultSelection<Prisma.$CommunityOtpPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SubmissionStatus: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected'
};

export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus]

}

export type SubmissionStatus = $Enums.SubmissionStatus

export const SubmissionStatus: typeof $Enums.SubmissionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communitySubmission`: Exposes CRUD operations for the **CommunitySubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunitySubmissions
    * const communitySubmissions = await prisma.communitySubmission.findMany()
    * ```
    */
  get communitySubmission(): Prisma.CommunitySubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communityMember`: Exposes CRUD operations for the **CommunityMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityMembers
    * const communityMembers = await prisma.communityMember.findMany()
    * ```
    */
  get communityMember(): Prisma.CommunityMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communityOtp`: Exposes CRUD operations for the **CommunityOtp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityOtps
    * const communityOtps = await prisma.communityOtp.findMany()
    * ```
    */
  get communityOtp(): Prisma.CommunityOtpDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    Article: 'Article',
    CommunitySubmission: 'CommunitySubmission',
    Community: 'Community',
    CommunityMember: 'CommunityMember',
    CommunityOtp: 'CommunityOtp'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "article" | "communitySubmission" | "community" | "communityMember" | "communityOtp"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      CommunitySubmission: {
        payload: Prisma.$CommunitySubmissionPayload<ExtArgs>
        fields: Prisma.CommunitySubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunitySubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunitySubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySubmissionPayload>
          }
          findFirst: {
            args: Prisma.CommunitySubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunitySubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySubmissionPayload>
          }
          findMany: {
            args: Prisma.CommunitySubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySubmissionPayload>[]
          }
          create: {
            args: Prisma.CommunitySubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySubmissionPayload>
          }
          createMany: {
            args: Prisma.CommunitySubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunitySubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySubmissionPayload>[]
          }
          delete: {
            args: Prisma.CommunitySubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySubmissionPayload>
          }
          update: {
            args: Prisma.CommunitySubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySubmissionPayload>
          }
          deleteMany: {
            args: Prisma.CommunitySubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunitySubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunitySubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySubmissionPayload>[]
          }
          upsert: {
            args: Prisma.CommunitySubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunitySubmissionPayload>
          }
          aggregate: {
            args: Prisma.CommunitySubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunitySubmission>
          }
          groupBy: {
            args: Prisma.CommunitySubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunitySubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunitySubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<CommunitySubmissionCountAggregateOutputType> | number
          }
        }
      }
      Community: {
        payload: Prisma.$CommunityPayload<ExtArgs>
        fields: Prisma.CommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          upsert: {
            args: Prisma.CommunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          aggregate: {
            args: Prisma.CommunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunity>
          }
          groupBy: {
            args: Prisma.CommunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityCountAggregateOutputType> | number
          }
        }
      }
      CommunityMember: {
        payload: Prisma.$CommunityMemberPayload<ExtArgs>
        fields: Prisma.CommunityMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          findFirst: {
            args: Prisma.CommunityMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          findMany: {
            args: Prisma.CommunityMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>[]
          }
          create: {
            args: Prisma.CommunityMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          createMany: {
            args: Prisma.CommunityMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>[]
          }
          delete: {
            args: Prisma.CommunityMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          update: {
            args: Prisma.CommunityMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          deleteMany: {
            args: Prisma.CommunityMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>[]
          }
          upsert: {
            args: Prisma.CommunityMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityMemberPayload>
          }
          aggregate: {
            args: Prisma.CommunityMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunityMember>
          }
          groupBy: {
            args: Prisma.CommunityMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityMemberCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityMemberCountAggregateOutputType> | number
          }
        }
      }
      CommunityOtp: {
        payload: Prisma.$CommunityOtpPayload<ExtArgs>
        fields: Prisma.CommunityOtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityOtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityOtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityOtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityOtpPayload>
          }
          findFirst: {
            args: Prisma.CommunityOtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityOtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityOtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityOtpPayload>
          }
          findMany: {
            args: Prisma.CommunityOtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityOtpPayload>[]
          }
          create: {
            args: Prisma.CommunityOtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityOtpPayload>
          }
          createMany: {
            args: Prisma.CommunityOtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityOtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityOtpPayload>[]
          }
          delete: {
            args: Prisma.CommunityOtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityOtpPayload>
          }
          update: {
            args: Prisma.CommunityOtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityOtpPayload>
          }
          deleteMany: {
            args: Prisma.CommunityOtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityOtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityOtpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityOtpPayload>[]
          }
          upsert: {
            args: Prisma.CommunityOtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityOtpPayload>
          }
          aggregate: {
            args: Prisma.CommunityOtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunityOtp>
          }
          groupBy: {
            args: Prisma.CommunityOtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityOtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityOtpCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityOtpCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    article?: ArticleOmit
    communitySubmission?: CommunitySubmissionOmit
    community?: CommunityOmit
    communityMember?: CommunityMemberOmit
    communityOtp?: CommunityOtpOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CommunityCountOutputType
   */

  export type CommunityCountOutputType = {
    members: number
  }

  export type CommunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | CommunityCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityCountOutputType
     */
    select?: CommunityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityMemberWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    name: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    name: string | null
    passwordHash: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      passwordHash: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly passwordHash: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleMinAggregateOutputType = {
    id: string | null
    sanityId: string | null
    type: string | null
    title: string | null
    slug: string | null
    author: string | null
    isPost: boolean | null
    visibility: string | null
    isEditorsPick: boolean | null
    lastSyncedAt: Date | null
    createdAt: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: string | null
    sanityId: string | null
    type: string | null
    title: string | null
    slug: string | null
    author: string | null
    isPost: boolean | null
    visibility: string | null
    isEditorsPick: boolean | null
    lastSyncedAt: Date | null
    createdAt: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    sanityId: number
    type: number
    title: number
    slug: number
    author: number
    isPost: number
    visibility: number
    isEditorsPick: number
    lastSyncedAt: number
    createdAt: number
    _all: number
  }


  export type ArticleMinAggregateInputType = {
    id?: true
    sanityId?: true
    type?: true
    title?: true
    slug?: true
    author?: true
    isPost?: true
    visibility?: true
    isEditorsPick?: true
    lastSyncedAt?: true
    createdAt?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    sanityId?: true
    type?: true
    title?: true
    slug?: true
    author?: true
    isPost?: true
    visibility?: true
    isEditorsPick?: true
    lastSyncedAt?: true
    createdAt?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    sanityId?: true
    type?: true
    title?: true
    slug?: true
    author?: true
    isPost?: true
    visibility?: true
    isEditorsPick?: true
    lastSyncedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: string
    sanityId: string
    type: string
    title: string
    slug: string
    author: string | null
    isPost: boolean
    visibility: string
    isEditorsPick: boolean
    lastSyncedAt: Date
    createdAt: Date
    _count: ArticleCountAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sanityId?: boolean
    type?: boolean
    title?: boolean
    slug?: boolean
    author?: boolean
    isPost?: boolean
    visibility?: boolean
    isEditorsPick?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sanityId?: boolean
    type?: boolean
    title?: boolean
    slug?: boolean
    author?: boolean
    isPost?: boolean
    visibility?: boolean
    isEditorsPick?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sanityId?: boolean
    type?: boolean
    title?: boolean
    slug?: boolean
    author?: boolean
    isPost?: boolean
    visibility?: boolean
    isEditorsPick?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["article"]>

  export type ArticleSelectScalar = {
    id?: boolean
    sanityId?: boolean
    type?: boolean
    title?: boolean
    slug?: boolean
    author?: boolean
    isPost?: boolean
    visibility?: boolean
    isEditorsPick?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sanityId" | "type" | "title" | "slug" | "author" | "isPost" | "visibility" | "isEditorsPick" | "lastSyncedAt" | "createdAt", ExtArgs["result"]["article"]>

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sanityId: string
      type: string
      title: string
      slug: string
      author: string | null
      isPost: boolean
      visibility: string
      isEditorsPick: boolean
      lastSyncedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticleCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticleUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articleWithIdOnly = await prisma.article.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticleUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'String'>
    readonly sanityId: FieldRef<"Article", 'String'>
    readonly type: FieldRef<"Article", 'String'>
    readonly title: FieldRef<"Article", 'String'>
    readonly slug: FieldRef<"Article", 'String'>
    readonly author: FieldRef<"Article", 'String'>
    readonly isPost: FieldRef<"Article", 'Boolean'>
    readonly visibility: FieldRef<"Article", 'String'>
    readonly isEditorsPick: FieldRef<"Article", 'Boolean'>
    readonly lastSyncedAt: FieldRef<"Article", 'DateTime'>
    readonly createdAt: FieldRef<"Article", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article createManyAndReturn
   */
  export type ArticleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article updateManyAndReturn
   */
  export type ArticleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
  }


  /**
   * Model CommunitySubmission
   */

  export type AggregateCommunitySubmission = {
    _count: CommunitySubmissionCountAggregateOutputType | null
    _min: CommunitySubmissionMinAggregateOutputType | null
    _max: CommunitySubmissionMaxAggregateOutputType | null
  }

  export type CommunitySubmissionMinAggregateOutputType = {
    id: string | null
    organizerName: string | null
    organizerEmail: string | null
    communityName: string | null
    description: string | null
    status: $Enums.SubmissionStatus | null
    createdAt: Date | null
  }

  export type CommunitySubmissionMaxAggregateOutputType = {
    id: string | null
    organizerName: string | null
    organizerEmail: string | null
    communityName: string | null
    description: string | null
    status: $Enums.SubmissionStatus | null
    createdAt: Date | null
  }

  export type CommunitySubmissionCountAggregateOutputType = {
    id: number
    organizerName: number
    organizerEmail: number
    communityName: number
    description: number
    status: number
    createdAt: number
    _all: number
  }


  export type CommunitySubmissionMinAggregateInputType = {
    id?: true
    organizerName?: true
    organizerEmail?: true
    communityName?: true
    description?: true
    status?: true
    createdAt?: true
  }

  export type CommunitySubmissionMaxAggregateInputType = {
    id?: true
    organizerName?: true
    organizerEmail?: true
    communityName?: true
    description?: true
    status?: true
    createdAt?: true
  }

  export type CommunitySubmissionCountAggregateInputType = {
    id?: true
    organizerName?: true
    organizerEmail?: true
    communityName?: true
    description?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type CommunitySubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunitySubmission to aggregate.
     */
    where?: CommunitySubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunitySubmissions to fetch.
     */
    orderBy?: CommunitySubmissionOrderByWithRelationInput | CommunitySubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunitySubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunitySubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunitySubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunitySubmissions
    **/
    _count?: true | CommunitySubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunitySubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunitySubmissionMaxAggregateInputType
  }

  export type GetCommunitySubmissionAggregateType<T extends CommunitySubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunitySubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunitySubmission[P]>
      : GetScalarType<T[P], AggregateCommunitySubmission[P]>
  }




  export type CommunitySubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunitySubmissionWhereInput
    orderBy?: CommunitySubmissionOrderByWithAggregationInput | CommunitySubmissionOrderByWithAggregationInput[]
    by: CommunitySubmissionScalarFieldEnum[] | CommunitySubmissionScalarFieldEnum
    having?: CommunitySubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunitySubmissionCountAggregateInputType | true
    _min?: CommunitySubmissionMinAggregateInputType
    _max?: CommunitySubmissionMaxAggregateInputType
  }

  export type CommunitySubmissionGroupByOutputType = {
    id: string
    organizerName: string
    organizerEmail: string
    communityName: string
    description: string | null
    status: $Enums.SubmissionStatus
    createdAt: Date
    _count: CommunitySubmissionCountAggregateOutputType | null
    _min: CommunitySubmissionMinAggregateOutputType | null
    _max: CommunitySubmissionMaxAggregateOutputType | null
  }

  type GetCommunitySubmissionGroupByPayload<T extends CommunitySubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunitySubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunitySubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunitySubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], CommunitySubmissionGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerName?: boolean
    organizerEmail?: boolean
    communityName?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["communitySubmission"]>

  export type CommunitySubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerName?: boolean
    organizerEmail?: boolean
    communityName?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["communitySubmission"]>

  export type CommunitySubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerName?: boolean
    organizerEmail?: boolean
    communityName?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["communitySubmission"]>

  export type CommunitySubmissionSelectScalar = {
    id?: boolean
    organizerName?: boolean
    organizerEmail?: boolean
    communityName?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type CommunitySubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizerName" | "organizerEmail" | "communityName" | "description" | "status" | "createdAt", ExtArgs["result"]["communitySubmission"]>

  export type $CommunitySubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunitySubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizerName: string
      organizerEmail: string
      communityName: string
      description: string | null
      status: $Enums.SubmissionStatus
      createdAt: Date
    }, ExtArgs["result"]["communitySubmission"]>
    composites: {}
  }

  type CommunitySubmissionGetPayload<S extends boolean | null | undefined | CommunitySubmissionDefaultArgs> = $Result.GetResult<Prisma.$CommunitySubmissionPayload, S>

  type CommunitySubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunitySubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunitySubmissionCountAggregateInputType | true
    }

  export interface CommunitySubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunitySubmission'], meta: { name: 'CommunitySubmission' } }
    /**
     * Find zero or one CommunitySubmission that matches the filter.
     * @param {CommunitySubmissionFindUniqueArgs} args - Arguments to find a CommunitySubmission
     * @example
     * // Get one CommunitySubmission
     * const communitySubmission = await prisma.communitySubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunitySubmissionFindUniqueArgs>(args: SelectSubset<T, CommunitySubmissionFindUniqueArgs<ExtArgs>>): Prisma__CommunitySubmissionClient<$Result.GetResult<Prisma.$CommunitySubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunitySubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunitySubmissionFindUniqueOrThrowArgs} args - Arguments to find a CommunitySubmission
     * @example
     * // Get one CommunitySubmission
     * const communitySubmission = await prisma.communitySubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunitySubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunitySubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunitySubmissionClient<$Result.GetResult<Prisma.$CommunitySubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunitySubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySubmissionFindFirstArgs} args - Arguments to find a CommunitySubmission
     * @example
     * // Get one CommunitySubmission
     * const communitySubmission = await prisma.communitySubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunitySubmissionFindFirstArgs>(args?: SelectSubset<T, CommunitySubmissionFindFirstArgs<ExtArgs>>): Prisma__CommunitySubmissionClient<$Result.GetResult<Prisma.$CommunitySubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunitySubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySubmissionFindFirstOrThrowArgs} args - Arguments to find a CommunitySubmission
     * @example
     * // Get one CommunitySubmission
     * const communitySubmission = await prisma.communitySubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunitySubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunitySubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunitySubmissionClient<$Result.GetResult<Prisma.$CommunitySubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunitySubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunitySubmissions
     * const communitySubmissions = await prisma.communitySubmission.findMany()
     * 
     * // Get first 10 CommunitySubmissions
     * const communitySubmissions = await prisma.communitySubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communitySubmissionWithIdOnly = await prisma.communitySubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunitySubmissionFindManyArgs>(args?: SelectSubset<T, CommunitySubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunitySubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunitySubmission.
     * @param {CommunitySubmissionCreateArgs} args - Arguments to create a CommunitySubmission.
     * @example
     * // Create one CommunitySubmission
     * const CommunitySubmission = await prisma.communitySubmission.create({
     *   data: {
     *     // ... data to create a CommunitySubmission
     *   }
     * })
     * 
     */
    create<T extends CommunitySubmissionCreateArgs>(args: SelectSubset<T, CommunitySubmissionCreateArgs<ExtArgs>>): Prisma__CommunitySubmissionClient<$Result.GetResult<Prisma.$CommunitySubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunitySubmissions.
     * @param {CommunitySubmissionCreateManyArgs} args - Arguments to create many CommunitySubmissions.
     * @example
     * // Create many CommunitySubmissions
     * const communitySubmission = await prisma.communitySubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunitySubmissionCreateManyArgs>(args?: SelectSubset<T, CommunitySubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunitySubmissions and returns the data saved in the database.
     * @param {CommunitySubmissionCreateManyAndReturnArgs} args - Arguments to create many CommunitySubmissions.
     * @example
     * // Create many CommunitySubmissions
     * const communitySubmission = await prisma.communitySubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunitySubmissions and only return the `id`
     * const communitySubmissionWithIdOnly = await prisma.communitySubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunitySubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunitySubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunitySubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunitySubmission.
     * @param {CommunitySubmissionDeleteArgs} args - Arguments to delete one CommunitySubmission.
     * @example
     * // Delete one CommunitySubmission
     * const CommunitySubmission = await prisma.communitySubmission.delete({
     *   where: {
     *     // ... filter to delete one CommunitySubmission
     *   }
     * })
     * 
     */
    delete<T extends CommunitySubmissionDeleteArgs>(args: SelectSubset<T, CommunitySubmissionDeleteArgs<ExtArgs>>): Prisma__CommunitySubmissionClient<$Result.GetResult<Prisma.$CommunitySubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunitySubmission.
     * @param {CommunitySubmissionUpdateArgs} args - Arguments to update one CommunitySubmission.
     * @example
     * // Update one CommunitySubmission
     * const communitySubmission = await prisma.communitySubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunitySubmissionUpdateArgs>(args: SelectSubset<T, CommunitySubmissionUpdateArgs<ExtArgs>>): Prisma__CommunitySubmissionClient<$Result.GetResult<Prisma.$CommunitySubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunitySubmissions.
     * @param {CommunitySubmissionDeleteManyArgs} args - Arguments to filter CommunitySubmissions to delete.
     * @example
     * // Delete a few CommunitySubmissions
     * const { count } = await prisma.communitySubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunitySubmissionDeleteManyArgs>(args?: SelectSubset<T, CommunitySubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunitySubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunitySubmissions
     * const communitySubmission = await prisma.communitySubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunitySubmissionUpdateManyArgs>(args: SelectSubset<T, CommunitySubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunitySubmissions and returns the data updated in the database.
     * @param {CommunitySubmissionUpdateManyAndReturnArgs} args - Arguments to update many CommunitySubmissions.
     * @example
     * // Update many CommunitySubmissions
     * const communitySubmission = await prisma.communitySubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunitySubmissions and only return the `id`
     * const communitySubmissionWithIdOnly = await prisma.communitySubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunitySubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunitySubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunitySubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunitySubmission.
     * @param {CommunitySubmissionUpsertArgs} args - Arguments to update or create a CommunitySubmission.
     * @example
     * // Update or create a CommunitySubmission
     * const communitySubmission = await prisma.communitySubmission.upsert({
     *   create: {
     *     // ... data to create a CommunitySubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunitySubmission we want to update
     *   }
     * })
     */
    upsert<T extends CommunitySubmissionUpsertArgs>(args: SelectSubset<T, CommunitySubmissionUpsertArgs<ExtArgs>>): Prisma__CommunitySubmissionClient<$Result.GetResult<Prisma.$CommunitySubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunitySubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySubmissionCountArgs} args - Arguments to filter CommunitySubmissions to count.
     * @example
     * // Count the number of CommunitySubmissions
     * const count = await prisma.communitySubmission.count({
     *   where: {
     *     // ... the filter for the CommunitySubmissions we want to count
     *   }
     * })
    **/
    count<T extends CommunitySubmissionCountArgs>(
      args?: Subset<T, CommunitySubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunitySubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunitySubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunitySubmissionAggregateArgs>(args: Subset<T, CommunitySubmissionAggregateArgs>): Prisma.PrismaPromise<GetCommunitySubmissionAggregateType<T>>

    /**
     * Group by CommunitySubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunitySubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunitySubmissionGroupByArgs['orderBy'] }
        : { orderBy?: CommunitySubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunitySubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunitySubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunitySubmission model
   */
  readonly fields: CommunitySubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunitySubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunitySubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommunitySubmission model
   */
  interface CommunitySubmissionFieldRefs {
    readonly id: FieldRef<"CommunitySubmission", 'String'>
    readonly organizerName: FieldRef<"CommunitySubmission", 'String'>
    readonly organizerEmail: FieldRef<"CommunitySubmission", 'String'>
    readonly communityName: FieldRef<"CommunitySubmission", 'String'>
    readonly description: FieldRef<"CommunitySubmission", 'String'>
    readonly status: FieldRef<"CommunitySubmission", 'SubmissionStatus'>
    readonly createdAt: FieldRef<"CommunitySubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunitySubmission findUnique
   */
  export type CommunitySubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubmission
     */
    select?: CommunitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySubmission
     */
    omit?: CommunitySubmissionOmit<ExtArgs> | null
    /**
     * Filter, which CommunitySubmission to fetch.
     */
    where: CommunitySubmissionWhereUniqueInput
  }

  /**
   * CommunitySubmission findUniqueOrThrow
   */
  export type CommunitySubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubmission
     */
    select?: CommunitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySubmission
     */
    omit?: CommunitySubmissionOmit<ExtArgs> | null
    /**
     * Filter, which CommunitySubmission to fetch.
     */
    where: CommunitySubmissionWhereUniqueInput
  }

  /**
   * CommunitySubmission findFirst
   */
  export type CommunitySubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubmission
     */
    select?: CommunitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySubmission
     */
    omit?: CommunitySubmissionOmit<ExtArgs> | null
    /**
     * Filter, which CommunitySubmission to fetch.
     */
    where?: CommunitySubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunitySubmissions to fetch.
     */
    orderBy?: CommunitySubmissionOrderByWithRelationInput | CommunitySubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunitySubmissions.
     */
    cursor?: CommunitySubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunitySubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunitySubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunitySubmissions.
     */
    distinct?: CommunitySubmissionScalarFieldEnum | CommunitySubmissionScalarFieldEnum[]
  }

  /**
   * CommunitySubmission findFirstOrThrow
   */
  export type CommunitySubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubmission
     */
    select?: CommunitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySubmission
     */
    omit?: CommunitySubmissionOmit<ExtArgs> | null
    /**
     * Filter, which CommunitySubmission to fetch.
     */
    where?: CommunitySubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunitySubmissions to fetch.
     */
    orderBy?: CommunitySubmissionOrderByWithRelationInput | CommunitySubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunitySubmissions.
     */
    cursor?: CommunitySubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunitySubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunitySubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunitySubmissions.
     */
    distinct?: CommunitySubmissionScalarFieldEnum | CommunitySubmissionScalarFieldEnum[]
  }

  /**
   * CommunitySubmission findMany
   */
  export type CommunitySubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubmission
     */
    select?: CommunitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySubmission
     */
    omit?: CommunitySubmissionOmit<ExtArgs> | null
    /**
     * Filter, which CommunitySubmissions to fetch.
     */
    where?: CommunitySubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunitySubmissions to fetch.
     */
    orderBy?: CommunitySubmissionOrderByWithRelationInput | CommunitySubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunitySubmissions.
     */
    cursor?: CommunitySubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunitySubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunitySubmissions.
     */
    skip?: number
    distinct?: CommunitySubmissionScalarFieldEnum | CommunitySubmissionScalarFieldEnum[]
  }

  /**
   * CommunitySubmission create
   */
  export type CommunitySubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubmission
     */
    select?: CommunitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySubmission
     */
    omit?: CommunitySubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a CommunitySubmission.
     */
    data: XOR<CommunitySubmissionCreateInput, CommunitySubmissionUncheckedCreateInput>
  }

  /**
   * CommunitySubmission createMany
   */
  export type CommunitySubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunitySubmissions.
     */
    data: CommunitySubmissionCreateManyInput | CommunitySubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunitySubmission createManyAndReturn
   */
  export type CommunitySubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubmission
     */
    select?: CommunitySubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySubmission
     */
    omit?: CommunitySubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many CommunitySubmissions.
     */
    data: CommunitySubmissionCreateManyInput | CommunitySubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunitySubmission update
   */
  export type CommunitySubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubmission
     */
    select?: CommunitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySubmission
     */
    omit?: CommunitySubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a CommunitySubmission.
     */
    data: XOR<CommunitySubmissionUpdateInput, CommunitySubmissionUncheckedUpdateInput>
    /**
     * Choose, which CommunitySubmission to update.
     */
    where: CommunitySubmissionWhereUniqueInput
  }

  /**
   * CommunitySubmission updateMany
   */
  export type CommunitySubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunitySubmissions.
     */
    data: XOR<CommunitySubmissionUpdateManyMutationInput, CommunitySubmissionUncheckedUpdateManyInput>
    /**
     * Filter which CommunitySubmissions to update
     */
    where?: CommunitySubmissionWhereInput
    /**
     * Limit how many CommunitySubmissions to update.
     */
    limit?: number
  }

  /**
   * CommunitySubmission updateManyAndReturn
   */
  export type CommunitySubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubmission
     */
    select?: CommunitySubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySubmission
     */
    omit?: CommunitySubmissionOmit<ExtArgs> | null
    /**
     * The data used to update CommunitySubmissions.
     */
    data: XOR<CommunitySubmissionUpdateManyMutationInput, CommunitySubmissionUncheckedUpdateManyInput>
    /**
     * Filter which CommunitySubmissions to update
     */
    where?: CommunitySubmissionWhereInput
    /**
     * Limit how many CommunitySubmissions to update.
     */
    limit?: number
  }

  /**
   * CommunitySubmission upsert
   */
  export type CommunitySubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubmission
     */
    select?: CommunitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySubmission
     */
    omit?: CommunitySubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the CommunitySubmission to update in case it exists.
     */
    where: CommunitySubmissionWhereUniqueInput
    /**
     * In case the CommunitySubmission found by the `where` argument doesn't exist, create a new CommunitySubmission with this data.
     */
    create: XOR<CommunitySubmissionCreateInput, CommunitySubmissionUncheckedCreateInput>
    /**
     * In case the CommunitySubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunitySubmissionUpdateInput, CommunitySubmissionUncheckedUpdateInput>
  }

  /**
   * CommunitySubmission delete
   */
  export type CommunitySubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubmission
     */
    select?: CommunitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySubmission
     */
    omit?: CommunitySubmissionOmit<ExtArgs> | null
    /**
     * Filter which CommunitySubmission to delete.
     */
    where: CommunitySubmissionWhereUniqueInput
  }

  /**
   * CommunitySubmission deleteMany
   */
  export type CommunitySubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunitySubmissions to delete
     */
    where?: CommunitySubmissionWhereInput
    /**
     * Limit how many CommunitySubmissions to delete.
     */
    limit?: number
  }

  /**
   * CommunitySubmission without action
   */
  export type CommunitySubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubmission
     */
    select?: CommunitySubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunitySubmission
     */
    omit?: CommunitySubmissionOmit<ExtArgs> | null
  }


  /**
   * Model Community
   */

  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CommunityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CommunityCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    createdAt: number
    _all: number
  }


  export type CommunityMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    createdAt?: true
  }

  export type CommunityMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    createdAt?: true
  }

  export type CommunityCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithAggregationInput | CommunityOrderByWithAggregationInput[]
    by: CommunityScalarFieldEnum[] | CommunityScalarFieldEnum
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }

  export type CommunityGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    createdAt: Date
    _count: CommunityCountAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
    members?: boolean | Community$membersArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type CommunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "createdAt", ExtArgs["result"]["community"]>
  export type CommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Community$membersArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommunityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CommunityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community"
    objects: {
      members: Prisma.$CommunityMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["community"]>
    composites: {}
  }

  type CommunityGetPayload<S extends boolean | null | undefined | CommunityDefaultArgs> = $Result.GetResult<Prisma.$CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community'], meta: { name: 'Community' } }
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityFindUniqueArgs>(args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Community that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityFindFirstArgs>(args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Community that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityWithIdOnly = await prisma.community.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityFindManyArgs>(args?: SelectSubset<T, CommunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
     */
    create<T extends CommunityCreateArgs>(args: SelectSubset<T, CommunityCreateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Communities.
     * @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityCreateManyArgs>(args?: SelectSubset<T, CommunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communities and returns the data saved in the database.
     * @param {CommunityCreateManyAndReturnArgs} args - Arguments to create many Communities.
     * @example
     * // Create many Communities
     * const community = await prisma.community.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
     */
    delete<T extends CommunityDeleteArgs>(args: SelectSubset<T, CommunityDeleteArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityUpdateArgs>(args: SelectSubset<T, CommunityUpdateArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityDeleteManyArgs>(args?: SelectSubset<T, CommunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityUpdateManyArgs>(args: SelectSubset<T, CommunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities and returns the data updated in the database.
     * @param {CommunityUpdateManyAndReturnArgs} args - Arguments to update many Communities.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Communities and only return the `id`
     * const communityWithIdOnly = await prisma.community.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunityUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
     */
    upsert<T extends CommunityUpsertArgs>(args: SelectSubset<T, CommunityUpsertArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): Prisma.PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community model
   */
  readonly fields: CommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Community$membersArgs<ExtArgs> = {}>(args?: Subset<T, Community$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Community model
   */
  interface CommunityFieldRefs {
    readonly id: FieldRef<"Community", 'String'>
    readonly name: FieldRef<"Community", 'String'>
    readonly slug: FieldRef<"Community", 'String'>
    readonly description: FieldRef<"Community", 'String'>
    readonly createdAt: FieldRef<"Community", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Community findUnique
   */
  export type CommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community findFirst
   */
  export type CommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Communities to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }

  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Community.
     */
    data: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
  }

  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Community createManyAndReturn
   */
  export type CommunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Community.
     */
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
  }

  /**
   * Community updateManyAndReturn
   */
  export type CommunityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to update.
     */
    limit?: number
  }

  /**
   * Community upsert
   */
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Community to update in case it exists.
     */
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     */
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
  }

  /**
   * Community delete
   */
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter which Community to delete.
     */
    where: CommunityWhereUniqueInput
  }

  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
    /**
     * Limit how many Communities to delete.
     */
    limit?: number
  }

  /**
   * Community.members
   */
  export type Community$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    where?: CommunityMemberWhereInput
    orderBy?: CommunityMemberOrderByWithRelationInput | CommunityMemberOrderByWithRelationInput[]
    cursor?: CommunityMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityMemberScalarFieldEnum | CommunityMemberScalarFieldEnum[]
  }

  /**
   * Community without action
   */
  export type CommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Community
     */
    omit?: CommunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityInclude<ExtArgs> | null
  }


  /**
   * Model CommunityMember
   */

  export type AggregateCommunityMember = {
    _count: CommunityMemberCountAggregateOutputType | null
    _min: CommunityMemberMinAggregateOutputType | null
    _max: CommunityMemberMaxAggregateOutputType | null
  }

  export type CommunityMemberMinAggregateOutputType = {
    id: string | null
    communityId: string | null
    name: string | null
    email: string | null
    notificationsEnabled: boolean | null
    deletedAt: Date | null
    deletedBy: string | null
    createdAt: Date | null
  }

  export type CommunityMemberMaxAggregateOutputType = {
    id: string | null
    communityId: string | null
    name: string | null
    email: string | null
    notificationsEnabled: boolean | null
    deletedAt: Date | null
    deletedBy: string | null
    createdAt: Date | null
  }

  export type CommunityMemberCountAggregateOutputType = {
    id: number
    communityId: number
    name: number
    email: number
    notificationsEnabled: number
    deletedAt: number
    deletedBy: number
    createdAt: number
    _all: number
  }


  export type CommunityMemberMinAggregateInputType = {
    id?: true
    communityId?: true
    name?: true
    email?: true
    notificationsEnabled?: true
    deletedAt?: true
    deletedBy?: true
    createdAt?: true
  }

  export type CommunityMemberMaxAggregateInputType = {
    id?: true
    communityId?: true
    name?: true
    email?: true
    notificationsEnabled?: true
    deletedAt?: true
    deletedBy?: true
    createdAt?: true
  }

  export type CommunityMemberCountAggregateInputType = {
    id?: true
    communityId?: true
    name?: true
    email?: true
    notificationsEnabled?: true
    deletedAt?: true
    deletedBy?: true
    createdAt?: true
    _all?: true
  }

  export type CommunityMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityMember to aggregate.
     */
    where?: CommunityMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityMembers to fetch.
     */
    orderBy?: CommunityMemberOrderByWithRelationInput | CommunityMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityMembers
    **/
    _count?: true | CommunityMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMemberMaxAggregateInputType
  }

  export type GetCommunityMemberAggregateType<T extends CommunityMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityMember[P]>
      : GetScalarType<T[P], AggregateCommunityMember[P]>
  }




  export type CommunityMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityMemberWhereInput
    orderBy?: CommunityMemberOrderByWithAggregationInput | CommunityMemberOrderByWithAggregationInput[]
    by: CommunityMemberScalarFieldEnum[] | CommunityMemberScalarFieldEnum
    having?: CommunityMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityMemberCountAggregateInputType | true
    _min?: CommunityMemberMinAggregateInputType
    _max?: CommunityMemberMaxAggregateInputType
  }

  export type CommunityMemberGroupByOutputType = {
    id: string
    communityId: string
    name: string
    email: string
    notificationsEnabled: boolean
    deletedAt: Date | null
    deletedBy: string | null
    createdAt: Date
    _count: CommunityMemberCountAggregateOutputType | null
    _min: CommunityMemberMinAggregateOutputType | null
    _max: CommunityMemberMaxAggregateOutputType | null
  }

  type GetCommunityMemberGroupByPayload<T extends CommunityMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityMemberGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityMemberGroupByOutputType[P]>
        }
      >
    >


  export type CommunityMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communityId?: boolean
    name?: boolean
    email?: boolean
    notificationsEnabled?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityMember"]>

  export type CommunityMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communityId?: boolean
    name?: boolean
    email?: boolean
    notificationsEnabled?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityMember"]>

  export type CommunityMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communityId?: boolean
    name?: boolean
    email?: boolean
    notificationsEnabled?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    createdAt?: boolean
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityMember"]>

  export type CommunityMemberSelectScalar = {
    id?: boolean
    communityId?: boolean
    name?: boolean
    email?: boolean
    notificationsEnabled?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    createdAt?: boolean
  }

  export type CommunityMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "communityId" | "name" | "email" | "notificationsEnabled" | "deletedAt" | "deletedBy" | "createdAt", ExtArgs["result"]["communityMember"]>
  export type CommunityMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }
  export type CommunityMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }
  export type CommunityMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }

  export type $CommunityMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityMember"
    objects: {
      community: Prisma.$CommunityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      communityId: string
      name: string
      email: string
      notificationsEnabled: boolean
      deletedAt: Date | null
      deletedBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["communityMember"]>
    composites: {}
  }

  type CommunityMemberGetPayload<S extends boolean | null | undefined | CommunityMemberDefaultArgs> = $Result.GetResult<Prisma.$CommunityMemberPayload, S>

  type CommunityMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityMemberCountAggregateInputType | true
    }

  export interface CommunityMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityMember'], meta: { name: 'CommunityMember' } }
    /**
     * Find zero or one CommunityMember that matches the filter.
     * @param {CommunityMemberFindUniqueArgs} args - Arguments to find a CommunityMember
     * @example
     * // Get one CommunityMember
     * const communityMember = await prisma.communityMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityMemberFindUniqueArgs>(args: SelectSubset<T, CommunityMemberFindUniqueArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunityMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityMemberFindUniqueOrThrowArgs} args - Arguments to find a CommunityMember
     * @example
     * // Get one CommunityMember
     * const communityMember = await prisma.communityMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberFindFirstArgs} args - Arguments to find a CommunityMember
     * @example
     * // Get one CommunityMember
     * const communityMember = await prisma.communityMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityMemberFindFirstArgs>(args?: SelectSubset<T, CommunityMemberFindFirstArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberFindFirstOrThrowArgs} args - Arguments to find a CommunityMember
     * @example
     * // Get one CommunityMember
     * const communityMember = await prisma.communityMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunityMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityMembers
     * const communityMembers = await prisma.communityMember.findMany()
     * 
     * // Get first 10 CommunityMembers
     * const communityMembers = await prisma.communityMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityMemberWithIdOnly = await prisma.communityMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityMemberFindManyArgs>(args?: SelectSubset<T, CommunityMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunityMember.
     * @param {CommunityMemberCreateArgs} args - Arguments to create a CommunityMember.
     * @example
     * // Create one CommunityMember
     * const CommunityMember = await prisma.communityMember.create({
     *   data: {
     *     // ... data to create a CommunityMember
     *   }
     * })
     * 
     */
    create<T extends CommunityMemberCreateArgs>(args: SelectSubset<T, CommunityMemberCreateArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunityMembers.
     * @param {CommunityMemberCreateManyArgs} args - Arguments to create many CommunityMembers.
     * @example
     * // Create many CommunityMembers
     * const communityMember = await prisma.communityMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityMemberCreateManyArgs>(args?: SelectSubset<T, CommunityMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunityMembers and returns the data saved in the database.
     * @param {CommunityMemberCreateManyAndReturnArgs} args - Arguments to create many CommunityMembers.
     * @example
     * // Create many CommunityMembers
     * const communityMember = await prisma.communityMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunityMembers and only return the `id`
     * const communityMemberWithIdOnly = await prisma.communityMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunityMember.
     * @param {CommunityMemberDeleteArgs} args - Arguments to delete one CommunityMember.
     * @example
     * // Delete one CommunityMember
     * const CommunityMember = await prisma.communityMember.delete({
     *   where: {
     *     // ... filter to delete one CommunityMember
     *   }
     * })
     * 
     */
    delete<T extends CommunityMemberDeleteArgs>(args: SelectSubset<T, CommunityMemberDeleteArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunityMember.
     * @param {CommunityMemberUpdateArgs} args - Arguments to update one CommunityMember.
     * @example
     * // Update one CommunityMember
     * const communityMember = await prisma.communityMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityMemberUpdateArgs>(args: SelectSubset<T, CommunityMemberUpdateArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunityMembers.
     * @param {CommunityMemberDeleteManyArgs} args - Arguments to filter CommunityMembers to delete.
     * @example
     * // Delete a few CommunityMembers
     * const { count } = await prisma.communityMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityMemberDeleteManyArgs>(args?: SelectSubset<T, CommunityMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityMembers
     * const communityMember = await prisma.communityMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityMemberUpdateManyArgs>(args: SelectSubset<T, CommunityMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityMembers and returns the data updated in the database.
     * @param {CommunityMemberUpdateManyAndReturnArgs} args - Arguments to update many CommunityMembers.
     * @example
     * // Update many CommunityMembers
     * const communityMember = await prisma.communityMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunityMembers and only return the `id`
     * const communityMemberWithIdOnly = await prisma.communityMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunityMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunityMember.
     * @param {CommunityMemberUpsertArgs} args - Arguments to update or create a CommunityMember.
     * @example
     * // Update or create a CommunityMember
     * const communityMember = await prisma.communityMember.upsert({
     *   create: {
     *     // ... data to create a CommunityMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityMember we want to update
     *   }
     * })
     */
    upsert<T extends CommunityMemberUpsertArgs>(args: SelectSubset<T, CommunityMemberUpsertArgs<ExtArgs>>): Prisma__CommunityMemberClient<$Result.GetResult<Prisma.$CommunityMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunityMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberCountArgs} args - Arguments to filter CommunityMembers to count.
     * @example
     * // Count the number of CommunityMembers
     * const count = await prisma.communityMember.count({
     *   where: {
     *     // ... the filter for the CommunityMembers we want to count
     *   }
     * })
    **/
    count<T extends CommunityMemberCountArgs>(
      args?: Subset<T, CommunityMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityMemberAggregateArgs>(args: Subset<T, CommunityMemberAggregateArgs>): Prisma.PrismaPromise<GetCommunityMemberAggregateType<T>>

    /**
     * Group by CommunityMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityMemberGroupByArgs['orderBy'] }
        : { orderBy?: CommunityMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityMember model
   */
  readonly fields: CommunityMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommunityMember model
   */
  interface CommunityMemberFieldRefs {
    readonly id: FieldRef<"CommunityMember", 'String'>
    readonly communityId: FieldRef<"CommunityMember", 'String'>
    readonly name: FieldRef<"CommunityMember", 'String'>
    readonly email: FieldRef<"CommunityMember", 'String'>
    readonly notificationsEnabled: FieldRef<"CommunityMember", 'Boolean'>
    readonly deletedAt: FieldRef<"CommunityMember", 'DateTime'>
    readonly deletedBy: FieldRef<"CommunityMember", 'String'>
    readonly createdAt: FieldRef<"CommunityMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunityMember findUnique
   */
  export type CommunityMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * Filter, which CommunityMember to fetch.
     */
    where: CommunityMemberWhereUniqueInput
  }

  /**
   * CommunityMember findUniqueOrThrow
   */
  export type CommunityMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * Filter, which CommunityMember to fetch.
     */
    where: CommunityMemberWhereUniqueInput
  }

  /**
   * CommunityMember findFirst
   */
  export type CommunityMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * Filter, which CommunityMember to fetch.
     */
    where?: CommunityMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityMembers to fetch.
     */
    orderBy?: CommunityMemberOrderByWithRelationInput | CommunityMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityMembers.
     */
    cursor?: CommunityMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityMembers.
     */
    distinct?: CommunityMemberScalarFieldEnum | CommunityMemberScalarFieldEnum[]
  }

  /**
   * CommunityMember findFirstOrThrow
   */
  export type CommunityMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * Filter, which CommunityMember to fetch.
     */
    where?: CommunityMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityMembers to fetch.
     */
    orderBy?: CommunityMemberOrderByWithRelationInput | CommunityMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityMembers.
     */
    cursor?: CommunityMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityMembers.
     */
    distinct?: CommunityMemberScalarFieldEnum | CommunityMemberScalarFieldEnum[]
  }

  /**
   * CommunityMember findMany
   */
  export type CommunityMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * Filter, which CommunityMembers to fetch.
     */
    where?: CommunityMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityMembers to fetch.
     */
    orderBy?: CommunityMemberOrderByWithRelationInput | CommunityMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityMembers.
     */
    cursor?: CommunityMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityMembers.
     */
    skip?: number
    distinct?: CommunityMemberScalarFieldEnum | CommunityMemberScalarFieldEnum[]
  }

  /**
   * CommunityMember create
   */
  export type CommunityMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunityMember.
     */
    data: XOR<CommunityMemberCreateInput, CommunityMemberUncheckedCreateInput>
  }

  /**
   * CommunityMember createMany
   */
  export type CommunityMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityMembers.
     */
    data: CommunityMemberCreateManyInput | CommunityMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityMember createManyAndReturn
   */
  export type CommunityMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * The data used to create many CommunityMembers.
     */
    data: CommunityMemberCreateManyInput | CommunityMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityMember update
   */
  export type CommunityMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunityMember.
     */
    data: XOR<CommunityMemberUpdateInput, CommunityMemberUncheckedUpdateInput>
    /**
     * Choose, which CommunityMember to update.
     */
    where: CommunityMemberWhereUniqueInput
  }

  /**
   * CommunityMember updateMany
   */
  export type CommunityMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityMembers.
     */
    data: XOR<CommunityMemberUpdateManyMutationInput, CommunityMemberUncheckedUpdateManyInput>
    /**
     * Filter which CommunityMembers to update
     */
    where?: CommunityMemberWhereInput
    /**
     * Limit how many CommunityMembers to update.
     */
    limit?: number
  }

  /**
   * CommunityMember updateManyAndReturn
   */
  export type CommunityMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * The data used to update CommunityMembers.
     */
    data: XOR<CommunityMemberUpdateManyMutationInput, CommunityMemberUncheckedUpdateManyInput>
    /**
     * Filter which CommunityMembers to update
     */
    where?: CommunityMemberWhereInput
    /**
     * Limit how many CommunityMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityMember upsert
   */
  export type CommunityMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunityMember to update in case it exists.
     */
    where: CommunityMemberWhereUniqueInput
    /**
     * In case the CommunityMember found by the `where` argument doesn't exist, create a new CommunityMember with this data.
     */
    create: XOR<CommunityMemberCreateInput, CommunityMemberUncheckedCreateInput>
    /**
     * In case the CommunityMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityMemberUpdateInput, CommunityMemberUncheckedUpdateInput>
  }

  /**
   * CommunityMember delete
   */
  export type CommunityMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
    /**
     * Filter which CommunityMember to delete.
     */
    where: CommunityMemberWhereUniqueInput
  }

  /**
   * CommunityMember deleteMany
   */
  export type CommunityMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityMembers to delete
     */
    where?: CommunityMemberWhereInput
    /**
     * Limit how many CommunityMembers to delete.
     */
    limit?: number
  }

  /**
   * CommunityMember without action
   */
  export type CommunityMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityMember
     */
    select?: CommunityMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityMember
     */
    omit?: CommunityMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityMemberInclude<ExtArgs> | null
  }


  /**
   * Model CommunityOtp
   */

  export type AggregateCommunityOtp = {
    _count: CommunityOtpCountAggregateOutputType | null
    _min: CommunityOtpMinAggregateOutputType | null
    _max: CommunityOtpMaxAggregateOutputType | null
  }

  export type CommunityOtpMinAggregateOutputType = {
    id: string | null
    communityId: string | null
    email: string | null
    name: string | null
    otp: string | null
    action: string | null
    expiresAt: Date | null
    verified: boolean | null
    verifiedAt: Date | null
    createdAt: Date | null
  }

  export type CommunityOtpMaxAggregateOutputType = {
    id: string | null
    communityId: string | null
    email: string | null
    name: string | null
    otp: string | null
    action: string | null
    expiresAt: Date | null
    verified: boolean | null
    verifiedAt: Date | null
    createdAt: Date | null
  }

  export type CommunityOtpCountAggregateOutputType = {
    id: number
    communityId: number
    email: number
    name: number
    otp: number
    action: number
    expiresAt: number
    verified: number
    verifiedAt: number
    createdAt: number
    _all: number
  }


  export type CommunityOtpMinAggregateInputType = {
    id?: true
    communityId?: true
    email?: true
    name?: true
    otp?: true
    action?: true
    expiresAt?: true
    verified?: true
    verifiedAt?: true
    createdAt?: true
  }

  export type CommunityOtpMaxAggregateInputType = {
    id?: true
    communityId?: true
    email?: true
    name?: true
    otp?: true
    action?: true
    expiresAt?: true
    verified?: true
    verifiedAt?: true
    createdAt?: true
  }

  export type CommunityOtpCountAggregateInputType = {
    id?: true
    communityId?: true
    email?: true
    name?: true
    otp?: true
    action?: true
    expiresAt?: true
    verified?: true
    verifiedAt?: true
    createdAt?: true
    _all?: true
  }

  export type CommunityOtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityOtp to aggregate.
     */
    where?: CommunityOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityOtps to fetch.
     */
    orderBy?: CommunityOtpOrderByWithRelationInput | CommunityOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityOtps
    **/
    _count?: true | CommunityOtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityOtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityOtpMaxAggregateInputType
  }

  export type GetCommunityOtpAggregateType<T extends CommunityOtpAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityOtp[P]>
      : GetScalarType<T[P], AggregateCommunityOtp[P]>
  }




  export type CommunityOtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityOtpWhereInput
    orderBy?: CommunityOtpOrderByWithAggregationInput | CommunityOtpOrderByWithAggregationInput[]
    by: CommunityOtpScalarFieldEnum[] | CommunityOtpScalarFieldEnum
    having?: CommunityOtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityOtpCountAggregateInputType | true
    _min?: CommunityOtpMinAggregateInputType
    _max?: CommunityOtpMaxAggregateInputType
  }

  export type CommunityOtpGroupByOutputType = {
    id: string
    communityId: string
    email: string
    name: string | null
    otp: string
    action: string
    expiresAt: Date
    verified: boolean
    verifiedAt: Date | null
    createdAt: Date
    _count: CommunityOtpCountAggregateOutputType | null
    _min: CommunityOtpMinAggregateOutputType | null
    _max: CommunityOtpMaxAggregateOutputType | null
  }

  type GetCommunityOtpGroupByPayload<T extends CommunityOtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityOtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityOtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityOtpGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityOtpGroupByOutputType[P]>
        }
      >
    >


  export type CommunityOtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communityId?: boolean
    email?: boolean
    name?: boolean
    otp?: boolean
    action?: boolean
    expiresAt?: boolean
    verified?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["communityOtp"]>

  export type CommunityOtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communityId?: boolean
    email?: boolean
    name?: boolean
    otp?: boolean
    action?: boolean
    expiresAt?: boolean
    verified?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["communityOtp"]>

  export type CommunityOtpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communityId?: boolean
    email?: boolean
    name?: boolean
    otp?: boolean
    action?: boolean
    expiresAt?: boolean
    verified?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["communityOtp"]>

  export type CommunityOtpSelectScalar = {
    id?: boolean
    communityId?: boolean
    email?: boolean
    name?: boolean
    otp?: boolean
    action?: boolean
    expiresAt?: boolean
    verified?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
  }

  export type CommunityOtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "communityId" | "email" | "name" | "otp" | "action" | "expiresAt" | "verified" | "verifiedAt" | "createdAt", ExtArgs["result"]["communityOtp"]>

  export type $CommunityOtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityOtp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      communityId: string
      email: string
      name: string | null
      otp: string
      action: string
      expiresAt: Date
      verified: boolean
      verifiedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["communityOtp"]>
    composites: {}
  }

  type CommunityOtpGetPayload<S extends boolean | null | undefined | CommunityOtpDefaultArgs> = $Result.GetResult<Prisma.$CommunityOtpPayload, S>

  type CommunityOtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityOtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityOtpCountAggregateInputType | true
    }

  export interface CommunityOtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityOtp'], meta: { name: 'CommunityOtp' } }
    /**
     * Find zero or one CommunityOtp that matches the filter.
     * @param {CommunityOtpFindUniqueArgs} args - Arguments to find a CommunityOtp
     * @example
     * // Get one CommunityOtp
     * const communityOtp = await prisma.communityOtp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityOtpFindUniqueArgs>(args: SelectSubset<T, CommunityOtpFindUniqueArgs<ExtArgs>>): Prisma__CommunityOtpClient<$Result.GetResult<Prisma.$CommunityOtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunityOtp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityOtpFindUniqueOrThrowArgs} args - Arguments to find a CommunityOtp
     * @example
     * // Get one CommunityOtp
     * const communityOtp = await prisma.communityOtp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityOtpFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityOtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityOtpClient<$Result.GetResult<Prisma.$CommunityOtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityOtp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityOtpFindFirstArgs} args - Arguments to find a CommunityOtp
     * @example
     * // Get one CommunityOtp
     * const communityOtp = await prisma.communityOtp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityOtpFindFirstArgs>(args?: SelectSubset<T, CommunityOtpFindFirstArgs<ExtArgs>>): Prisma__CommunityOtpClient<$Result.GetResult<Prisma.$CommunityOtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityOtp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityOtpFindFirstOrThrowArgs} args - Arguments to find a CommunityOtp
     * @example
     * // Get one CommunityOtp
     * const communityOtp = await prisma.communityOtp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityOtpFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityOtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityOtpClient<$Result.GetResult<Prisma.$CommunityOtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunityOtps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityOtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityOtps
     * const communityOtps = await prisma.communityOtp.findMany()
     * 
     * // Get first 10 CommunityOtps
     * const communityOtps = await prisma.communityOtp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityOtpWithIdOnly = await prisma.communityOtp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityOtpFindManyArgs>(args?: SelectSubset<T, CommunityOtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityOtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunityOtp.
     * @param {CommunityOtpCreateArgs} args - Arguments to create a CommunityOtp.
     * @example
     * // Create one CommunityOtp
     * const CommunityOtp = await prisma.communityOtp.create({
     *   data: {
     *     // ... data to create a CommunityOtp
     *   }
     * })
     * 
     */
    create<T extends CommunityOtpCreateArgs>(args: SelectSubset<T, CommunityOtpCreateArgs<ExtArgs>>): Prisma__CommunityOtpClient<$Result.GetResult<Prisma.$CommunityOtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunityOtps.
     * @param {CommunityOtpCreateManyArgs} args - Arguments to create many CommunityOtps.
     * @example
     * // Create many CommunityOtps
     * const communityOtp = await prisma.communityOtp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityOtpCreateManyArgs>(args?: SelectSubset<T, CommunityOtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunityOtps and returns the data saved in the database.
     * @param {CommunityOtpCreateManyAndReturnArgs} args - Arguments to create many CommunityOtps.
     * @example
     * // Create many CommunityOtps
     * const communityOtp = await prisma.communityOtp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunityOtps and only return the `id`
     * const communityOtpWithIdOnly = await prisma.communityOtp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityOtpCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityOtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityOtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunityOtp.
     * @param {CommunityOtpDeleteArgs} args - Arguments to delete one CommunityOtp.
     * @example
     * // Delete one CommunityOtp
     * const CommunityOtp = await prisma.communityOtp.delete({
     *   where: {
     *     // ... filter to delete one CommunityOtp
     *   }
     * })
     * 
     */
    delete<T extends CommunityOtpDeleteArgs>(args: SelectSubset<T, CommunityOtpDeleteArgs<ExtArgs>>): Prisma__CommunityOtpClient<$Result.GetResult<Prisma.$CommunityOtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunityOtp.
     * @param {CommunityOtpUpdateArgs} args - Arguments to update one CommunityOtp.
     * @example
     * // Update one CommunityOtp
     * const communityOtp = await prisma.communityOtp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityOtpUpdateArgs>(args: SelectSubset<T, CommunityOtpUpdateArgs<ExtArgs>>): Prisma__CommunityOtpClient<$Result.GetResult<Prisma.$CommunityOtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunityOtps.
     * @param {CommunityOtpDeleteManyArgs} args - Arguments to filter CommunityOtps to delete.
     * @example
     * // Delete a few CommunityOtps
     * const { count } = await prisma.communityOtp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityOtpDeleteManyArgs>(args?: SelectSubset<T, CommunityOtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityOtps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityOtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityOtps
     * const communityOtp = await prisma.communityOtp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityOtpUpdateManyArgs>(args: SelectSubset<T, CommunityOtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityOtps and returns the data updated in the database.
     * @param {CommunityOtpUpdateManyAndReturnArgs} args - Arguments to update many CommunityOtps.
     * @example
     * // Update many CommunityOtps
     * const communityOtp = await prisma.communityOtp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunityOtps and only return the `id`
     * const communityOtpWithIdOnly = await prisma.communityOtp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunityOtpUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityOtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityOtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunityOtp.
     * @param {CommunityOtpUpsertArgs} args - Arguments to update or create a CommunityOtp.
     * @example
     * // Update or create a CommunityOtp
     * const communityOtp = await prisma.communityOtp.upsert({
     *   create: {
     *     // ... data to create a CommunityOtp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityOtp we want to update
     *   }
     * })
     */
    upsert<T extends CommunityOtpUpsertArgs>(args: SelectSubset<T, CommunityOtpUpsertArgs<ExtArgs>>): Prisma__CommunityOtpClient<$Result.GetResult<Prisma.$CommunityOtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunityOtps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityOtpCountArgs} args - Arguments to filter CommunityOtps to count.
     * @example
     * // Count the number of CommunityOtps
     * const count = await prisma.communityOtp.count({
     *   where: {
     *     // ... the filter for the CommunityOtps we want to count
     *   }
     * })
    **/
    count<T extends CommunityOtpCountArgs>(
      args?: Subset<T, CommunityOtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityOtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityOtp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityOtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunityOtpAggregateArgs>(args: Subset<T, CommunityOtpAggregateArgs>): Prisma.PrismaPromise<GetCommunityOtpAggregateType<T>>

    /**
     * Group by CommunityOtp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityOtpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunityOtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityOtpGroupByArgs['orderBy'] }
        : { orderBy?: CommunityOtpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunityOtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityOtp model
   */
  readonly fields: CommunityOtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityOtp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityOtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommunityOtp model
   */
  interface CommunityOtpFieldRefs {
    readonly id: FieldRef<"CommunityOtp", 'String'>
    readonly communityId: FieldRef<"CommunityOtp", 'String'>
    readonly email: FieldRef<"CommunityOtp", 'String'>
    readonly name: FieldRef<"CommunityOtp", 'String'>
    readonly otp: FieldRef<"CommunityOtp", 'String'>
    readonly action: FieldRef<"CommunityOtp", 'String'>
    readonly expiresAt: FieldRef<"CommunityOtp", 'DateTime'>
    readonly verified: FieldRef<"CommunityOtp", 'Boolean'>
    readonly verifiedAt: FieldRef<"CommunityOtp", 'DateTime'>
    readonly createdAt: FieldRef<"CommunityOtp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunityOtp findUnique
   */
  export type CommunityOtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityOtp
     */
    select?: CommunityOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityOtp
     */
    omit?: CommunityOtpOmit<ExtArgs> | null
    /**
     * Filter, which CommunityOtp to fetch.
     */
    where: CommunityOtpWhereUniqueInput
  }

  /**
   * CommunityOtp findUniqueOrThrow
   */
  export type CommunityOtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityOtp
     */
    select?: CommunityOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityOtp
     */
    omit?: CommunityOtpOmit<ExtArgs> | null
    /**
     * Filter, which CommunityOtp to fetch.
     */
    where: CommunityOtpWhereUniqueInput
  }

  /**
   * CommunityOtp findFirst
   */
  export type CommunityOtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityOtp
     */
    select?: CommunityOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityOtp
     */
    omit?: CommunityOtpOmit<ExtArgs> | null
    /**
     * Filter, which CommunityOtp to fetch.
     */
    where?: CommunityOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityOtps to fetch.
     */
    orderBy?: CommunityOtpOrderByWithRelationInput | CommunityOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityOtps.
     */
    cursor?: CommunityOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityOtps.
     */
    distinct?: CommunityOtpScalarFieldEnum | CommunityOtpScalarFieldEnum[]
  }

  /**
   * CommunityOtp findFirstOrThrow
   */
  export type CommunityOtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityOtp
     */
    select?: CommunityOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityOtp
     */
    omit?: CommunityOtpOmit<ExtArgs> | null
    /**
     * Filter, which CommunityOtp to fetch.
     */
    where?: CommunityOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityOtps to fetch.
     */
    orderBy?: CommunityOtpOrderByWithRelationInput | CommunityOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityOtps.
     */
    cursor?: CommunityOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityOtps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityOtps.
     */
    distinct?: CommunityOtpScalarFieldEnum | CommunityOtpScalarFieldEnum[]
  }

  /**
   * CommunityOtp findMany
   */
  export type CommunityOtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityOtp
     */
    select?: CommunityOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityOtp
     */
    omit?: CommunityOtpOmit<ExtArgs> | null
    /**
     * Filter, which CommunityOtps to fetch.
     */
    where?: CommunityOtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityOtps to fetch.
     */
    orderBy?: CommunityOtpOrderByWithRelationInput | CommunityOtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityOtps.
     */
    cursor?: CommunityOtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityOtps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityOtps.
     */
    skip?: number
    distinct?: CommunityOtpScalarFieldEnum | CommunityOtpScalarFieldEnum[]
  }

  /**
   * CommunityOtp create
   */
  export type CommunityOtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityOtp
     */
    select?: CommunityOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityOtp
     */
    omit?: CommunityOtpOmit<ExtArgs> | null
    /**
     * The data needed to create a CommunityOtp.
     */
    data: XOR<CommunityOtpCreateInput, CommunityOtpUncheckedCreateInput>
  }

  /**
   * CommunityOtp createMany
   */
  export type CommunityOtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityOtps.
     */
    data: CommunityOtpCreateManyInput | CommunityOtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityOtp createManyAndReturn
   */
  export type CommunityOtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityOtp
     */
    select?: CommunityOtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityOtp
     */
    omit?: CommunityOtpOmit<ExtArgs> | null
    /**
     * The data used to create many CommunityOtps.
     */
    data: CommunityOtpCreateManyInput | CommunityOtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityOtp update
   */
  export type CommunityOtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityOtp
     */
    select?: CommunityOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityOtp
     */
    omit?: CommunityOtpOmit<ExtArgs> | null
    /**
     * The data needed to update a CommunityOtp.
     */
    data: XOR<CommunityOtpUpdateInput, CommunityOtpUncheckedUpdateInput>
    /**
     * Choose, which CommunityOtp to update.
     */
    where: CommunityOtpWhereUniqueInput
  }

  /**
   * CommunityOtp updateMany
   */
  export type CommunityOtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityOtps.
     */
    data: XOR<CommunityOtpUpdateManyMutationInput, CommunityOtpUncheckedUpdateManyInput>
    /**
     * Filter which CommunityOtps to update
     */
    where?: CommunityOtpWhereInput
    /**
     * Limit how many CommunityOtps to update.
     */
    limit?: number
  }

  /**
   * CommunityOtp updateManyAndReturn
   */
  export type CommunityOtpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityOtp
     */
    select?: CommunityOtpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityOtp
     */
    omit?: CommunityOtpOmit<ExtArgs> | null
    /**
     * The data used to update CommunityOtps.
     */
    data: XOR<CommunityOtpUpdateManyMutationInput, CommunityOtpUncheckedUpdateManyInput>
    /**
     * Filter which CommunityOtps to update
     */
    where?: CommunityOtpWhereInput
    /**
     * Limit how many CommunityOtps to update.
     */
    limit?: number
  }

  /**
   * CommunityOtp upsert
   */
  export type CommunityOtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityOtp
     */
    select?: CommunityOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityOtp
     */
    omit?: CommunityOtpOmit<ExtArgs> | null
    /**
     * The filter to search for the CommunityOtp to update in case it exists.
     */
    where: CommunityOtpWhereUniqueInput
    /**
     * In case the CommunityOtp found by the `where` argument doesn't exist, create a new CommunityOtp with this data.
     */
    create: XOR<CommunityOtpCreateInput, CommunityOtpUncheckedCreateInput>
    /**
     * In case the CommunityOtp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityOtpUpdateInput, CommunityOtpUncheckedUpdateInput>
  }

  /**
   * CommunityOtp delete
   */
  export type CommunityOtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityOtp
     */
    select?: CommunityOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityOtp
     */
    omit?: CommunityOtpOmit<ExtArgs> | null
    /**
     * Filter which CommunityOtp to delete.
     */
    where: CommunityOtpWhereUniqueInput
  }

  /**
   * CommunityOtp deleteMany
   */
  export type CommunityOtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityOtps to delete
     */
    where?: CommunityOtpWhereInput
    /**
     * Limit how many CommunityOtps to delete.
     */
    limit?: number
  }

  /**
   * CommunityOtp without action
   */
  export type CommunityOtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityOtp
     */
    select?: CommunityOtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityOtp
     */
    omit?: CommunityOtpOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    sanityId: 'sanityId',
    type: 'type',
    title: 'title',
    slug: 'slug',
    author: 'author',
    isPost: 'isPost',
    visibility: 'visibility',
    isEditorsPick: 'isEditorsPick',
    lastSyncedAt: 'lastSyncedAt',
    createdAt: 'createdAt'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const CommunitySubmissionScalarFieldEnum: {
    id: 'id',
    organizerName: 'organizerName',
    organizerEmail: 'organizerEmail',
    communityName: 'communityName',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type CommunitySubmissionScalarFieldEnum = (typeof CommunitySubmissionScalarFieldEnum)[keyof typeof CommunitySubmissionScalarFieldEnum]


  export const CommunityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const CommunityMemberScalarFieldEnum: {
    id: 'id',
    communityId: 'communityId',
    name: 'name',
    email: 'email',
    notificationsEnabled: 'notificationsEnabled',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    createdAt: 'createdAt'
  };

  export type CommunityMemberScalarFieldEnum = (typeof CommunityMemberScalarFieldEnum)[keyof typeof CommunityMemberScalarFieldEnum]


  export const CommunityOtpScalarFieldEnum: {
    id: 'id',
    communityId: 'communityId',
    email: 'email',
    name: 'name',
    otp: 'otp',
    action: 'action',
    expiresAt: 'expiresAt',
    verified: 'verified',
    verifiedAt: 'verifiedAt',
    createdAt: 'createdAt'
  };

  export type CommunityOtpScalarFieldEnum = (typeof CommunityOtpScalarFieldEnum)[keyof typeof CommunityOtpScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SubmissionStatus'
   */
  export type EnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus'>
    


  /**
   * Reference to a field of type 'SubmissionStatus[]'
   */
  export type ListEnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    name?: StringNullableFilter<"Admin"> | string | null
    passwordHash?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringNullableFilter<"Admin"> | string | null
    passwordHash?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: StringFilter<"Article"> | string
    sanityId?: StringFilter<"Article"> | string
    type?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    slug?: StringFilter<"Article"> | string
    author?: StringNullableFilter<"Article"> | string | null
    isPost?: BoolFilter<"Article"> | boolean
    visibility?: StringFilter<"Article"> | string
    isEditorsPick?: BoolFilter<"Article"> | boolean
    lastSyncedAt?: DateTimeFilter<"Article"> | Date | string
    createdAt?: DateTimeFilter<"Article"> | Date | string
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    sanityId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    author?: SortOrderInput | SortOrder
    isPost?: SortOrder
    visibility?: SortOrder
    isEditorsPick?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sanityId?: string
    slug?: string
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    type?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    author?: StringNullableFilter<"Article"> | string | null
    isPost?: BoolFilter<"Article"> | boolean
    visibility?: StringFilter<"Article"> | string
    isEditorsPick?: BoolFilter<"Article"> | boolean
    lastSyncedAt?: DateTimeFilter<"Article"> | Date | string
    createdAt?: DateTimeFilter<"Article"> | Date | string
  }, "id" | "sanityId" | "slug">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    sanityId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    author?: SortOrderInput | SortOrder
    isPost?: SortOrder
    visibility?: SortOrder
    isEditorsPick?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Article"> | string
    sanityId?: StringWithAggregatesFilter<"Article"> | string
    type?: StringWithAggregatesFilter<"Article"> | string
    title?: StringWithAggregatesFilter<"Article"> | string
    slug?: StringWithAggregatesFilter<"Article"> | string
    author?: StringNullableWithAggregatesFilter<"Article"> | string | null
    isPost?: BoolWithAggregatesFilter<"Article"> | boolean
    visibility?: StringWithAggregatesFilter<"Article"> | string
    isEditorsPick?: BoolWithAggregatesFilter<"Article"> | boolean
    lastSyncedAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
  }

  export type CommunitySubmissionWhereInput = {
    AND?: CommunitySubmissionWhereInput | CommunitySubmissionWhereInput[]
    OR?: CommunitySubmissionWhereInput[]
    NOT?: CommunitySubmissionWhereInput | CommunitySubmissionWhereInput[]
    id?: StringFilter<"CommunitySubmission"> | string
    organizerName?: StringFilter<"CommunitySubmission"> | string
    organizerEmail?: StringFilter<"CommunitySubmission"> | string
    communityName?: StringFilter<"CommunitySubmission"> | string
    description?: StringNullableFilter<"CommunitySubmission"> | string | null
    status?: EnumSubmissionStatusFilter<"CommunitySubmission"> | $Enums.SubmissionStatus
    createdAt?: DateTimeFilter<"CommunitySubmission"> | Date | string
  }

  export type CommunitySubmissionOrderByWithRelationInput = {
    id?: SortOrder
    organizerName?: SortOrder
    organizerEmail?: SortOrder
    communityName?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunitySubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunitySubmissionWhereInput | CommunitySubmissionWhereInput[]
    OR?: CommunitySubmissionWhereInput[]
    NOT?: CommunitySubmissionWhereInput | CommunitySubmissionWhereInput[]
    organizerName?: StringFilter<"CommunitySubmission"> | string
    organizerEmail?: StringFilter<"CommunitySubmission"> | string
    communityName?: StringFilter<"CommunitySubmission"> | string
    description?: StringNullableFilter<"CommunitySubmission"> | string | null
    status?: EnumSubmissionStatusFilter<"CommunitySubmission"> | $Enums.SubmissionStatus
    createdAt?: DateTimeFilter<"CommunitySubmission"> | Date | string
  }, "id">

  export type CommunitySubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    organizerName?: SortOrder
    organizerEmail?: SortOrder
    communityName?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: CommunitySubmissionCountOrderByAggregateInput
    _max?: CommunitySubmissionMaxOrderByAggregateInput
    _min?: CommunitySubmissionMinOrderByAggregateInput
  }

  export type CommunitySubmissionScalarWhereWithAggregatesInput = {
    AND?: CommunitySubmissionScalarWhereWithAggregatesInput | CommunitySubmissionScalarWhereWithAggregatesInput[]
    OR?: CommunitySubmissionScalarWhereWithAggregatesInput[]
    NOT?: CommunitySubmissionScalarWhereWithAggregatesInput | CommunitySubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommunitySubmission"> | string
    organizerName?: StringWithAggregatesFilter<"CommunitySubmission"> | string
    organizerEmail?: StringWithAggregatesFilter<"CommunitySubmission"> | string
    communityName?: StringWithAggregatesFilter<"CommunitySubmission"> | string
    description?: StringNullableWithAggregatesFilter<"CommunitySubmission"> | string | null
    status?: EnumSubmissionStatusWithAggregatesFilter<"CommunitySubmission"> | $Enums.SubmissionStatus
    createdAt?: DateTimeWithAggregatesFilter<"CommunitySubmission"> | Date | string
  }

  export type CommunityWhereInput = {
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    id?: StringFilter<"Community"> | string
    name?: StringFilter<"Community"> | string
    slug?: StringFilter<"Community"> | string
    description?: StringNullableFilter<"Community"> | string | null
    createdAt?: DateTimeFilter<"Community"> | Date | string
    members?: CommunityMemberListRelationFilter
  }

  export type CommunityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    members?: CommunityMemberOrderByRelationAggregateInput
  }

  export type CommunityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    name?: StringFilter<"Community"> | string
    description?: StringNullableFilter<"Community"> | string | null
    createdAt?: DateTimeFilter<"Community"> | Date | string
    members?: CommunityMemberListRelationFilter
  }, "id" | "slug">

  export type CommunityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    OR?: CommunityScalarWhereWithAggregatesInput[]
    NOT?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Community"> | string
    name?: StringWithAggregatesFilter<"Community"> | string
    slug?: StringWithAggregatesFilter<"Community"> | string
    description?: StringNullableWithAggregatesFilter<"Community"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
  }

  export type CommunityMemberWhereInput = {
    AND?: CommunityMemberWhereInput | CommunityMemberWhereInput[]
    OR?: CommunityMemberWhereInput[]
    NOT?: CommunityMemberWhereInput | CommunityMemberWhereInput[]
    id?: StringFilter<"CommunityMember"> | string
    communityId?: StringFilter<"CommunityMember"> | string
    name?: StringFilter<"CommunityMember"> | string
    email?: StringFilter<"CommunityMember"> | string
    notificationsEnabled?: BoolFilter<"CommunityMember"> | boolean
    deletedAt?: DateTimeNullableFilter<"CommunityMember"> | Date | string | null
    deletedBy?: StringNullableFilter<"CommunityMember"> | string | null
    createdAt?: DateTimeFilter<"CommunityMember"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
  }

  export type CommunityMemberOrderByWithRelationInput = {
    id?: SortOrder
    communityId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    notificationsEnabled?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    community?: CommunityOrderByWithRelationInput
  }

  export type CommunityMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    communityId_email?: CommunityMemberCommunityIdEmailCompoundUniqueInput
    AND?: CommunityMemberWhereInput | CommunityMemberWhereInput[]
    OR?: CommunityMemberWhereInput[]
    NOT?: CommunityMemberWhereInput | CommunityMemberWhereInput[]
    communityId?: StringFilter<"CommunityMember"> | string
    name?: StringFilter<"CommunityMember"> | string
    email?: StringFilter<"CommunityMember"> | string
    notificationsEnabled?: BoolFilter<"CommunityMember"> | boolean
    deletedAt?: DateTimeNullableFilter<"CommunityMember"> | Date | string | null
    deletedBy?: StringNullableFilter<"CommunityMember"> | string | null
    createdAt?: DateTimeFilter<"CommunityMember"> | Date | string
    community?: XOR<CommunityScalarRelationFilter, CommunityWhereInput>
  }, "id" | "communityId_email">

  export type CommunityMemberOrderByWithAggregationInput = {
    id?: SortOrder
    communityId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    notificationsEnabled?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CommunityMemberCountOrderByAggregateInput
    _max?: CommunityMemberMaxOrderByAggregateInput
    _min?: CommunityMemberMinOrderByAggregateInput
  }

  export type CommunityMemberScalarWhereWithAggregatesInput = {
    AND?: CommunityMemberScalarWhereWithAggregatesInput | CommunityMemberScalarWhereWithAggregatesInput[]
    OR?: CommunityMemberScalarWhereWithAggregatesInput[]
    NOT?: CommunityMemberScalarWhereWithAggregatesInput | CommunityMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommunityMember"> | string
    communityId?: StringWithAggregatesFilter<"CommunityMember"> | string
    name?: StringWithAggregatesFilter<"CommunityMember"> | string
    email?: StringWithAggregatesFilter<"CommunityMember"> | string
    notificationsEnabled?: BoolWithAggregatesFilter<"CommunityMember"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"CommunityMember"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"CommunityMember"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CommunityMember"> | Date | string
  }

  export type CommunityOtpWhereInput = {
    AND?: CommunityOtpWhereInput | CommunityOtpWhereInput[]
    OR?: CommunityOtpWhereInput[]
    NOT?: CommunityOtpWhereInput | CommunityOtpWhereInput[]
    id?: StringFilter<"CommunityOtp"> | string
    communityId?: StringFilter<"CommunityOtp"> | string
    email?: StringFilter<"CommunityOtp"> | string
    name?: StringNullableFilter<"CommunityOtp"> | string | null
    otp?: StringFilter<"CommunityOtp"> | string
    action?: StringFilter<"CommunityOtp"> | string
    expiresAt?: DateTimeFilter<"CommunityOtp"> | Date | string
    verified?: BoolFilter<"CommunityOtp"> | boolean
    verifiedAt?: DateTimeNullableFilter<"CommunityOtp"> | Date | string | null
    createdAt?: DateTimeFilter<"CommunityOtp"> | Date | string
  }

  export type CommunityOtpOrderByWithRelationInput = {
    id?: SortOrder
    communityId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    otp?: SortOrder
    action?: SortOrder
    expiresAt?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type CommunityOtpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunityOtpWhereInput | CommunityOtpWhereInput[]
    OR?: CommunityOtpWhereInput[]
    NOT?: CommunityOtpWhereInput | CommunityOtpWhereInput[]
    communityId?: StringFilter<"CommunityOtp"> | string
    email?: StringFilter<"CommunityOtp"> | string
    name?: StringNullableFilter<"CommunityOtp"> | string | null
    otp?: StringFilter<"CommunityOtp"> | string
    action?: StringFilter<"CommunityOtp"> | string
    expiresAt?: DateTimeFilter<"CommunityOtp"> | Date | string
    verified?: BoolFilter<"CommunityOtp"> | boolean
    verifiedAt?: DateTimeNullableFilter<"CommunityOtp"> | Date | string | null
    createdAt?: DateTimeFilter<"CommunityOtp"> | Date | string
  }, "id">

  export type CommunityOtpOrderByWithAggregationInput = {
    id?: SortOrder
    communityId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    otp?: SortOrder
    action?: SortOrder
    expiresAt?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CommunityOtpCountOrderByAggregateInput
    _max?: CommunityOtpMaxOrderByAggregateInput
    _min?: CommunityOtpMinOrderByAggregateInput
  }

  export type CommunityOtpScalarWhereWithAggregatesInput = {
    AND?: CommunityOtpScalarWhereWithAggregatesInput | CommunityOtpScalarWhereWithAggregatesInput[]
    OR?: CommunityOtpScalarWhereWithAggregatesInput[]
    NOT?: CommunityOtpScalarWhereWithAggregatesInput | CommunityOtpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommunityOtp"> | string
    communityId?: StringWithAggregatesFilter<"CommunityOtp"> | string
    email?: StringWithAggregatesFilter<"CommunityOtp"> | string
    name?: StringNullableWithAggregatesFilter<"CommunityOtp"> | string | null
    otp?: StringWithAggregatesFilter<"CommunityOtp"> | string
    action?: StringWithAggregatesFilter<"CommunityOtp"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"CommunityOtp"> | Date | string
    verified?: BoolWithAggregatesFilter<"CommunityOtp"> | boolean
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"CommunityOtp"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CommunityOtp"> | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    passwordHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateInput = {
    id?: string
    sanityId: string
    type: string
    title: string
    slug: string
    author?: string | null
    isPost: boolean
    visibility?: string
    isEditorsPick?: boolean
    lastSyncedAt?: Date | string
    createdAt?: Date | string
  }

  export type ArticleUncheckedCreateInput = {
    id?: string
    sanityId: string
    type: string
    title: string
    slug: string
    author?: string | null
    isPost: boolean
    visibility?: string
    isEditorsPick?: boolean
    lastSyncedAt?: Date | string
    createdAt?: Date | string
  }

  export type ArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sanityId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    isPost?: BoolFieldUpdateOperationsInput | boolean
    visibility?: StringFieldUpdateOperationsInput | string
    isEditorsPick?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sanityId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    isPost?: BoolFieldUpdateOperationsInput | boolean
    visibility?: StringFieldUpdateOperationsInput | string
    isEditorsPick?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyInput = {
    id?: string
    sanityId: string
    type: string
    title: string
    slug: string
    author?: string | null
    isPost: boolean
    visibility?: string
    isEditorsPick?: boolean
    lastSyncedAt?: Date | string
    createdAt?: Date | string
  }

  export type ArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sanityId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    isPost?: BoolFieldUpdateOperationsInput | boolean
    visibility?: StringFieldUpdateOperationsInput | string
    isEditorsPick?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sanityId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    isPost?: BoolFieldUpdateOperationsInput | boolean
    visibility?: StringFieldUpdateOperationsInput | string
    isEditorsPick?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunitySubmissionCreateInput = {
    id?: string
    organizerName: string
    organizerEmail: string
    communityName: string
    description?: string | null
    status?: $Enums.SubmissionStatus
    createdAt?: Date | string
  }

  export type CommunitySubmissionUncheckedCreateInput = {
    id?: string
    organizerName: string
    organizerEmail: string
    communityName: string
    description?: string | null
    status?: $Enums.SubmissionStatus
    createdAt?: Date | string
  }

  export type CommunitySubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerEmail?: StringFieldUpdateOperationsInput | string
    communityName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunitySubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerEmail?: StringFieldUpdateOperationsInput | string
    communityName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunitySubmissionCreateManyInput = {
    id?: string
    organizerName: string
    organizerEmail: string
    communityName: string
    description?: string | null
    status?: $Enums.SubmissionStatus
    createdAt?: Date | string
  }

  export type CommunitySubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerEmail?: StringFieldUpdateOperationsInput | string
    communityName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunitySubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerEmail?: StringFieldUpdateOperationsInput | string
    communityName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    members?: CommunityMemberCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    members?: CommunityMemberUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CommunityMemberUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: CommunityMemberUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CommunityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityMemberCreateInput = {
    id?: string
    name: string
    email: string
    notificationsEnabled?: boolean
    deletedAt?: Date | string | null
    deletedBy?: string | null
    createdAt?: Date | string
    community: CommunityCreateNestedOneWithoutMembersInput
  }

  export type CommunityMemberUncheckedCreateInput = {
    id?: string
    communityId: string
    name: string
    email: string
    notificationsEnabled?: boolean
    deletedAt?: Date | string | null
    deletedBy?: string | null
    createdAt?: Date | string
  }

  export type CommunityMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutMembersNestedInput
  }

  export type CommunityMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityMemberCreateManyInput = {
    id?: string
    communityId: string
    name: string
    email: string
    notificationsEnabled?: boolean
    deletedAt?: Date | string | null
    deletedBy?: string | null
    createdAt?: Date | string
  }

  export type CommunityMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityOtpCreateInput = {
    id?: string
    communityId: string
    email: string
    name?: string | null
    otp: string
    action: string
    expiresAt: Date | string
    verified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CommunityOtpUncheckedCreateInput = {
    id?: string
    communityId: string
    email: string
    name?: string | null
    otp: string
    action: string
    expiresAt: Date | string
    verified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CommunityOtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityOtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityOtpCreateManyInput = {
    id?: string
    communityId: string
    email: string
    name?: string | null
    otp: string
    action: string
    expiresAt: Date | string
    verified?: boolean
    verifiedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CommunityOtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityOtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    communityId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    sanityId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    author?: SortOrder
    isPost?: SortOrder
    visibility?: SortOrder
    isEditorsPick?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    sanityId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    author?: SortOrder
    isPost?: SortOrder
    visibility?: SortOrder
    isEditorsPick?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    sanityId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    author?: SortOrder
    isPost?: SortOrder
    visibility?: SortOrder
    isEditorsPick?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type CommunitySubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    organizerName?: SortOrder
    organizerEmail?: SortOrder
    communityName?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunitySubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    organizerName?: SortOrder
    organizerEmail?: SortOrder
    communityName?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunitySubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    organizerName?: SortOrder
    organizerEmail?: SortOrder
    communityName?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type CommunityMemberListRelationFilter = {
    every?: CommunityMemberWhereInput
    some?: CommunityMemberWhereInput
    none?: CommunityMemberWhereInput
  }

  export type CommunityMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CommunityScalarRelationFilter = {
    is?: CommunityWhereInput
    isNot?: CommunityWhereInput
  }

  export type CommunityMemberCommunityIdEmailCompoundUniqueInput = {
    communityId: string
    email: string
  }

  export type CommunityMemberCountOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    notificationsEnabled?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    notificationsEnabled?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityMemberMinOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    notificationsEnabled?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CommunityOtpCountOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    otp?: SortOrder
    action?: SortOrder
    expiresAt?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityOtpMaxOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    otp?: SortOrder
    action?: SortOrder
    expiresAt?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityOtpMinOrderByAggregateInput = {
    id?: SortOrder
    communityId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    otp?: SortOrder
    action?: SortOrder
    expiresAt?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionStatus
  }

  export type CommunityMemberCreateNestedManyWithoutCommunityInput = {
    create?: XOR<CommunityMemberCreateWithoutCommunityInput, CommunityMemberUncheckedCreateWithoutCommunityInput> | CommunityMemberCreateWithoutCommunityInput[] | CommunityMemberUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: CommunityMemberCreateOrConnectWithoutCommunityInput | CommunityMemberCreateOrConnectWithoutCommunityInput[]
    createMany?: CommunityMemberCreateManyCommunityInputEnvelope
    connect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
  }

  export type CommunityMemberUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<CommunityMemberCreateWithoutCommunityInput, CommunityMemberUncheckedCreateWithoutCommunityInput> | CommunityMemberCreateWithoutCommunityInput[] | CommunityMemberUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: CommunityMemberCreateOrConnectWithoutCommunityInput | CommunityMemberCreateOrConnectWithoutCommunityInput[]
    createMany?: CommunityMemberCreateManyCommunityInputEnvelope
    connect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
  }

  export type CommunityMemberUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<CommunityMemberCreateWithoutCommunityInput, CommunityMemberUncheckedCreateWithoutCommunityInput> | CommunityMemberCreateWithoutCommunityInput[] | CommunityMemberUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: CommunityMemberCreateOrConnectWithoutCommunityInput | CommunityMemberCreateOrConnectWithoutCommunityInput[]
    upsert?: CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput | CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: CommunityMemberCreateManyCommunityInputEnvelope
    set?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    disconnect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    delete?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    connect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    update?: CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput | CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: CommunityMemberUpdateManyWithWhereWithoutCommunityInput | CommunityMemberUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: CommunityMemberScalarWhereInput | CommunityMemberScalarWhereInput[]
  }

  export type CommunityMemberUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<CommunityMemberCreateWithoutCommunityInput, CommunityMemberUncheckedCreateWithoutCommunityInput> | CommunityMemberCreateWithoutCommunityInput[] | CommunityMemberUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: CommunityMemberCreateOrConnectWithoutCommunityInput | CommunityMemberCreateOrConnectWithoutCommunityInput[]
    upsert?: CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput | CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: CommunityMemberCreateManyCommunityInputEnvelope
    set?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    disconnect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    delete?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    connect?: CommunityMemberWhereUniqueInput | CommunityMemberWhereUniqueInput[]
    update?: CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput | CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: CommunityMemberUpdateManyWithWhereWithoutCommunityInput | CommunityMemberUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: CommunityMemberScalarWhereInput | CommunityMemberScalarWhereInput[]
  }

  export type CommunityCreateNestedOneWithoutMembersInput = {
    create?: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutMembersInput
    connect?: CommunityWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CommunityUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutMembersInput
    upsert?: CommunityUpsertWithoutMembersInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutMembersInput, CommunityUpdateWithoutMembersInput>, CommunityUncheckedUpdateWithoutMembersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CommunityMemberCreateWithoutCommunityInput = {
    id?: string
    name: string
    email: string
    notificationsEnabled?: boolean
    deletedAt?: Date | string | null
    deletedBy?: string | null
    createdAt?: Date | string
  }

  export type CommunityMemberUncheckedCreateWithoutCommunityInput = {
    id?: string
    name: string
    email: string
    notificationsEnabled?: boolean
    deletedAt?: Date | string | null
    deletedBy?: string | null
    createdAt?: Date | string
  }

  export type CommunityMemberCreateOrConnectWithoutCommunityInput = {
    where: CommunityMemberWhereUniqueInput
    create: XOR<CommunityMemberCreateWithoutCommunityInput, CommunityMemberUncheckedCreateWithoutCommunityInput>
  }

  export type CommunityMemberCreateManyCommunityInputEnvelope = {
    data: CommunityMemberCreateManyCommunityInput | CommunityMemberCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type CommunityMemberUpsertWithWhereUniqueWithoutCommunityInput = {
    where: CommunityMemberWhereUniqueInput
    update: XOR<CommunityMemberUpdateWithoutCommunityInput, CommunityMemberUncheckedUpdateWithoutCommunityInput>
    create: XOR<CommunityMemberCreateWithoutCommunityInput, CommunityMemberUncheckedCreateWithoutCommunityInput>
  }

  export type CommunityMemberUpdateWithWhereUniqueWithoutCommunityInput = {
    where: CommunityMemberWhereUniqueInput
    data: XOR<CommunityMemberUpdateWithoutCommunityInput, CommunityMemberUncheckedUpdateWithoutCommunityInput>
  }

  export type CommunityMemberUpdateManyWithWhereWithoutCommunityInput = {
    where: CommunityMemberScalarWhereInput
    data: XOR<CommunityMemberUpdateManyMutationInput, CommunityMemberUncheckedUpdateManyWithoutCommunityInput>
  }

  export type CommunityMemberScalarWhereInput = {
    AND?: CommunityMemberScalarWhereInput | CommunityMemberScalarWhereInput[]
    OR?: CommunityMemberScalarWhereInput[]
    NOT?: CommunityMemberScalarWhereInput | CommunityMemberScalarWhereInput[]
    id?: StringFilter<"CommunityMember"> | string
    communityId?: StringFilter<"CommunityMember"> | string
    name?: StringFilter<"CommunityMember"> | string
    email?: StringFilter<"CommunityMember"> | string
    notificationsEnabled?: BoolFilter<"CommunityMember"> | boolean
    deletedAt?: DateTimeNullableFilter<"CommunityMember"> | Date | string | null
    deletedBy?: StringNullableFilter<"CommunityMember"> | string | null
    createdAt?: DateTimeFilter<"CommunityMember"> | Date | string
  }

  export type CommunityCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CommunityUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CommunityCreateOrConnectWithoutMembersInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput>
  }

  export type CommunityUpsertWithoutMembersInput = {
    update: XOR<CommunityUpdateWithoutMembersInput, CommunityUncheckedUpdateWithoutMembersInput>
    create: XOR<CommunityCreateWithoutMembersInput, CommunityUncheckedCreateWithoutMembersInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutMembersInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutMembersInput, CommunityUncheckedUpdateWithoutMembersInput>
  }

  export type CommunityUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityMemberCreateManyCommunityInput = {
    id?: string
    name: string
    email: string
    notificationsEnabled?: boolean
    deletedAt?: Date | string | null
    deletedBy?: string | null
    createdAt?: Date | string
  }

  export type CommunityMemberUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityMemberUncheckedUpdateWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityMemberUncheckedUpdateManyWithoutCommunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    notificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}