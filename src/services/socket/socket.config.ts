import { SocketIoConfig } from "ngx-socket-io";
import { BaseUrl } from "src/core/url.config";

export const SocketConfig: SocketIoConfig = {
    url: BaseUrl,
    options: {
    },
}