/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
  id: string;
}

declare type GlobalFetch = WindowOrWorkerGlobalScope;
