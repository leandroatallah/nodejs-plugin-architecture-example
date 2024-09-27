import EventEmitter from "events";
import { type PluginInterface } from "../interfaces/pluginInterface";

export class ExamplePlugin implements PluginInterface {
  init(coreApp: EventEmitter) {
    coreApp.on("command", this.handleCommand.bind(this));
  }

  handleCommand(command: string) {
    if (command === "/hello") {
      console.log("Example Plugin: Hello!");
    }
  }
}
