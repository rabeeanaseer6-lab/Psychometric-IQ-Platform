import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { CreateResultBody, ErrorResponse, HealthStatus, LeaderboardEntry, TestResult, TestStats } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * Returns server health status
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Submit a completed IQ test result
 */
export declare const getSubmitTestResultUrl: () => string;
export declare const submitTestResult: (createResultBody: CreateResultBody, options?: RequestInit) => Promise<TestResult>;
export declare const getSubmitTestResultMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitTestResult>>, TError, {
        data: BodyType<CreateResultBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof submitTestResult>>, TError, {
    data: BodyType<CreateResultBody>;
}, TContext>;
export type SubmitTestResultMutationResult = NonNullable<Awaited<ReturnType<typeof submitTestResult>>>;
export type SubmitTestResultMutationBody = BodyType<CreateResultBody>;
export type SubmitTestResultMutationError = ErrorType<ErrorResponse>;
/**
 * @summary Submit a completed IQ test result
 */
export declare const useSubmitTestResult: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof submitTestResult>>, TError, {
        data: BodyType<CreateResultBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof submitTestResult>>, TError, {
    data: BodyType<CreateResultBody>;
}, TContext>;
/**
 * @summary Get a test result by ID
 */
export declare const getGetResultByIdUrl: (id: number) => string;
export declare const getResultById: (id: number, options?: RequestInit) => Promise<TestResult>;
export declare const getGetResultByIdQueryKey: (id: number) => readonly [`/api/results/${number}`];
export declare const getGetResultByIdQueryOptions: <TData = Awaited<ReturnType<typeof getResultById>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getResultById>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getResultById>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetResultByIdQueryResult = NonNullable<Awaited<ReturnType<typeof getResultById>>>;
export type GetResultByIdQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get a test result by ID
 */
export declare function useGetResultById<TData = Awaited<ReturnType<typeof getResultById>>, TError = ErrorType<ErrorResponse>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getResultById>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get top 10 scores of the day
 */
export declare const getGetLeaderboardUrl: () => string;
export declare const getLeaderboard: (options?: RequestInit) => Promise<LeaderboardEntry[]>;
export declare const getGetLeaderboardQueryKey: () => readonly ["/api/leaderboard"];
export declare const getGetLeaderboardQueryOptions: <TData = Awaited<ReturnType<typeof getLeaderboard>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLeaderboard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getLeaderboard>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetLeaderboardQueryResult = NonNullable<Awaited<ReturnType<typeof getLeaderboard>>>;
export type GetLeaderboardQueryError = ErrorType<unknown>;
/**
 * @summary Get top 10 scores of the day
 */
export declare function useGetLeaderboard<TData = Awaited<ReturnType<typeof getLeaderboard>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getLeaderboard>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get overall test statistics
 */
export declare const getGetStatsUrl: () => string;
export declare const getStats: (options?: RequestInit) => Promise<TestStats>;
export declare const getGetStatsQueryKey: () => readonly ["/api/stats"];
export declare const getGetStatsQueryOptions: <TData = Awaited<ReturnType<typeof getStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getStats>>>;
export type GetStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get overall test statistics
 */
export declare function useGetStats<TData = Awaited<ReturnType<typeof getStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map