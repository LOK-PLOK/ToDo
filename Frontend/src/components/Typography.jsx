export function H1(props) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {props.children}
    </h1>
  );
}

export function H2(props) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {props.children}
    </h2>
  );
}

export function H3(props) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {props.children}
    </h3>
  );
}

export function H4(props) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {props.children}
    </h4>
  );
}

export function P(props) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {props.children}
    </p>
  );
}

export function Blockquote(props) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">
      {props.children}
    </blockquote>
  );
}

export function InlineCode(props) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {props.children}
    </code>
  );
}

export function Lead(props) {
  return (
    <p className="text-xl text-muted-foreground">
      {props.children}
    </p>
  );
}

export function Large(props) {
  return <div className="text-lg font-semibold">{props.children}</div>;
}

export function Small(props) {
  return (
    <small className="text-sm font-medium leading-none">{props.children}</small>
  );
}

export function Muted(props) {
  return (
    <p className="text-sm text-muted-foreground">{props.children}</p>
  );
}
