"use strict";
{
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.massivecube_mouseoutandenter;

    PLUGIN_CLASS.Type = class mouseoutandenterType extends SDK.ITypeBase {
        constructor(sdkPlugin, iObjectType) {
            super(sdkPlugin, iObjectType);
        }
    };
}