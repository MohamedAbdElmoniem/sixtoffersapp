import LocalizedStrings from "react-localization";
import * as en from "./languages/en.json";

let strings = new LocalizedStrings({ en });

strings.setLanguage("en");

export { strings };
