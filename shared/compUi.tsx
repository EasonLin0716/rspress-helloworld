export default function PluginUI(props?: { foo: string }) {
  return <>
    <p>This is a global layout component</p>
    <span>prop value foo: {props?.foo}</span>
  </>;
}