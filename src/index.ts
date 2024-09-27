import { CoreApp } from "./app/coreApp";
import { ExamplePlugin } from "./plugins/examplePlugin";

const app = new CoreApp();

app.registerPlugin(new ExamplePlugin());

app.processCommand("/hello");
