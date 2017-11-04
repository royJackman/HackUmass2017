import { Observable } from 'data/observable';
import { topmost } from "ui/frame";

export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
    }

    get message(): string {
        return this._message;
    }
    
    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    }

    public onTap() {
        this._counter--;
        this.updateMessage();
    }

    public changePageMain() {
        this._counter--;
        this.updateMessage();
        topmost().navigate({
            moduleName: "pages/main",
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        });
    }
    public changePageLogin() {
        this._counter--;
        this.updateMessage();
        topmost().navigate({
            moduleName: "pages/login",
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        });
    }
    public changePageProfile() {
        this._counter--;
        this.updateMessage();
        topmost().navigate({
            moduleName: "pages/profile",
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        });
    }
    public changePageMatches() {
        this._counter--;
        this.updateMessage();
        topmost().navigate({
            moduleName: "pages/matches",
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        });
    }
    public changePageChat() {
        this._counter--;
        this.updateMessage();
        topmost().navigate({
            moduleName: "pages/chat",
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        });
    }
    public changePageMatchProfile() {
        this._counter--;
        this.updateMessage();
        topmost().navigate({
            moduleName: "pages/matchProfile",
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        });
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}