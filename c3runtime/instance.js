"use strict";
{
    globalThis.C3.Plugins.massivecube_mouseoutandenter.Instance = class mouseoutandenterInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();


            if (properties) {
                this.ocanvNumber = properties[0];
            }

            this.wi = this.getBoundingQuad();

            this.ocanv = document.getElementsByTagName("canvas")[this.ocanvNumber];

            this.ocanv.addEventListener("mouseout", e => {
                this._trigger(globalThis.C3.Plugins.massivecube_mouseoutandenter.Cnds.Onmouseout, this.wi);
            }, false);

            this.ocanv.addEventListener("mouseenter", e => {
                this._trigger(globalThis.C3.Plugins.massivecube_mouseoutandenter.Cnds.Onmouseenter, this.wi);
            });

        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }


    };
}