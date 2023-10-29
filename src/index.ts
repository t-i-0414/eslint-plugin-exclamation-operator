import { ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://github.com/t-i-0414/eslint-plugin-${name}/blob/main`
);

export default createRule({
  name: "exclamation-operator",
  meta: {
    docs: {
      description: "disallow unnecessary exclamation operator.",
    },
    messages: {
      noExtraExclamation: "No more than 3 exclamation marks required.",
    },
    type: "problem",
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      UnaryExpression(node) {
        if (
          node.operator === "!" &&
          node.parent?.type === "UnaryExpression" &&
          node.parent.operator === "!" &&
          node.parent.parent?.type === "UnaryExpression" &&
          node.parent.parent.operator === "!"
        ) {
          context.report({
            messageId: "noExtraExclamation",
            node,
          });
        }
      },
    };
  },
});
