/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FormField {
        "errorMessage": string;
        "for": string;
        "label": string;
        "showError": boolean;
    }
    interface TaskCard {
        "date": string;
        "description": string;
        "displayNone": boolean;
        "img": string;
        "tags": string;
        "taskTitle": string;
    }
    interface TaskDetail {
        "date": string;
        "description": string;
        "img": string;
        "labels": string;
        "notes": string;
    }
}
declare global {
    interface HTMLFormFieldElement extends Components.FormField, HTMLStencilElement {
    }
    var HTMLFormFieldElement: {
        prototype: HTMLFormFieldElement;
        new (): HTMLFormFieldElement;
    };
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
    interface HTMLElementTagNameMap {
        "form-field": HTMLFormFieldElement;
        "task-card": HTMLTaskCardElement;
        "task-detail": HTMLTaskDetailElement;
    }
}
declare namespace LocalJSX {
    interface FormField {
        "errorMessage"?: string;
        "for"?: string;
        "label"?: string;
        "showError"?: boolean;
    }
    interface TaskCard {
        "date"?: string;
        "description"?: string;
        "displayNone"?: boolean;
        "img"?: string;
        "tags"?: string;
        "taskTitle"?: string;
    }
    interface TaskDetail {
        "date"?: string;
        "description"?: string;
        "img"?: string;
        "labels"?: string;
        "notes"?: string;
    }
    interface IntrinsicElements {
        "form-field": FormField;
        "task-card": TaskCard;
        "task-detail": TaskDetail;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "form-field": LocalJSX.FormField & JSXBase.HTMLAttributes<HTMLFormFieldElement>;
            "task-card": LocalJSX.TaskCard & JSXBase.HTMLAttributes<HTMLTaskCardElement>;
            "task-detail": LocalJSX.TaskDetail & JSXBase.HTMLAttributes<HTMLTaskDetailElement>;
        }
    }
}
