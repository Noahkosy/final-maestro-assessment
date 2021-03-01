/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TaskCard {
        "date": string;
        "description": string;
        "img": string;
        "tags": string;
        "title": string;
    }
    interface TaskDetail {
        "date": string;
        "description": string;
        "img": string;
        "labels": string;
        "notes": string;
    }
    interface TaskForm {
        "method": any;
    }
}
declare global {
    interface HTMLTaskCardElement extends Components.TaskCard, HTMLStencilElement {
    }
    var HTMLTaskCardElement: {
        prototype: HTMLTaskCardElement;
        new (): HTMLTaskCardElement;
    };
    interface HTMLTaskDetailElement extends Components.TaskDetail, HTMLStencilElement {
    }
    var HTMLTaskDetailElement: {
        prototype: HTMLTaskDetailElement;
        new (): HTMLTaskDetailElement;
    };
    interface HTMLTaskFormElement extends Components.TaskForm, HTMLStencilElement {
    }
    var HTMLTaskFormElement: {
        prototype: HTMLTaskFormElement;
        new (): HTMLTaskFormElement;
    };
    interface HTMLElementTagNameMap {
        "task-card": HTMLTaskCardElement;
        "task-detail": HTMLTaskDetailElement;
        "task-form": HTMLTaskFormElement;
    }
}
declare namespace LocalJSX {
    interface TaskCard {
        "date"?: string;
        "description"?: string;
        "img"?: string;
        "tags"?: string;
        "title"?: string;
    }
    interface TaskDetail {
        "date"?: string;
        "description"?: string;
        "img"?: string;
        "labels"?: string;
        "notes"?: string;
    }
    interface TaskForm {
        "method"?: any;
    }
    interface IntrinsicElements {
        "task-card": TaskCard;
        "task-detail": TaskDetail;
        "task-form": TaskForm;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "task-card": LocalJSX.TaskCard & JSXBase.HTMLAttributes<HTMLTaskCardElement>;
            "task-detail": LocalJSX.TaskDetail & JSXBase.HTMLAttributes<HTMLTaskDetailElement>;
            "task-form": LocalJSX.TaskForm & JSXBase.HTMLAttributes<HTMLTaskFormElement>;
        }
    }
}
