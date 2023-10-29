import rule from "../../src";
import { RuleTester } from "@typescript-eslint/rule-tester";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser",
});

ruleTester.run("my-rule", rule, {
  valid: [
    {
      code: `const a = "a";`,
    },
    {
      code: `const a = !"a";`,
    },
    {
      code: `const a = !!"a";`,
    },
  ],
  invalid: [
    {
      code: `const a = !!!"a";`,
      errors: [
        {
          messageId: "noExtraExclamation",
        },
      ],
    },
  ],
});
