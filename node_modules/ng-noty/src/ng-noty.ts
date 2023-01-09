import {Injectable} from "@angular/core";

import {NotyModel, NotyOptions} from "./noty.model";

declare let Noty: any;

@Injectable()
export class NgNoty {

    create(options: NotyOptions): NotyModel {
        return new Noty(options);
    }

    closeAll(name?: string) {
        Noty.closeAll(name);
    }

    setMaxVisible(count: number, name?: string) {
        Noty.setMaxVisible(count, name);
    }
}
