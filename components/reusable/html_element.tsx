export interface spanType {
  children: string;
  className: string;
}

export function SpanElement(props: spanType) {
  return <span className={props.className}>{props.children}</span>;
}
