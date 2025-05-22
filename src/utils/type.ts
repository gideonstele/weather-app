/* eslint-disable @typescript-eslint/no-explicit-any */
type ReactRefComponent<Props extends { ref?: React.Ref<any> | string }> = (props: Props) => React.ReactNode;

type ExtractRefAttributesRef<T> = T extends React.RefAttributes<infer P> ? P : never;

export type GetRef<T extends ReactRefComponent<any> | React.Component<any>> =
  T extends React.Component<any> ? T : T extends React.ComponentType<infer P> ? ExtractRefAttributesRef<P> : never;
