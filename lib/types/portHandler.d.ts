export interface IMessagePort {
    onmessage: (event: MessageEvent) => void | Promise<void>;
    postMessage(data: any[], transfers?: any[]): any;
}
export declare class PortHandler {
    private port;
    private callHandler;
    private deferreds;
    private nextPid;
    constructor(port: IMessagePort);
    call(service: any, method: any, args: any): Promise<any>;
    setCallHandler(handler: any): void;
    fire(service: any, method: any, args: any): void;
    private handleMessage;
}
