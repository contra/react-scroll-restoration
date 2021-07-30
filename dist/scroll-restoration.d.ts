/// <reference types="react" />
import { RouteComponentProps } from 'react-router-dom';
export declare const DefaultKey = "init-enter";
interface IProps {
    visitedUrl: Map<string, number>;
    node?: HTMLElement;
}
declare function ScrollRestoration({ history, visitedUrl, node }: RouteComponentProps & IProps): null;
declare const _default: import("react").ComponentClass<Pick<RouteComponentProps<{}, import("react-router").StaticContext, import("history").History.UnknownFacade> & IProps, "visitedUrl" | "node">, any> & import("react-router").WithRouterStatics<import("react").MemoExoticComponent<typeof ScrollRestoration>>;
export default _default;
//# sourceMappingURL=scroll-restoration.d.ts.map