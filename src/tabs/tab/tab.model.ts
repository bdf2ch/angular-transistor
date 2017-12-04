export interface  ITabPlugin {
    id: string;
    caption: string;
}


export class TabPlugin {
    id: string;
    caption: string;
    isActive: boolean;

    constructor(config?: ITabPlugin) {
        if (config) {
            this.id = config.id;
            this.caption = config.caption;
        }
        this.isActive = false;
    };
}