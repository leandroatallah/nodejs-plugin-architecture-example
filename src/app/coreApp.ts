import EventEmitter from "events";
import { PluginInterface } from "../interfaces/pluginInterface";

export class CoreApp extends EventEmitter {
  readonly plugins: PluginInterface[];

  constructor() {
    super();
    this.plugins = [];
  }

  registerPlugin(plugin: PluginInterface) {
    this.plugins.push(plugin);
    plugin.init(this);
  }

  processCommand(command: string) {
    this.emit("command", command);
  }
}
