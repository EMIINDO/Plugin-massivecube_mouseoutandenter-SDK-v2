"use strict";
{
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.massivecube_mouseoutandenter;

    PLUGIN_CLASS.Instance = class mouseoutandenterInstance extends SDK.IInstanceBase {
        constructor(sdkType, inst) {
            super(sdkType, inst);
        }

        Release() { }

        OnCreate() { }

        OnPropertyChanged(id, value) { }

        LoadC2Property(name, valueString) {
            return false; // not handled
        }
    };
}