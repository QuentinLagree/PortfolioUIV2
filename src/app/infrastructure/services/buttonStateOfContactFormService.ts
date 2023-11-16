import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class ButtonStateService {
    STATES = {
        "success": 'success',
        "default": 'default',
        "loading": 'loading',
        "error": 'error'
    }

    activeState: string = this.STATES.default;

    constructor () {}

    setState(state: string) {
        console.log(state)
        this.activeState = state;
    }

    getState (): string {
        return this.activeState;
    }
    
}   