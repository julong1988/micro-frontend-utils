interface IMfModule {
  mount: Function;
  unmount: Function;
}
interface IModuleLoader {
  (id: string, component: any, dom?: ReactDOM): void;
}