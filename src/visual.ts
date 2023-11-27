"use strict";
import powerbi from "powerbi-visuals-api";

import DataView = powerbi.DataView;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

import * as React from "react";
import * as ReactDOM from "react-dom";
import ReactCircleCard from "./component/ReactCircleCard";
import { State } from "./interfaces";

export class Visual implements IVisual {
    private target: HTMLElement;
    private updateState: (newState: State) => void;

    constructor(options: VisualConstructorOptions) {
        this.updateState = () => {};

        const reactRoot = React.createElement(ReactCircleCard, {
            updateCallback: (updateFunc: (newState: State) => void) => {
                this.updateState = updateFunc;
            },
        });

        this.target = options.element;
        ReactDOM.render(reactRoot, this.target);
    }

    public update(options: VisualUpdateOptions) {
        this.updateState({
            height: options.viewport.height,
            width: options.viewport.width,
            message: "Hello from React!",
        });
    }
}